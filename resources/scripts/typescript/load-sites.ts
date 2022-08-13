// Get JSON
let items: Array<website | dropdown>,
  sites: website[] = [],
  categories: string[] = [],
  subcategories: string[] = [],
  menus: string[] = [],
  categoryColours = [
    "blue",
    "purple",
    "pink",
    "red",
    "orange",
    "yellow",
    "green"
  ],
  currentCatColour = 0,
  catColour: string,
  loaded = false;


$.getJSON("resources/scripts/json/sites.json", (res): void => {
  items = res

  // Generate buttons
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let wrapper = ((item.subcategory)? phraseToId(item.subcategory) : phraseToId(item.category)) + "-wrapper";


    // Generate category sections
    if (!includes(categories, item.category)) {
      // category colour
      catColour = categoryColours[currentCatColour];
      currentCatColour++;
      if (currentCatColour >= categoryColours.length)
        currentCatColour = 0;

      // category html
      categories.push(item.category);
      $('main').append(
        `<section id="${phraseToId(item.category, false)}">` + 
        `  <h2><span>${item.category}</span></h2>` + 
        `</section>`
      );
    }


    // Generate subcategory
    if (item.subcategory && !includes(subcategories, item.subcategory)) {
      subcategories.push(item.subcategory);
      $(phraseToId(item.category)).append('<h3 id="' + phraseToId(item.subcategory, false) + '">' + item.subcategory + '</h3>');
    }


    // Load item
    if (item.hasOwnProperty('dropdown')) {
      loadDropdown(item as dropdown);
    } else {
      loadSite(wrapper, item as website);
    }
  }

  for (let i = 0; i < categories.length; i++) {
    if (checkEmpty(phraseToId(categories[i]) + "-wrapper"))
      $(phraseToId(categories[i]) + "-wrapper").remove();
  }

  loaded = true;
});

function loadSite(wrapper: string, site: website) {
  // Handle dropdown
  sites.push(site);


  // Generate button wrappers
  if (!$(phraseToId(site.category) + '-wrapper').length) {
    $(phraseToId(site.category)).append(
      `<div id="${phraseToId(site.category, false)}-wrapper" class="button-wrapper ${catColour}"></div>`
    );
  }
  if (site.subcategory && !$(phraseToId(site.subcategory) + "-wrapper").length) {
    $(phraseToId(site.category)).append(
      `<div id="${phraseToId(site.subcategory, false)}-wrapper" class="button-wrapper ${catColour}"></div>`
    );
  }


  // image stuff
  let image = getImage(site);


  $(wrapper).append(
    `<a href="${site.url}" class="button" target="_blank">` +
      ((image)? `<img src="${image}" alt="">` : '') +
      site.name +
    `</a>`
  );
}


function loadDropdown(dropdown: dropdown) {
  let wrapper = phraseToId(dropdown.name);
  let name = phraseToId(dropdown.name, false);
  let category = dropdown.category;
  let subcategory = dropdown.subcategory;
  let localMenus: string[] = [];
  let currentMenu: string;


  // Generate dropdown
  $(phraseToId(category)).append(`<div id="${name}" class="dropdown"></div>`);


  // Generate dropdown buttons
  for (let i = 0; i < dropdown.sites.length; i++) {
    let site = dropdown.sites[i];

    // generate dropdown menus
    if (!includes(menus, site.menu)) {
      menus.push(site.menu);
      localMenus.push(site.menu);
      currentMenu = name + "-" + phraseToId(site.menu, false);
      $(wrapper).append(`<div id="${currentMenu}" class="button-wrapper ${catColour}" style="display:none"></div>`);
    }

    // load site
    let fullSite = {
      name: site.name,
      url: site.url,
      category: category,
    }
    if (subcategory) fullSite['subcategory'] = subcategory;
    if (site.image) fullSite['image'] = site.image;
    if (site.imageType) fullSite['imageType'] = site.imageType;
    loadSite('#' + currentMenu, fullSite);
  }


  // Generate dropdown options list
  $(wrapper).prepend('<div class="dropdown-items"></div>');
  for (let i = 0; i < localMenus.length; i++) {
    if (i === 0) {
      $('#' + name + "-" + phraseToId(localMenus[i], false)).show();
    }

    $(wrapper + ' .dropdown-items').append(
      `<button onclick="changeDropdown(\'${name}\', this)"${(i === 0)? ' style="display:none"': ''}>` +
        localMenus[i] + 
      `</button>`
    );
  }


  // Generate dropdown options button
  $(wrapper).prepend(
    '<button class="dropdown-button" onclick="toggleOpen(this)">' + 
      localMenus[0] +
      '<span class="material-icons-outlined">arrow_drop_down</span>' + 
    '</button>'
  );
}