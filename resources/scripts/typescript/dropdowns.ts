// $('.dropdown > button').on('focusout', function() {
//   let dropdown = $(this).parent();
//   if (!dropdown.children('.dropdown-items').is(':hover'))
//     dropdown.removeClass('open');
// });

function toggleOpen(button: HTMLButtonElement): void {
  $(button).parent().toggleClass('open');
}

function changeDropdown(dropdownName: string, button: HTMLButtonElement): void {
  let category = $(button).text();
  let dropdown = $('#' + dropdownName);
  dropdown.children('.dropdown-button').html(category + '<span class="material-icons-outlined">arrow_drop_down</span>');
  dropdown.children('.button-wrapper').hide();
  $('#' + dropdownName + '-' + phraseToId(category, false)).show();
  dropdown.children('.dropdown-items').children().show();
  $(button).hide();
  dropdown.removeClass('open');
}