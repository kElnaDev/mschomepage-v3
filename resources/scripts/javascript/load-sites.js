var sites, categories = [], subcategories = [], categoryColours = [
    "blue",
    "purple",
    "pink",
    "red",
    "orange",
    "yellow",
    "green"
], currentCatColour = 0;
$.getJSON("resources/scripts/json/sites.json", function (res) {
    sites = res;
    var catColour;
    for (var i = 0; i < sites.length; i++) {
        var site = sites[i];
        var wrapper = ((site.subcategory) ? phraseToId(site.subcategory) : phraseToId(site.category)) + "-wrapper";
        if (!includes(categories, site.category)) {
            catColour = categoryColours[currentCatColour];
            currentCatColour++;
            if (currentCatColour >= categoryColours.length)
                currentCatColour = 0;
            categories.push(site.category);
            $('main').append("<section id=\"".concat(phraseToId(site.category, false), "\">") +
                "  <h2><span>".concat(site.category, "</span></h2>") +
                "  <div id=\"".concat(phraseToId(site.category, false), "-wrapper\" class=\"button-wrapper ").concat(catColour, "\"></div>") +
                "</section>");
        }
        if (site.subcategory && !includes(subcategories, site.subcategory)) {
            subcategories.push(site.subcategory);
            $("".concat(phraseToId(site.category))).append("<h3 id=\"".concat(phraseToId(site.subcategory, false), "\">").concat(site.subcategory, "</h3>") +
                "<div id=\"".concat(phraseToId(site.subcategory, false), "-wrapper\" class=\"button-wrapper ").concat(catColour, "\"></div>"));
        }
        var image = getImage(site);
        $(wrapper).append("<a href=\"".concat(site.url, "\" class=\"button\">") +
            ((image) ? "<img src=\"".concat(image, "\" alt=\"\">") : '') +
            site.name +
            "</a>");
    }
    for (var i = 0; i < categories.length; i++) {
        if (checkEmpty(phraseToId(categories[i]) + "-wrapper"))
            $(phraseToId(categories[i]) + "-wrapper").remove();
    }
});
//# sourceMappingURL=load-sites.js.map