const iCalUrl = `https://clients6.google.com/calendar/v3/calendars/c40f9cfe3d861c76ac9855f5cbb8fd444b41fb2c647bd979fa70bf687fed008a%40group.calendar.google.com/events?calendarId=c40f9cfe3d861c76ac9855f5cbb8fd444b41fb2c647bd979fa70bf687fed008a%40group.calendar.google.com&singleEvents=true&eventTypes=default&eventTypes=focusTime&eventTypes=outOfOffice&maxAttendees=1&maxResults=250&sanitizeHtml=true&timeZone=America%2FNew_York&key=`;
const apiKey = "AIzaSyDOtGM5jr8bNp1utVpG2_gSRH03RNGBkI8&%24unique=gc456";
const calendarElement = document.getElementById("calendar");
let upcomingEvents = [];
const recurringEventsEmojisRegex = /🥬|⛩️|🏠|🫖/g;
const lumaRegex = /\"https\:\/\/luma.com\/(.*?)\"/g;
const linkRegex = /href="(.*?)"/g;
const priceRegex = /(\$(.*?) )/g;

// parseDescription follows these assumptions:
// every new line is followed by an emoji
function parseDescription(desc) {
  if ( !desc ) return '';
  let tooltip = "";
  let content = "";
  let link = "";

  desc.split("<br><br>").forEach((line) => {
    if ( line.match(recurringEventsEmojisRegex) ) tooltip = line;
    else if ( line.includes("🔗") ) {
      console.log(line);
      const lumaFound = line.match(lumaRegex);
      const linkFound = line.match(linkRegex);
      const priceFound = line.match(priceRegex);
      if ( lumaFound ) {
        link = `<div class="rsvp-link"><a href=${ lumaFound[0] } target="_blank">RSVP ${ priceFound ? '$' + priceFound : '' }</a></div>`;
      } else if ( linkFound ) {
        link = `<div class="rsvp-link"><a ${ linkFound[0] } target="_blank">Join</a></div>`;
      }
    } else if ( line.length > 1 ) content += line;
  })
  return { tooltip, link, content }
}

// Display the events in the UI
function displayEvents() {
  upcomingEvents.sort((a, b) => new Date(a["start"]["dateTime"]) - new Date(b["start"]["dateTime"]));
  calendarElement.innerHTML = "";
  if ( calendarElement ) {
    if ( upcomingEvents.length === 0 ) {
      calendarElement.innerHTML = "<p>No upcoming events found</p>";
    } else {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "America/New_York"
      };
      upcomingEvents.forEach(
        (event) => {
          const startDate = event["start"]["dateTime"] ? event["start"]["dateTime"] : event["start"]["date"];
          const description = parseDescription(event.description);
          calendarElement.innerHTML +=
            `
            <div class="event">
              <div class="event-summary">
                <h3>${ event["summary"] || "Untitled Event" }<span aria-label="info" class="tooltip">ℹ<span class="tooltiptext">${ description["tooltip"] }</span></span></h3>
                <p>${ new Date(startDate).toLocaleDateString("en-US", options) }</p>
                ${ event.location ? `<p>${ event.location }</p>` : "" }
              </div>
              ${ description["link"] }
              <details>
                <summary>more info</summary>
                <div>
                  ${ description["content"] }<br><br>
                  <small>📆Calendar link <a href="${ event["htmlLink"] }" target="_blank">here</a></small>.
                </div>
              </details>
            </div>
          `
        }
      );
    }
  }
}

function getEvents(pageToken) {
  let token = "";
  let today = new Date();
  let future = new Date();
  future.setMonth(future.getMonth() + 2);
  future.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  // set to New York timezone, and swedish date formatting to fit google ISO parameter reqs, otherwise timerange parameter does not work (?);
  // Source - https://stackoverflow.com/a/66372460
  const timeMin = encodeURIComponent(today.toLocaleString("sv", { timeZone: "America/New_York" }).split(" ")[0] + "T00:00:00+18:00"); // today, i.e. '2026-02-20T05:44:56.973Z'
  const timeMax = encodeURIComponent(future.toLocaleString("sv", { timeZone: "America/New_York" }).split(" ")[0] + "T00:00:00-18:00"); // return events up to 2 months from now
  if ( pageToken ) token = `&pageToken=${ pageToken }`; // pagination
  const timeRange = `&timeMin=${ timeMin }&timeMax=${ timeMax }`;
  fetch(`${ iCalUrl }${ apiKey }${ timeRange }${ token }`).then((response) => {
    if ( !response.ok ) {
      throw new Error(`HTTP error! status: ${ response.status }`);
    }
    return response.json();
  }).then((iCalText) => {
    let events = [];
    if ( iCalText["items"] ) events = iCalText["items"];
    upcomingEvents = [...upcomingEvents, ...events];
    displayEvents(upcomingEvents.slice(0, 10));
    if ( upcomingEvents.length <= 10 && iCalText["nextPageToken"] ) getEvents(iCalText["nextPageToken"]);
  }).catch((error) => {
    console.error("Error fetching calendar:", error);
    if ( calendarElement ) {
      calendarElement.innerHTML = `<p>Error loading calendar events: ${ error.message }</p>`;
    }
  });
}

getEvents();
