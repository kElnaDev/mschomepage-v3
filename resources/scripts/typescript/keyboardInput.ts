let keyWasPressed = false
let timeout: number | null = null

function keyPressed() {
  keyWasPressed = true
  if (timeout) clearTimeout(timeout)
  timeout = setTimeout(() => {
    keyWasPressed = false
    timeout = null
  }, 100)
}

window.addEventListener("keydown", function (event) {
  if ($("#search-suggestions-wrapper").css("display") !== "none" && highlightedItem !== null) {
    if (event.defaultPrevented)
      return; // Do nothing if the event was already processed

    if (event.key === "ArrowUp" && highlightedItem > 0) {
      selectSearchItem(highlightedItem - 1, true)
      keyPressed()
      event.preventDefault()
    }

    if (event.key === "ArrowDown" && highlightedItem < listIndex - 1) {
      selectSearchItem(highlightedItem + 1, true)
      keyPressed()
      event.preventDefault()
    }

    if (event.key === "Enter")
      clickSearchItem()
  }
}, true);