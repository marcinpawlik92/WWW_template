var navBar = $("#nav-1");
var hdrHeight = $("header").height();


$(window).scroll(function() {
  if( $(this).scrollTop() > hdrHeight +365) {
    navBar.addClass("nav-2");
  } else {
    navBar.removeClass("nav-2");
  }
});