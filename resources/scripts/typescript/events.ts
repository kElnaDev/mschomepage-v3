let events: Array<event>,
  eventDates: Array<eventDate> = [],
  eventsHTML: Array<[number, string]> = [],
  countdownInterval: number;

$.getJSON('resources/scripts/json/events.json', (data):void => {
  events = data;

  if (events.length !== 0)
    $('main').empty()

  for (let i = 0; i < events.length; i++) {
    let event = events[i];
    let eventTimes = {
      start: new Date(event.start),
      end: new Date(event.end),
      id: phraseToId(event.name)
    }

    let image;
    if (event.imageType)
      image = `resources/images/events/${phraseToId(event.name, false)}.${event.imageType}`

    eventsHTML.push([eventTimes.start.getTime(),
      `<section class="panel event" id="${phraseToId(event.name, false)}"` +
               ((image)? ` style="background: url('${image}')"` : "") +
      `  >` +
      `  <div class="event-timing">` +
      `    <span class="event-timing-status">Starting in</span>` +
      `    <span class="event-timing-countdown">` +
      `      <span class="event-countdown-big">0d 0h</span>` +
      `      <span class="event-countdown-small">0m 0s</span>` +
      `    </span>` +
      `  </div>` +
      `  <div class="event-info">` +
      `    <span class="event-info-name"><span>${event.name}</span></span>` +
      `    <div class="event-info-timeframe">` +
      `      <span class="event-from">` +
      `        <span class="event-from-time">${timeToString(eventTimes.start)}</span>` +
      `        <span class="event-from-date">${dateToString(eventTimes.start)}</span>` +
      `      </span>` +
      `      <span>-</span>` +
      `      <span class="event-to">` +
      `        <span class="event-to-time">${timeToString(eventTimes.end)}</span>` +
      `        <span class="event-to-date">${dateToString(eventTimes.end)}</span>` +
      `      </span>`+
      `    </div>`+
      `  </div>` +
      `</section>`
    ]);

    eventDates.push(eventTimes);
  }

  // Remove this line if you don't want the events to be auto sorted
  eventsHTML.sort((a, b) => { return a[0] - b[0] });

  for (let i = 0; i < eventsHTML.length; i++)
    $('main').append(eventsHTML[i][1])

  countdownInterval = setInterval(updateCountdown, 1000);
});


function updateCountdown() {
  for (let i = 0; i < eventDates.length; i++) {
    let event = eventDates[i];
    let date = new Date();
    let status: string;
    let countdownBig: string;
    let countdownSmall: string;

    if (date < event.start)
      status = "Starts in"
    else {
      if (date > event.end)
        status = ""
      else
        status = "Ends in"
    }

    if (status === "") {
      countdownBig = "Finished";
      countdownSmall = "";
    } else {
      let diff;
      if (status === "Starts in")
        diff = getTimeDiff(event.start, date);
      else if (status === "Ends in")
        diff = getTimeDiff(date, event.end);

      countdownBig = diff.days + "d " + diff.hours + "h";
      countdownSmall = diff.minutes + "m " + diff.seconds + "s ";
    }

    $(event.id + ' .event-timing-status').text(status);
    $(event.id + ' .event-countdown-big').text(countdownBig);
    $(event.id + ' .event-countdown-small').text(countdownSmall);
  }
}