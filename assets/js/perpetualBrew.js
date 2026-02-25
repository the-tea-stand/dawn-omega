// Times in the schedule are treated as New York time (ET).
// buildDate constructs a Date by appending the NY UTC offset for that day.
const buildDateET = (dayISO, timeHHMM) => {
  // Get the UTC offset ET has on the given day by asking Intl for a known
  // UTC instant and comparing it to its ET representation.
  const probe = new Date(`${dayISO}T12:00:00Z`);
  const etParts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(probe);
  const get = (type) => etParts.find((p) => p.type === type).value;
  const etHour = parseInt(get("hour"), 10);
  const utcHour = probe.getUTCHours();
  const offsetHours = etHour - utcHour; // e.g. -4 or -5
  const sign = offsetHours >= 0 ? "+" : "-";
  const abs = Math.abs(offsetHours);
  const offset = `${sign}${String(abs).padStart(2, "0")}:00`;
  return new Date(`${dayISO}T${timeHHMM}:00${offset}`);
};

const dateDisplayOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "America/New_York",
};

const timeDisplayOptions = {
  hour: "numeric",
  minute: "2-digit",
  timeZone: "America/New_York",
};

const timeDisplayOptionsWithTZ = {
  ...timeDisplayOptions,
  timeZoneName: "short",
};

const formatTimeRange = (start, end) => {
  const s = start.toLocaleString("en-US", timeDisplayOptions);
  const e = end.toLocaleString("en-US", timeDisplayOptionsWithTZ);
  return `${s} – ${e}`;
};

const WMO_CODES = {
  0: "Clear sky",
  1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
  45: "Fog", 48: "Icy fog",
  51: "Light drizzle", 53: "Moderate drizzle", 55: "Dense drizzle",
  61: "Slight rain", 63: "Moderate rain", 65: "Heavy rain",
  71: "Slight snow", 73: "Moderate snow", 75: "Heavy snow",
  77: "Snow grains",
  80: "Slight showers", 81: "Moderate showers", 82: "Violent showers",
  85: "Slight snow showers", 86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm w/ hail", 99: "Thunderstorm w/ heavy hail",
};

const fetchForecast = async (start, end) => {
  const midpoint = new Date((start.getTime() + end.getTime()) / 2);
  midpoint.setMinutes(midpoint.getMinutes() >= 30 ? 60 : 0, 0, 0);

  const etParts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", hour12: false,
  }).formatToParts(midpoint);
  const get = (type) => etParts.find((p) => p.type === type).value;
  const dateStr = `${get("year")}-${get("month")}-${get("day")}`;
  const targetHour = parseInt(get("hour"), 10) % 24;

  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", perpetualBrewLat);
  url.searchParams.set("longitude", perpetualBrewLon);
  url.searchParams.set("hourly", "temperature_2m,windspeed_10m,weathercode");
  url.searchParams.set("temperature_unit", "fahrenheit");
  url.searchParams.set("windspeed_unit", "mph");
  url.searchParams.set("timezone", "America/New_York");
  url.searchParams.set("start_date", dateStr);
  url.searchParams.set("end_date", dateStr);

  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();

  const { time, temperature_2m, windspeed_10m, weathercode } = data.hourly;
  const idx = time.findIndex((t) => parseInt(t.slice(11, 13), 10) === targetHour);
  if (idx === -1) throw new Error("Target hour not found");

  return {
    description: WMO_CODES[weathercode[idx]] ?? `Code ${weathercode[idx]}`,
    temp: Math.round(temperature_2m[idx]),
    wind: Math.round(windspeed_10m[idx]),
  };
};

const STATES = ["upcoming", "live", "ended"];
let stateIndex = 0;

const badgeConfig = {
  upcoming: { text: "Upcoming",          cls: "pb-badge--upcoming" },
  live:     { text: "🫖 Live now",        cls: "pb-badge--live"     },
  ended:    { text: "No upcoming events", cls: "pb-badge--ended"    },
};

const setBadge = (state) => {
  const badge = document.getElementById("pb-live-badge");
  badge.className = "pb-badge";
  badge.classList.add(badgeConfig[state].cls);
  badge.textContent = badgeConfig[state].text;
};

const populatePerpetualBrew = () => {
  const entries = perpetualBrewSchedule.map((e) => ({
    host: e.host,
    start: buildDateET(e.day, e.startTime),
    end: buildDateET(e.day, e.endTime),
  }));

  const shown = entries[0];

  document.getElementById("pb-host").textContent = shown.host;
  document.getElementById("pb-date").textContent = shown.start.toLocaleString("en-US", dateDisplayOptions);
  document.getElementById("pb-time").textContent = formatTimeRange(shown.start, shown.end);

  const forecastEl = document.getElementById("pb-forecast");
  forecastEl.textContent = "Loading…";
  fetchForecast(shown.start, shown.end)
    .then(({ description, temp, wind }) => {
      forecastEl.textContent = `${description} · ${temp}°F · ${wind} mph winds`;
    })
    .catch(() => {
      forecastEl.textContent = "Forecast unavailable";
    });

  setBadge(STATES[stateIndex]);

  document.getElementById("pb-toggle-btn").addEventListener("click", () => {
    stateIndex = (stateIndex + 1) % STATES.length;
    setBadge(STATES[stateIndex]);
  });
};

document.addEventListener("DOMContentLoaded", populatePerpetualBrew);
