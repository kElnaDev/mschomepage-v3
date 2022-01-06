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
function categoryToId(category, includeHash = true) {
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
            `resources/images/logos/${categoryToId(site.category, false)}/${categoryToId(site.name, false)}.${site.imageType}`;
    }
    return image;
}
//# sourceMappingURL=functions.js.map