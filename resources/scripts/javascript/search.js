let sites, categories;
$.getJSON("resources/scripts/json/sites.json", (res) => {
    sites = res;
});
$.getJSON("resources/scripts/json/categories.json", (res) => {
    categories = res;
});
const searchBar = $('#search-bar');
const searchSuggestions = $('#search-suggestions');
const ssWrapper = $('#search-suggestions-wrapper');
let matchFound;
searchBar.on('input', () => {
    let ogQuery = searchBar.val().toString();
    let query = ogQuery.toLowerCase();
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
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].toLowerCase().includes(query))
            addCategory(categories[i], ogQuery);
    }
    for (let i = 0; i < sites.length; i++) {
        let site = sites[i];
        if (site.name.toLowerCase().includes(query))
            addSite(site, ogQuery);
        else if (site.url.toLowerCase().includes(query))
            addSite(site, ogQuery);
        else if (site.category.toLowerCase().includes(query))
            addSite(site, ogQuery);
        else if (site.subcategory && site.subcategory.toLowerCase().includes(query))
            addSite(site, ogQuery);
    }
    addWebSearch(ogQuery);
});
function highlightQuery(data, query) {
    const regEscape = v => v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    return data.replace(new RegExp(regEscape(query), "gi"), (match) => `<span class='ss-query'>${match}</span>`);
}
function addCategory(category, query) {
    matchFound = true;
    let catName = highlightQuery(category, query);
    searchSuggestions.append(`<li class="ss-category">` +
        `  <a href="#${category.toLowerCase().replace(/\s/g, "\-")}">` +
        `    Category: <span class="ss-category-name">${catName}</span>` +
        `  </a>` +
        `</li>`);
}
function addSite(site, query) {
    matchFound = true;
    let name = site.name;
    let url = site.url;
    let category = site.category;
    let subcategory = site.subcategory;
    name = highlightQuery(name, query);
    url = highlightQuery(url, query);
    category = highlightQuery(category, query);
    if (subcategory)
        subcategory = highlightQuery(subcategory, query);
    if (site.subcategory)
        category = `<span class="ss-site-subcategory">${subcategory}</span> &gt; ${category}`;
    searchSuggestions.append(`<li class="ss-site">` +
        `  <a href="${site.url}">` +
        `    <span class="ss-site-meta-wrapper">` +
        `      <span class="ss-site-name">${name}</span>` +
        `      <span class="ss-site-category">${category}</span>` +
        `    </span>` +
        `    <span class="ss-site-url">${url}</span>` +
        `  </a>` +
        `</li>`);
}
function sanitiseInput(input) {
    input = input.replaceAll("%", "%25");
    input = input.replaceAll("&", "%26");
    input = input.replaceAll("+", "%2B");
    return input;
}
function addWebSearch(query) {
    let searchBox = $('#search-wrapper');
    $('#search-web').remove();
    searchBox.append(`<div id="search-web">` +
        `  <a href="https://www.google.com/search?q=${sanitiseInput(query)}" id="search-web-google">` +
        `    <img src="resources/images/logos/google.svg" alt="">` +
        `    <span>Search Google for "${query.replace(/</g, "&lt;").replace(/>/g, "&gt;")}"</span>` +
        `  </a>` +
        `  <a href="https://duckduckgo.com/?q=${sanitiseInput(query)}" id="search-web-duck">` +
        `    <img src="resources/images/logos/duckduckgo.png" alt="">` +
        `    <span>Search DuckDuckGo for "${query.replace(/</g, "&lt;").replace(/>/g, "&gt;")}"</span>` +
        `  </a>` +
        `</div>`);
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