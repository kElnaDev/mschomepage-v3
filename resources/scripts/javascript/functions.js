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
function categoryToId(category) {
    return "#" + category.toLowerCase().replace(/\s/g, "\-");
}
//# sourceMappingURL=functions.js.map