let sites, categories = [], subcategories = [], categoryColours = [
    "blue",
    "purple",
    "pink",
    "red",
    "orange",
    "yellow",
    "green"
], currentCatColour = 0;
$.getJSON("resources/scripts/json/sites.json", (res) => {
    sites = res;
    let catColour;
    for (let i = 0; i < sites.length; i++) {
        let site = sites[i];
        let wrapper = ((site.subcategory) ? categoryToId(site.subcategory) : categoryToId(site.category)) + "-wrapper";
        if (!categories.includes(site.category)) {
            catColour = categoryColours[currentCatColour];
            currentCatColour++;
            if (currentCatColour >= categoryColours.length)
                currentCatColour = 0;
            categories.push(site.category);
            $('main').append(`<section id="${categoryToId(site.category, false)}">` +
                `  <h2><span>${site.category}</span></h2>` +
                `  <div id="${categoryToId(site.category, false)}-wrapper" class="button-wrapper ${catColour}"></div>` +
                `</section>`);
        }
        if (site.subcategory && !subcategories.includes(site.subcategory)) {
            subcategories.push(site.subcategory);
            $(`${categoryToId(site.category)}`).append(`<h3>${site.subcategory}</h3>` +
                `<div id="${categoryToId(site.subcategory, false)}-wrapper" class="button-wrapper ${catColour}"></div>`);
        }
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
    for (let i = 0; i < categories.length; i++) {
        if (checkEmpty(categoryToId(categories[i]) + "-wrapper"))
            $(categoryToId(categories[i]) + "-wrapper").remove();
    }
});
//# sourceMappingURL=load-sites.js.map