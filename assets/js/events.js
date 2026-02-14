const iCalUrl = `https://clients6.google.com/calendar/v3/calendars/c40f9cfe3d861c76ac9855f5cbb8fd444b41fb2c647bd979fa70bf687fed008a%40group.calendar.google.com/events?calendarId=c40f9cfe3d861c76ac9855f5cbb8fd444b41fb2c647bd979fa70bf687fed008a%40group.calendar.google.com&key=AIzaSyDOtGM5jr8bNp1utVpG2_gSRH03RNGBkI8&%24unique=gc456`;
const calendarElement = document.getElementById("calendar");

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
    if ( !event.start.dateTime ) {
      console.warn("Event missing start date:", event);
      return false;
    }
    return new Date(event.start.dateTime) >= now; // isFuture
  }).sort((a, b) => a.start - b.start).slice(0, 10);

  console.log("Upcoming events (next 10):", upcomingEvents);

  // Display the events in the UI
  if ( calendarElement ) {
    if ( upcomingEvents.length === 0 ) {
      calendarElement.innerHTML = "<p>No upcoming events found</p>";
    } else {
      upcomingEvents.forEach(
        (event) => {
          calendarElement.innerHTML +=
            `
            <div class="event">
              <h3>${ event["summary"] || "Untitled Event" }</h3>
              <p>Date: ${ new Date(event.start.dateTime).toLocaleDateString() }</p>
              ${ event.location ? `<p>Location: ${ event.location }</p>` : "" }
              ${ event.description ? `<p>${ event.description }</p>` : "" }
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
