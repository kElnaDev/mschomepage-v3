function sanitiseInput(input) {
    input = input.replaceAll("%", "%25");
    input = input.replaceAll("&", "%26");
    input = input.replaceAll("+", "%2B");
    return input;
}
function highlightQuery(data, query) {
    const regEscape = v => v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    return data.replace(new RegExp(regEscape(query), "gi"), (match) => `<span class='ss-query'>${match}</span>`);
}
function phraseToId(category, includeHash = true) {
    return ((includeHash) ? "#" : "") +
        category.toLowerCase()
            .replace(/[^a-zA-Z0-9\s]/g, "")
            .replace(/\s/g, "\-");
}
function checkEmpty(element) {
    return ($(element).html().trim() === '');
}
function getImage(site) {
    let image;
    if (site.image) {
        image = `resources/images/logos/general/${site.image}`;
    }
    else if (site.imageType) {
        image =
            `resources/images/logos/${phraseToId(site.category, false)}/${phraseToId(site.name, false)}.${site.imageType}`;
    }
    return image;
}
function timeToString(date) {
    let hours24 = date.getHours(), minutes = date.getMinutes(), dayHalf = (hours24 >= 12) ? "pm" : "am", hours12 = (hours24 > 12) ? hours24 - 12 : hours24;
    return ((hours24 === 0) ? 12 : hours12) + ":" + ((minutes < 10) ? "0" : "") + minutes + " " + dayHalf;
}
function dateToString(date) {
    const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = weekday[date.getDay()], dateNum = date.getDate(), month = monthName[date.getMonth()];
    return day + " " + dateNum + " " + month;
}
function getTimeDiff(from, to) {
    let diff = Math.abs(from.getTime() - to.getTime()) / 1000;
    const days = Math.floor(diff / 86400);
    diff -= days * 86400;
    const hours = Math.floor(diff / 3600) % 24;
    diff -= hours * 3600;
    const minutes = Math.floor(diff / 60) % 60;
    diff -= minutes * 60;
    const seconds = Math.floor(diff);
    return { days, hours, minutes, seconds };
}
//# sourceMappingURL=functions.js.map