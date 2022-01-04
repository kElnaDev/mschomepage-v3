// Get JSON
let sites: Array<website>, categories: Array<string>;
$.getJSON("resources/scripts/json/sites.json", (res): void => {
  sites = res

  // Generate buttons
  for (let i = 0; i < sites.length; i++) {
    let site = sites[i];

    let wrapper = ((site.subcategory)? categoryToId(site.subcategory) : categoryToId(site.category)) + "-wrapper";

    $(wrapper).append(
      `<a href="${site.url}" class="button">` +
        ((site.image)? `<img src="${site.image}" alt="">` : ``) +
        site.name +
      `</a>`
    );
  }
});
$.getJSON("resources/scripts/json/categories.json", (res): void => {
  categories = res
});