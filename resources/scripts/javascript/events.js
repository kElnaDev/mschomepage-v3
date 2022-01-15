var JSONsource = 'resources/scripts/json/events.json', events, eventDates = [], eventsHTML = [], countdownInterval;
try {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('source') === "examples")
        JSONsource = 'resources/scripts/json/EXAMPLES/events.json';
}
catch (e) {
    console.warn('URLSearchParams interface not supported. Please upgrade your browser.');
}
$.getJSON(JSONsource, function (data) {
    events = data;
    if (events.length !== 0)
        $('main').empty();
    for (var i = 0; i < events.length; i++) {
        var event_1 = events[i];
        var eventTimes = {
            start: new Date(event_1.start),
            end: new Date(event_1.end),
            id: phraseToId(event_1.name)
        };
        var image = void 0;
        if (event_1.imageType)
            image = "resources/images/events/".concat(phraseToId(event_1.name, false), ".").concat(event_1.imageType);
        eventsHTML.push([eventTimes.start.getTime(),
            "<section class=\"panel event\" id=\"".concat(phraseToId(event_1.name, false), "\"") +
                ((image) ? " style=\"background: url('".concat(image, "')\"") : "") +
                "  >" +
                "  <div class=\"event-timing\">" +
                "    <span class=\"event-timing-status\">Starting in</span>" +
                "    <span class=\"event-timing-countdown\">" +
                "      <span class=\"event-countdown-big\">0d 0h</span>" +
                "      <span class=\"event-countdown-small\">0m 0s</span>" +
                "    </span>" +
                "  </div>" +
                "  <div class=\"event-info\">" +
                "    <span class=\"event-info-name\"><span>".concat(event_1.name, "</span></span>") +
                "    <div class=\"event-info-timeframe\">" +
                "      <span class=\"event-from\">" +
                "        <span class=\"event-from-time\">".concat(timeToString(eventTimes.start), "</span>") +
                "        <span class=\"event-from-date\">".concat(dateToString(eventTimes.start), "</span>") +
                "      </span>" +
                "      <span>-</span>" +
                "      <span class=\"event-to\">" +
                "        <span class=\"event-to-time\">".concat(timeToString(eventTimes.end), "</span>") +
                "        <span class=\"event-to-date\">".concat(dateToString(eventTimes.end), "</span>") +
                "      </span>" +
                "    </div>" +
                "  </div>" +
                "</section>"
        ]);
        eventDates.push(eventTimes);
    }
    eventsHTML.sort(function (a, b) { return a[0] - b[0]; });
    for (var i = 0; i < eventsHTML.length; i++)
        $('main').append(eventsHTML[i][1]);
    countdownInterval = setInterval(updateCountdown, 1000);
});
function updateCountdown() {
    for (var i = 0; i < eventDates.length; i++) {
        var event_2 = eventDates[i];
        var date = new Date();
        var status_1 = void 0;
        var countdownBig = void 0;
        var countdownSmall = void 0;
        if (date < event_2.start)
            status_1 = "Starts in";
        else {
            if (date > event_2.end)
                status_1 = "";
            else
                status_1 = "Ends in";
        }
        if (status_1 === "") {
            countdownBig = "Finished";
            countdownSmall = "";
        }
        else {
            var diff = void 0;
            if (status_1 === "Starts in")
                diff = getTimeDiff(event_2.start, date);
            else if (status_1 === "Ends in")
                diff = getTimeDiff(date, event_2.end);
            countdownBig = diff.days + "d " + diff.hours + "h";
            countdownSmall = diff.minutes + "m " + diff.seconds + "s ";
        }
        $(event_2.id + ' .event-timing-status').text(status_1);
        $(event_2.id + ' .event-countdown-big').text(countdownBig);
        $(event_2.id + ' .event-countdown-small').text(countdownSmall);
    }
}
//# sourceMappingURL=events.js.map