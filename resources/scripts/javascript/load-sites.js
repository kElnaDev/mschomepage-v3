let sites, categories;
$.getJSON("resources/scripts/json/sites.json", (res) => {
    sites = res;
    for (let i = 0; i < sites.length; i++) {
        let site = sites[i];
        let wrapper = ((site.subcategory) ? categoryToId(site.subcategory) : categoryToId(site.category)) + "-wrapper";
        let hasImage = false;
        let image;
        if (site.image) {
            hasImage = true;
            image = `resources/images/logos/general/${site.image}`;
        }
        else if (site.imageType) {
            hasImage = true;
            image =
                `resources/images/logos/${categoryToId(site.category, false)}/${categoryToId(site.name, false)}.${site.imageType}`;
        }
        $(wrapper).append(`<a href="${site.url}" class="button">` +
            ((hasImage) ? `<img src="${image}" alt="">` : '') +
            site.name +
            `</a>`);
    }
});
$.getJSON("resources/scripts/json/categories.json", (res) => {
    categories = res;
});
//# sourceMappingURL=load-sites.js.map