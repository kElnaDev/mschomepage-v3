window.onscroll = (): void => {
  const squishPoint = 50;
  if (document.body.scrollTop > squishPoint || document.documentElement.scrollTop > squishPoint) {
    $('header').addClass('collapsed');
  } else {
    $('header').removeClass('collapsed');
  }
}