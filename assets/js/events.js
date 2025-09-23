// Google Calendar Public iCal Feed URL
// Using a proxy endpoint to avoid CORS issues
const calendarId =
  "c40f9cfe3d861c76ac9855f5cbb8fd444b41fb2c647bd979fa70bf687fed008a%40group.calendar.google.com";

// Use a CORS proxy service or your own server endpoint
const proxyUrl = "https://api.allorigins.win/raw?url=";
const iCalUrl = `${proxyUrl}${encodeURIComponent(
  `https://calendar.google.com/calendar/ical/${calendarId}/public/basic.ics`
)}`;

const calendarElement = document.getElementById("calendar");

// Function to parse iCal data
function parseICalData(iCalText) {
  const events = [];
  const lines = iCalText.split("\n");
  let currentEvent = {};
  let inEvent = false;
  let currentField = null;
  let currentValue = "";

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Handle continuation lines (lines that start with space or tab)
    if (line.startsWith(" ") || line.startsWith("\t")) {
      if (currentField && inEvent) {
        // Add the continuation line to the current field value
        // Remove the leading space/tab but don't add extra spaces
        currentValue += line.substring(1);
      }
      continue;
    }

    // Trim the line for processing
    line = line.trim();

    // Extract field name and value
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const fullField = line.substring(0, colonIndex);
    const value = line.substring(colonIndex + 1);

    // Extract field name without parameters (e.g., DTSTART;TZID=America/New_York -> DTSTART)
    const fieldName = fullField.split(";")[0];

    if (fieldName === "BEGIN" && value === "VEVENT") {
      currentEvent = {};
      inEvent = true;
      currentField = null;
      currentValue = "";
    } else if (fieldName === "END" && value === "VEVENT" && inEvent) {
      // Save any pending field value
      if (currentField && currentValue !== undefined) {
        currentEvent[currentField] = currentValue;
      }

      if (currentEvent.summary && currentEvent.start) {
        events.push(currentEvent);
      }
      inEvent = false;
      currentField = null;
      currentValue = "";
    } else if (inEvent) {
      // Save previous field if we have one
      if (currentField && currentValue !== undefined) {
        currentEvent[currentField] = currentValue;
      }

      // Start new field
      currentField = null;
      currentValue = value;

      if (fieldName === "SUMMARY") {
        currentField = "summary";
      } else if (fieldName === "DTSTART") {
        currentField = "start";
      } else if (fieldName === "DTEND") {
        currentField = "end";
      } else if (fieldName === "DESCRIPTION") {
        currentField = "description";
      } else if (fieldName === "LOCATION") {
        currentField = "location";
      }
    }
  }

  // Handle the last field if we're still in an event
  if (inEvent && currentField && currentValue !== undefined) {
    currentEvent[currentField] = currentValue;
    if (currentEvent.summary && currentEvent.start) {
      events.push(currentEvent);
    }
  }

  return events;
}

// Function to format date
function formatDate(dateString) {
  if (!dateString) {
    console.warn("Empty date string provided");
    return new Date();
  }

  // Handle different date formats from iCal
  if (dateString.length === 8) {
    // Format: YYYYMMDD (date only)
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    const date = new Date(year, month - 1, day);
    return date;
  } else if (dateString.includes("T")) {
    // Format: YYYYMMDDTHHMMSSZ or YYYYMMDDTHHMMSS
    const datePart = dateString.substring(0, 8);
    const timePart = dateString.substring(9, 15);
    const year = datePart.substring(0, 4);
    const month = datePart.substring(4, 6);
    const day = datePart.substring(6, 8);
    const hour = timePart.substring(0, 2);
    const minute = timePart.substring(2, 4);
    const second = timePart.substring(4, 6);
    const date = new Date(year, month - 1, day, hour, minute, second);
    return date;
  } else if (dateString.length === 15) {
    // Format: YYYYMMDDTHHMMSS (without Z)
    const datePart = dateString.substring(0, 8);
    const timePart = dateString.substring(9, 15);
    const year = datePart.substring(0, 4);
    const month = datePart.substring(4, 6);
    const day = datePart.substring(6, 8);
    const hour = timePart.substring(0, 2);
    const minute = timePart.substring(2, 4);
    const second = timePart.substring(4, 6);
    const date = new Date(year, month - 1, day, hour, minute, second);
    return date;
  }

  // Fallback: try to parse as standard date
  const date = new Date(dateString);
  return date;
}

// Fetch calendar events using iCal feed
fetch(iCalUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })
  .then((iCalText) => {
    const events = parseICalData(iCalText);
    console.log("Total events parsed:", events.length);

    // Filter for future events only and limit to next 10
    const now = new Date();
    const upcomingEvents = events
      .filter((event) => {
        if (!event.start) {
          console.warn("Event missing start date:", event);
          return false;
        }

        const eventDate = formatDate(event.start);
        const isFuture = eventDate >= now;
        return isFuture;
      })
      .sort((a, b) => formatDate(a.start) - formatDate(b.start))
      .slice(0, 10);

    console.log("Upcoming events (next 10):", upcomingEvents);

    // Display the events in the UI
    if (calendarElement) {
      if (upcomingEvents.length === 0) {
        calendarElement.innerHTML = "<p>No upcoming events found</p>";
      } else {
        calendarElement.innerHTML = upcomingEvents
          .map(
            (event) => `
            <div class="event">
              <h3>${event.summary || "Untitled Event"}</h3>
              <p>Date: ${formatDate(event.start).toLocaleDateString()}</p>
              ${event.location ? `<p>Location: ${event.location}</p>` : ""}
              ${event.description ? `<p>${event.description}</p>` : ""}
            </div>
          `
          )
          .join("");
      }
    }
  })
  .catch((error) => {
    console.error("Error fetching calendar:", error);
    if (calendarElement) {
      calendarElement.innerHTML = `<p>Error loading calendar events: ${error.message}</p>`;
    }
  });
