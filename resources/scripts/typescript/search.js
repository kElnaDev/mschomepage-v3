// Type Declarations
// Get JSON
var sites, categories;
$.getJSON("resources/scripts/json/sites.json", function (res) { sites = res; });
$.getJSON("resources/scripts/json/categories.json", function (res) { categories = res; });
// Detect search
var searchBar = $('#search-bar');
searchBar.on('input', function () {
    var query = searchBar.val();
    for (var i = 0; i < sites.length; i++) {
        var site = sites[i];
        // @ts-ignore
        if (site.name.includes(query)) {
        }
        // @ts-ignore
        else if (site.url.includes(query)) {
        }
    }
});
