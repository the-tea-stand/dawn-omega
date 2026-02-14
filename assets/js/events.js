// TODO: check how long this api key lasts
const iCalUrl = `https://clients6.google.com/calendar/v3/calendars/c40f9cfe3d861c76ac9855f5cbb8fd444b41fb2c647bd979fa70bf687fed008a%40group.calendar.google.com/events?calendarId=c40f9cfe3d861c76ac9855f5cbb8fd444b41fb2c647bd979fa70bf687fed008a%40group.calendar.google.com&key=AIzaSyDOtGM5jr8bNp1utVpG2_gSRH03RNGBkI8&%24unique=gc456`;
const calendarElement = document.getElementById("calendar");

function parseDescription(desc) {
  if ( !desc ) return '';
  const regex = /\"https\:\/\/luma.com\/(.*?)\"/g;
  const found = desc.match(regex);
  const rsvpLink = found ? `<div class="rsvp-link"><a href=${ found } target="_blank">RSVP</a></div>` : "";
  return `
    ${ (rsvpLink) }
    <details>
      <summary>details</summary>
      ${ desc }
    </details>
  `;
}

// Fetch calendar events using iCal feed
fetch(iCalUrl).then((response) => {
  if ( !response.ok ) {
    throw new Error(`HTTP error! status: ${ response.status }`);
  }
  return response.json();
}).then((iCalText) => {
  const events = iCalText["items"] ? iCalText["items"] : [];
  calendarElement.innerHTML = "";
  console.log("Total events parsed:", events.length);

  // Filter for future events only and limit to next 10
  const now = new Date();
  const upcomingEvents = events.filter((event) => {
    const startDate = event.start["dateTime"] ? event.start["dateTime"] : event.start["date"];
    if ( !startDate ) {
      console.warn("Event missing start date:", event);
      return false;
    }
    return new Date(startDate) >= now; // isFuture
  }).sort((a, b) => a.start - b.start).slice(0, 10);

  console.log("Upcoming events (next 10):", upcomingEvents);

  // Display the events in the UI
  // TODO add a different RSVP case if RSVP link is not a luma link
  if ( calendarElement ) {
    if ( upcomingEvents.length === 0 ) {
      calendarElement.innerHTML = "<p>No upcoming events found</p>";
    } else {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      upcomingEvents.forEach(
        (event) => {
          const startDate = event.start["dateTime"] ? event.start["dateTime"] : event.start["date"];
          calendarElement.innerHTML +=
            `
            <div class="event">
              <div class="event-summary">
                <h3>${ event["summary"] || "Untitled Event" }</h3>
                <p>${ new Date(startDate).toLocaleDateString(undefined, options) }</p>
                ${ event.location ? `<p>${ event.location }</p>` : "" }
              </div>
              ${ parseDescription(event.description) }
            </div>
          `
        }
      );
    }
  }
}).catch((error) => {
  console.error("Error fetching calendar:", error);
  if ( calendarElement ) {
    calendarElement.innerHTML = `<p>Error loading calendar events: ${ error.message }</p>`;
  }
});
