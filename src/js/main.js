let menuLink = document.querySelectorAll('.menu-list__item--link');

menuLink.forEach(elem => {
  elem.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    console.log('target: ', target);
    // target.classList.add('active');
    if (!elem.classList.contains('active')) {
      elem.classList.add('active');
    } else {
      elem.classList.remove('active');
    }
  });
});