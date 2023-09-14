var menuBtn = document.querySelector('.menuBtn');
var sideNav = document.querySelector('.sidenav');
var menu = document.querySelector('.menu');

sideNav.style.right = '-250px';

menuBtn.addEventListener('click', function () {
  if (sideNav.style.right == '-250px') {
    sideNav.style.right = '0';
    menu.src = 'img/close.png';
  } else {
    sideNav.style.right = '-250px';
    menu.src = 'img/menu.png';
  }
  console.log('you clicked me');
});

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
