var items, sites = [], categories = [], subcategories = [], menus = [], categoryColours = [
    "blue",
    "purple",
    "pink",
    "red",
    "orange",
    "yellow",
    "green"
], currentCatColour = 0, catColour, loaded = false;
$.getJSON("resources/scripts/json/sites.json", function (res) {
    items = res;
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var wrapper = ((item.subcategory) ? phraseToId(item.subcategory) : phraseToId(item.category)) + "-wrapper";
        if (!includes(categories, item.category)) {
            catColour = categoryColours[currentCatColour];
            currentCatColour++;
            if (currentCatColour >= categoryColours.length)
                currentCatColour = 0;
            categories.push(item.category);
            $('main').append("<section id=\"".concat(phraseToId(item.category, false), "\">") +
                "  <h2><span>".concat(item.category, "</span></h2>") +
                "</section>");
        }
        if (item.subcategory && !includes(subcategories, item.subcategory)) {
            subcategories.push(item.subcategory);
            $(phraseToId(item.category)).append('<h3 id="' + phraseToId(item.subcategory, false) + '">' + item.subcategory + '</h3>');
        }
        if (item.hasOwnProperty('dropdown')) {
            loadDropdown(item);
        }
        else {
            loadSite(wrapper, item);
        }
    }
    for (var i = 0; i < categories.length; i++) {
        if (checkEmpty(phraseToId(categories[i]) + "-wrapper"))
            $(phraseToId(categories[i]) + "-wrapper").remove();
    }
    loaded = true;
});
function loadSite(wrapper, site) {
    sites.push(site);
    if (!$(phraseToId(site.category) + '-wrapper').length) {
        $(phraseToId(site.category)).append("<div id=\"".concat(phraseToId(site.category, false), "-wrapper\" class=\"button-wrapper ").concat(catColour, "\"></div>"));
    }
    if (site.subcategory && !$(phraseToId(site.subcategory) + "-wrapper").length) {
        $(phraseToId(site.category)).append("<div id=\"".concat(phraseToId(site.subcategory, false), "-wrapper\" class=\"button-wrapper ").concat(catColour, "\"></div>"));
    }
    var image = getImage(site);
    $(wrapper).append("<a href=\"".concat(site.url, "\" class=\"button\" target=\"_blank\">") +
        ((image) ? "<img src=\"".concat(image, "\" alt=\"\">") : '') +
        site.name +
        "</a>");
}
function loadDropdown(dropdown) {
    var wrapper = phraseToId(dropdown.name);
    var name = phraseToId(dropdown.name, false);
    var category = dropdown.category;
    var subcategory = dropdown.subcategory;
    var localMenus = [];
    var currentMenu;
    $(phraseToId(category)).append("<div id=\"".concat(name, "\" class=\"dropdown\"></div>"));
    for (var i = 0; i < dropdown.sites.length; i++) {
        var site = dropdown.sites[i];
        if (!includes(menus, site.menu)) {
            menus.push(site.menu);
            localMenus.push(site.menu);
            currentMenu = name + "-" + phraseToId(site.menu, false);
            $(wrapper).append("<div id=\"".concat(currentMenu, "\" class=\"button-wrapper ").concat(catColour, "\" style=\"display:none\"></div>"));
        }
        var fullSite = {
            name: site.name,
            url: site.url,
            category: category,
        };
        if (subcategory)
            fullSite['subcategory'] = subcategory;
        if (site.image)
            fullSite['image'] = site.image;
        if (site.imageType)
            fullSite['imageType'] = site.imageType;
        loadSite('#' + currentMenu, fullSite);
    }
    $(wrapper).prepend('<div class="dropdown-items"></div>');
    for (var i = 0; i < localMenus.length; i++) {
        if (i === 0) {
            $('#' + name + "-" + phraseToId(localMenus[i], false)).show();
        }
        $(wrapper + ' .dropdown-items').append("<button onclick=\"changeDropdown('".concat(name, "', this)\"").concat((i === 0) ? ' style="display:none"' : '', ">") +
            localMenus[i] +
            "</button>");
    }
    $(wrapper).prepend('<button class="dropdown-button" onclick="toggleOpen(this)">' +
        localMenus[0] +
        '<span class="material-icons-outlined">arrow_drop_down</span>' +
        '</button>');
}
//# sourceMappingURL=load-sites.js.map