var btn = document.querySelector('#menu-trigger');
var menu = document.querySelector('.header__navigation');
var mobile = window.matchMedia("screen and (min-width: 1024px)")

btn.addEventListener('click', function(ev) {
  ev.preventDefault();
  menu.classList.toggle('open');
});

mobile.addListener( function(mobile) {
  if (mobile.matches) {
    menu.classList.remove('open');
  }
});

mobile.addListener( function(mobile) {
    if (!mobile.matches) {
      menu.classList.add('open');
    }
  });