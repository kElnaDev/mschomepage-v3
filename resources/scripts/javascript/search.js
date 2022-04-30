var searchBar = $('#search-bar');
var searchSuggestions = $('#search-suggestions');
var ssWrapper = $('#search-suggestions-wrapper');
var matchFound;
var firstResult;
var selected;
var listIndex = 0;
var highlightedItem = 0;
searchBar.on('input', function () {
    var ogQuery = searchBar.val().toString();
    var query = ogQuery.toLowerCase();
    matchFound = false;
    searchSuggestions.empty();
    if (query.length < 1) {
        $('#search-web').remove();
        ssWrapper.addClass("empty");
        return;
    }
    else {
        ssWrapper.removeClass("empty");
    }
    listIndex = 0;
    highlightedItem = 0;
    firstResult = true;
    for (var i = 0; i < categories.length; i++)
        if (includes(categories[i].toLowerCase(), query))
            addCategory(makeId(), categories[i], ogQuery);
    for (var i = 0; i < subcategories.length; i++)
        if (includes(subcategories[i].toLowerCase(), query))
            addCategory(makeId(), subcategories[i], ogQuery, true);
    for (var i = 0; i < sites.length; i++) {
        var site = sites[i];
        if (includes(site.name.toLowerCase(), query))
            addSite(site, ogQuery);
        else if (includes(site.url.toLowerCase(), query))
            addSite(site, ogQuery);
        else if (includes(site.category.toLowerCase(), query))
            addSite(site, ogQuery);
        else if (site.subcategory && includes(site.subcategory.toLowerCase(), query))
            addSite(site, ogQuery);
    }
    addWebSearch(ogQuery);
    if (listIndex) {
        selectSearchItem(0);
    }
    else {
        highlightedItem = null;
    }
});
function addCategory(id, category, query, subcategory) {
    if (subcategory === void 0) { subcategory = false; }
    matchFound = true;
    var catName = highlightQuery(category, query);
    searchSuggestions.append("<li class=\"ss-category\" id=".concat(id, " onmouseover=\"selectSearchItem(").concat(listIndex, ")\">") +
        "  <a href=\"".concat(phraseToId(category), "\">") +
        "    ".concat((subcategory) ? "Subc" : "C", "ategory: <span class=\"ss-category-name\">").concat(catName, "</span>") +
        "  </a>" +
        "</li>");
    listIndex++;
}
function selectSearchItem(index, keyboard) {
    if (keyboard === void 0) { keyboard = false; }
    if (!keyboard && keyWasPressed)
        return;
    highlightedItem = index;
    $("#search-suggestions > li").removeAttr("style");
    var suggestion = $("#search-suggestions > li:nth-child(" + (index + 1) + ")");
    suggestion.css("background", "rgba(106, 120, 129, 0.15)");
    if (keyboard) {
        keyPressed();
        scrollParentToChild($("#search-suggestions")[0], suggestion[0]);
    }
}
function clickSearchItem() {
    var suggestion = $("#search-suggestions > li:nth-child(" + (highlightedItem + 1) + ") > a");
    suggestion[0].click();
}
function addSite(site, query) {
    matchFound = true;
    var name = site.name;
    var url = site.url;
    var category = site.category;
    var subcategory = site.subcategory;
    name = highlightQuery(name, query);
    url = highlightQuery(url, query);
    category = highlightQuery(category, query);
    if (subcategory)
        subcategory = highlightQuery(subcategory, query);
    if (site.subcategory)
        category = "<span class=\"ss-site-subcategory\">".concat(subcategory, "</span> &gt; ").concat(category);
    var image = getImage(site);
    searchSuggestions.append("<li class=\"ss-site\" onmouseover=\"selectSearchItem(".concat(listIndex, ")\">") +
        "  <a href=\"".concat(site.url, "\">") +
        "    <img src=\"".concat(image, "\">") +
        "    <span class=\"ss-site-info-wrapper\">" +
        "      <span class=\"ss-site-meta-wrapper\">" +
        "        <span class=\"ss-site-name\">".concat(name, "</span>") +
        "        <span class=\"ss-site-category\">".concat(category, "</span>") +
        "      </span>" +
        "      <span class=\"ss-site-url\">".concat(url, "</span>") +
        "    </span>" +
        "  </a>" +
        "</li>");
    listIndex++;
}
function addWebSearch(query) {
    var searchBox = $('#search-wrapper');
    $('#search-web').remove();
    searchBox.append("<div id=\"search-web\">" +
        "  <a href=\"https://www.google.com/search?q=".concat(sanitiseInput(query), "\" id=\"search-web-google\">") +
        "    <img src=\"resources/images/logos/google.svg\" alt=\"\">" +
        "    <span>Search Google for \"".concat(query.replace(/</g, "&lt;").replace(/>/g, "&gt;"), "\"</span>") +
        "  </a>" +
        "  <a href=\"https://duckduckgo.com/?q=".concat(sanitiseInput(query), "\" id=\"search-web-duck\">") +
        "    <img src=\"resources/images/logos/duckduckgo.png\" alt=\"\">" +
        "    <span>Search DuckDuckGo for \"".concat(query.replace(/</g, "&lt;").replace(/>/g, "&gt;"), "\"</span>") +
        "  </a>" +
        "</div>");
    if (matchFound) {
        $('#search-web').addClass('matchFound');
        ssWrapper.removeClass("empty");
    }
    else {
        $('#search-web').removeClass('matchFound');
        ssWrapper.addClass("empty");
    }
}
//# sourceMappingURL=search.js.map