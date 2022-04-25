document.onclick = () => {
  $('.open').removeClass('open');
}


function toggleOpen(button: HTMLButtonElement): void {
  let dropdown = $(button).parent();
  if (dropdown.hasClass('open')) 
    dropdown.removeClass('open');
  else
    dropdown.addClass('open');
}