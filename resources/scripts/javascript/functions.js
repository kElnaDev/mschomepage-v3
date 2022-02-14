function sanitiseInput(input) {
    input = input.replace(/%/g, "%25");
    input = input.replace(/&/g, "%26");
    input = input.replace(/\+/g, "%2B");
    return input;
}
function highlightQuery(data, query) {
    var regEscape = function (v) { return v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'); };
    return data.replace(new RegExp(regEscape(query), "gi"), function (match) { return "<span class='ss-query'>".concat(match, "</span>"); });
}
function phraseToId(category, includeHash) {
    if (includeHash === void 0) { includeHash = true; }
    return ((includeHash) ? "#" : "") +
        category.toLowerCase()
            .replace(/[^a-zA-Z0-9\s]/g, "")
            .replace(/\s/g, "\-");
}
function makeId(length) {
    if (length === void 0) { length = 32; }
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function checkEmpty(element) {
    return ($(element).html().trim() === '');
}
function getImage(site) {
    var image;
    if (site.image) {
        image = "resources/images/logos/general/".concat(site.image);
    }
    else if (site.imageType) {
        image =
            "resources/images/logos/".concat(phraseToId(site.category, false), "/").concat(phraseToId(site.name, false), ".").concat(site.imageType);
    }
    return image;
}
function timeToString(date) {
    var hours24 = date.getHours(), minutes = date.getMinutes(), dayHalf = (hours24 >= 12) ? "pm" : "am", hours12 = (hours24 > 12) ? hours24 - 12 : hours24;
    return ((hours24 === 0) ? 12 : hours12) + ":" + ((minutes < 10) ? "0" : "") + minutes + " " + dayHalf;
}
function dateToString(date) {
    var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var day = weekday[date.getDay()], dateNum = date.getDate(), month = monthName[date.getMonth()];
    return day + " " + dateNum + " " + month;
}
function getTimeDiff(from, to) {
    var diff = Math.abs(from.getTime() - to.getTime()) / 1000;
    var days = Math.floor(diff / 86400);
    diff -= days * 86400;
    var hours = Math.floor(diff / 3600) % 24;
    diff -= hours * 3600;
    var minutes = Math.floor(diff / 60) % 60;
    diff -= minutes * 60;
    var seconds = Math.floor(diff);
    return { days: days, hours: hours, minutes: minutes, seconds: seconds };
}
function includes(data, match) {
    return data.indexOf(match) !== -1;
}
//# sourceMappingURL=functions.js.map