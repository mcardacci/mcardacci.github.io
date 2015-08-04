(function() {
  var documentElem = $(document),
    nav = $('nav'),
    lastScrollTop = 0;

  documentElem.on('scroll', function() {
    var currentScrollTop = $(this).scrollTop();

    if ( currentScrollTop > lastScrollTop ) nav.addClass('hidden');

    else nav.removeClass('hidden');

      lastScrollTop = currentScrollTop;
  });

})();