var keyWasPressed = false;
var timeout = null;
function keyPressed() {
    keyWasPressed = true;
    if (timeout)
        clearTimeout(timeout);
    timeout = setTimeout(function () {
        keyWasPressed = false;
        timeout = null;
    }, 100);
}
window.addEventListener("keydown", function (event) {
    if ($("#search-suggestions-wrapper").css("display") !== "none" && highlightedItem !== null) {
        if (event.defaultPrevented)
            return;
        if (event.key === "ArrowUp" && highlightedItem > 0) {
            selectSearchItem(highlightedItem - 1, true);
            keyPressed();
            event.preventDefault();
        }
        if (event.key === "ArrowDown" && highlightedItem < listIndex - 1) {
            selectSearchItem(highlightedItem + 1, true);
            keyPressed();
            event.preventDefault();
        }
        if (event.key === "Enter")
            clickSearchItem();
    }
}, true);
//# sourceMappingURL=keyboardInput.js.map