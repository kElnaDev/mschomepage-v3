window.onscroll = function () {
    var squishPoint = 50;
    if (document.body.scrollTop > squishPoint || document.documentElement.scrollTop > squishPoint) {
        $('header').addClass('collapsed');
    }
    else {
        $('header').removeClass('collapsed');
    }
};
//# sourceMappingURL=header.js.map