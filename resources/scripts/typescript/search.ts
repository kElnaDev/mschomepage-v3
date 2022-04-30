// Detect search
const searchBar = $('#search-bar');
const searchSuggestions = $('#search-suggestions');
const ssWrapper = $('#search-suggestions-wrapper');
let matchFound: boolean;
let firstResult: boolean;
let selected: string;
let listIndex = 0
let highlightedItem = 0

// searchBar.trigger('focus');

searchBar.on('input', () => {
  let ogQuery = searchBar.val().toString();
  let query = ogQuery.toLowerCase();

  matchFound = false;


  // clear previous
  searchSuggestions.empty();
  if (query.length < 1) {
    $('#search-web').remove();
    ssWrapper.addClass("empty");
    return;
  } else {
    ssWrapper.removeClass("empty");
  }

  listIndex = 0 // Used as a counter for how many sites and categories there are
  highlightedItem = 0

  firstResult = true;
  for (let i = 0; i < categories.length; i++) // used for-loop instead of forEach() for speed
    if (includes(categories[i].toLowerCase(), query)) addCategory(makeId(), categories[i], ogQuery);

  for (let i = 0; i < subcategories.length; i++) // used for-loop instead of forEach() for speed
    if (includes(subcategories[i].toLowerCase(), query)) addCategory(makeId(), subcategories[i], ogQuery, true);


  for (let i = 0; i < sites.length; i++) {
    let site = sites[i];

    // split into multiple branches for readability
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

  if (listIndex) { // If there are search results
    selectSearchItem(0)
  } else {
    highlightedItem = null
  }
});


// Manage html
function addCategory(id: string, category: string, query: string, subcategory = false): void {
  matchFound = true;

  let catName = highlightQuery(category, query);

  // add to html
  searchSuggestions.append(
    `<li class="ss-category" id=${id} onmouseover="selectSearchItem(${listIndex})">` +
    `  <a href="${phraseToId(category)}">` +
    `    ${(subcategory)? "Subc" : "C"}ategory: <span class="ss-category-name">${catName}</span>` +
    `  </a>` +
    `</li>`
  );

  listIndex++
}

// handle when a search item is hovered over
function selectSearchItem(index: number, keyboard: boolean = false) {
    if (!keyboard && keyWasPressed) return // Prevent onhover being affected when scrolling when navigating with the arrow keys
    highlightedItem = index
    $("#search-suggestions > li").removeAttr("style")
    const suggestion = $("#search-suggestions > li:nth-child(" + (index + 1) + ")")
    suggestion.css("background", "#d3d3d3")
    if (keyboard) {
        keyPressed()
        scrollParentToChild($("#search-suggestions")[0], suggestion[0])
    }
}

function clickSearchItem() {
    const suggestion = $("#search-suggestions > li:nth-child(" + (highlightedItem + 1) + ") > a")
    suggestion[0].click()
}

function addSite(site: website, query: string): void {
  matchFound = true;

  let name = site.name;
  let url = site.url;
  let category = site.category;
  let subcategory = site.subcategory;


  // handle query highlighting
  name = highlightQuery(name, query);
  url = highlightQuery(url, query);
  category = highlightQuery(category, query);
  if (subcategory)
    subcategory = highlightQuery(subcategory, query);


  // handle subcategories
  if (site.subcategory)
    category = `<span class="ss-site-subcategory">${subcategory}</span> &gt; ${category}`;


  // image stuff
  let image = getImage(site);


  // add to html
  searchSuggestions.append(
    `<li class="ss-site" onmouseover="selectSearchItem(${listIndex})">` +
    `  <a href="${site.url}">` +
    `    <img src="${image}">` +
    `    <span class="ss-site-info-wrapper">` +
    `      <span class="ss-site-meta-wrapper">` +
    `        <span class="ss-site-name">${name}</span>` +
    `        <span class="ss-site-category">${category}</span>` +
    `      </span>` +
    `      <span class="ss-site-url">${url}</span>` +
    `    </span>` +
    `  </a>` +
    `</li>`
  );

  listIndex++
}


function addWebSearch(query) {
  let searchBox = $('#search-wrapper')

  $('#search-web').remove();

  searchBox.append(
    `<div id="search-web">` +
    `  <a href="https://www.google.com/search?q=${sanitiseInput(query)}" id="search-web-google">` +
    `    <img src="resources/images/logos/google.svg" alt="">` +
    `    <span>Search Google for "${query.replace(/</g, "&lt;").replace(/>/g, "&gt;")}"</span>` +
    `  </a>` +
    `  <a href="https://duckduckgo.com/?q=${sanitiseInput(query)}" id="search-web-duck">` +
    `    <img src="resources/images/logos/duckduckgo.png" alt="">` +
    `    <span>Search DuckDuckGo for "${query.replace(/</g, "&lt;").replace(/>/g, "&gt;")}"</span>` +
    `  </a>` +
    `</div>`
  )

  if (matchFound) {
    $('#search-web').addClass('matchFound');
    ssWrapper.removeClass("empty");
  } else {
    $('#search-web').removeClass('matchFound');
    ssWrapper.addClass("empty");
    // addAutoComplete(query);
  }
}


// function addAutoComplete(query) {
//     query = sanitiseInput(query);
//     $.get({
//         url: `https://ac.duckduckgo.com/ac/?q=${query}`,
//         crossDomain: true,
//         success: (data: Array<autoComplete>) => {
//             let searchWeb = $('#search-web');
//             if (searchWeb.length !== 1) return;
//
//             for (let i = 0; i < data.length; i++) {
//                 searchWeb.append(
//                     `<a class="search-web-ac">` +
//                     data[i].phrase.replace(/</g, "&lt;").replace(/>/g, "&gt;") +
//                     `</a>`
//                 )
//             }
//         }
//     })
// }