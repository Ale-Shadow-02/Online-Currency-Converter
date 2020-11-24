let menuLink = document.querySelectorAll('.menu-list__item--link');

menuLink.forEach(elem => {
  elem.addEventListener('click', event => {
    menuLink.forEach(elem => {
      elem.classList.remove('active');
    });
    elem.classList.add('active');
  });
});

let itemSwitcherBox = document.querySelectorAll('.item__switcher--box');
itemSwitcherBox.forEach(function (elem) {
  elem.addEventListener('click', function (event) {
    itemSwitcherBox.forEach(elem => {
      elem.classList.remove('box-active');
    });
    elem.classList.add('box-active');
  });
});

let itemSwitcherBox2 = document.querySelectorAll('.item__switcher--box2');
itemSwitcherBox2.forEach(function (elem) {
  elem.addEventListener('click', function (event) {
    itemSwitcherBox2.forEach(elem => {
      elem.classList.remove('box-active');
    });
    elem.classList.add('box-active');
  });
});