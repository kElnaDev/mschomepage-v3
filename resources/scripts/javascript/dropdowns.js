function toggleOpen(button) {
    $(button).parent().toggleClass('open');
}
function changeDropdown(dropdownName, button) {
    var category = $(button).text();
    var dropdown = $('#' + dropdownName);
    dropdown.children('.dropdown-button').html(category + '<span class="material-icons-outlined">arrow_drop_down</span>');
    dropdown.children('.button-wrapper').hide();
    $('#' + dropdownName + '-' + phraseToId(category, false)).show();
    dropdown.children('.dropdown-items').children().show();
    $(button).hide();
    dropdown.removeClass('open');
}
//# sourceMappingURL=dropdowns.js.map