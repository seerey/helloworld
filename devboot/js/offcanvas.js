$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
});

window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);
