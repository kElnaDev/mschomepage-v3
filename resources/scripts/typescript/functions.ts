function sanitiseInput(input) {
  input = input.replaceAll("%", "%25");
  input = input.replaceAll("&", "%26");
  input = input.replaceAll("+", "%2B");
  return input;
}


function highlightQuery(data: string, query: string): string {
  const regEscape = v => v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'); // taken from Stack Overflow
  return data.replace(new RegExp(regEscape(query), "gi"),
    (match) => `<span class='ss-query'>${match}</span>`);
}


function categoryToId(category: string): string {
  return "#" + category.toLowerCase().replace(/\s/g, "\-");
}