// Get JSON
let sites: Array<website>,
  categories: Array<string> = [],
  subcategories: Array<string> = [],
  categoryColours = [
    "blue",
    "purple",
    "pink",
    "red",
    "orange",
    "yellow",
    "green"
  ],
  currentCatColour = 0;


$.getJSON("resources/scripts/json/sites.json", (res): void => {
  sites = res

  // Generate buttons
  let catColour;
  for (let i = 0; i < sites.length; i++) {
    let site = sites[i];
    let wrapper = ((site.subcategory)? phraseToId(site.subcategory) : phraseToId(site.category)) + "-wrapper";


    // Generate category sections
    if (!includes(categories, site.category)) {
      // category colour
      catColour = categoryColours[currentCatColour];
      currentCatColour++;
      if (currentCatColour >= categoryColours.length)
        currentCatColour = 0;

      // category html
      categories.push(site.category);
      $('main').append(
        `<section id="${phraseToId(site.category, false)}">` +
        `  <h2><span>${site.category}</span></h2>` +
        `  <div id="${phraseToId(site.category, false)}-wrapper" class="button-wrapper ${catColour}"></div>` +
        `</section>`
      );
    }


    // Generate subcategory sections
    if (site.subcategory && !includes(subcategories, site.subcategory)) {
      subcategories.push(site.subcategory);
      $(`${phraseToId(site.category)}`).append(
        `<h3 id="${phraseToId(site.subcategory, false)}">${site.subcategory}</h3>` +
        `<div id="${phraseToId(site.subcategory, false)}-wrapper" class="button-wrapper ${catColour}"></div>`
      );
    }


    // image stuff
    let image = getImage(site);


    $(wrapper).append(
      `<a href="${site.url}" class="button">` +
        ((image)? `<img src="${image}" alt="">` : '') +
        site.name +
      `</a>`
    );
  }

  for (let i = 0; i < categories.length; i++) {
    if (checkEmpty(phraseToId(categories[i]) + "-wrapper"))
      $(phraseToId(categories[i]) + "-wrapper").remove();
  }
});