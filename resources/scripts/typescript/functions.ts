function sanitiseInput(input: string): string {
  input = input.replace(/%/g, "%25");
  input = input.replace(/&/g, "%26");
  input = input.replace(/\+/g, "%2B");
  return input;
}


function highlightQuery(data: string, query: string): string {
  const regEscape = (v: string) => v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'); // taken from Stack Overflow
  return data.replace(new RegExp(regEscape(query), "gi"),
    (match) => `<span class='ss-query'>${match.replace(/\s/g, "<span class='space'></span>")}</span>`);
}


function phraseToId(category: string, includeHash = true): string {
  return ((includeHash)? "#" : "") +
    category.toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s/g, "\-");
}

// Thank you Jordan Maduro and Beachhouse
// https://stackoverflow.com/questions/45408920/plain-javascript-scrollintoview-inside-div
function scrollParentToChild(parent: HTMLElement, child: HTMLElement) {
  // Where is the parent on page
  var parentRect = parent.getBoundingClientRect();
  // What can you see?
  var parentViewableArea = {
    height: parent.clientHeight,
    width: parent.clientWidth
  };
  // Where is the child
  var childRect = child.getBoundingClientRect();
  // Is the child viewable?
  var isViewable = (childRect.top >= parentRect.top) && (childRect.bottom <= parentRect.top + parentViewableArea.height);
  // if you can't see the child try to scroll parent
  if (!isViewable) {
    // Should we scroll using top or bottom? Find the smaller ABS adjustment
    const scrollTop = childRect.top - parentRect.top;
    const scrollBot = childRect.bottom - parentRect.bottom;
    if (Math.abs(scrollTop) < Math.abs(scrollBot)) {
      // we're near the top of the list
      parent.scrollTop += scrollTop;
    } else {
      // we're near the bottom of the list
      parent.scrollTop += scrollBot;
    }
  }
}


// taken from Stack Overflow
function makeId(length = 32): string {
  let result           = '';
  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return result;
}


function checkEmpty(element: string): boolean {
  return ($(element).html().trim() === '');
}


function getImage(site: website): string {
  // image stuff
  let image: string;
  if (site.image) {
    image = `resources/images/logos/${site.image}`;
  } else if (site.imageType) {
    image =
      `resources/images/logos/${phraseToId(site.name, false)}.${site.imageType}`;
  }

  return image;
}


function timeToString(date: Date): string {
  let hours24 = date.getHours(),
    minutes = date.getMinutes(),
    dayHalf = (hours24 >= 12)? "pm" : "am",
    hours12 = (hours24 > 12)? hours24 - 12 : hours24;

    return ((hours24 === 0)? 12: hours12) + ":" + ((minutes < 10)? "0" : "") + minutes + " " + dayHalf;
}


function dateToString(date: Date): string {
  // Number to date
  const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Actual stuff
  let day = weekday[date.getDay()],
    dateNum = date.getDate(),
    month = monthName[date.getMonth()];

  return day + " " + dateNum + " " + month;
}


function getTimeDiff(from: Date, to: Date): time {
  // this section was taken from https://bearnithi.com/ because it was 7 am
  // (couldn't sleep, so I decided to code) and I was too lazy to think
  let diff = Math.abs(from.getTime() - to.getTime()) / 1000;

  const days = Math.floor(diff / 86400);
  diff -= days * 86400;

  const hours = Math.floor(diff / 3600) % 24;
  diff -= hours * 3600;

  const minutes = Math.floor(diff / 60) % 60;
  diff -= minutes * 60;

  const seconds = Math.floor(diff);

  return {days, hours, minutes, seconds}
}


function includes(data: string | Array<string>, match: string): boolean {
  return data.indexOf(match) !== -1;
}