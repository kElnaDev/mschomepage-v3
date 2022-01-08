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
        let wrapper = ((site.subcategory) ? phraseToId(site.subcategory) : phraseToId(site.category)) + "-wrapper";
        if (!categories.includes(site.category)) {
            catColour = categoryColours[currentCatColour];
            currentCatColour++;
            if (currentCatColour >= categoryColours.length)
                currentCatColour = 0;
            categories.push(site.category);
            $('main').append(`<section id="${phraseToId(site.category, false)}">` +
                `  <h2><span>${site.category}</span></h2>` +
                `  <div id="${phraseToId(site.category, false)}-wrapper" class="button-wrapper ${catColour}"></div>` +
                `</section>`);
        }
        if (site.subcategory && !subcategories.includes(site.subcategory)) {
            subcategories.push(site.subcategory);
            $(`${phraseToId(site.category)}`).append(`<h3>${site.subcategory}</h3>` +
                `<div id="${phraseToId(site.subcategory, false)}-wrapper" class="button-wrapper ${catColour}"></div>`);
        }
        let image = getImage(site);
        $(wrapper).append(`<a href="${site.url}" class="button">` +
            ((image) ? `<img src="${image}" alt="">` : '') +
            site.name +
            `</a>`);
    }
    for (let i = 0; i < categories.length; i++) {
        if (checkEmpty(phraseToId(categories[i]) + "-wrapper"))
            $(phraseToId(categories[i]) + "-wrapper").remove();
    }
});
//# sourceMappingURL=load-sites.js.map