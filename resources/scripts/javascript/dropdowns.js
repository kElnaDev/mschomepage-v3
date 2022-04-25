document.onclick = function () {
    $('.open').removeClass('open');
};
function toggleOpen(button) {
    var dropdown = $(button).parent();
    if (dropdown.hasClass('open'))
        dropdown.removeClass('open');
    else
        dropdown.addClass('open');
}
//# sourceMappingURL=dropdowns.js.map