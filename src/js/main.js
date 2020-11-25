let menuLink = document.querySelectorAll('.menu-list__item--link');
//* Делаем активной кнопку меню при нажатии

menuLink.forEach(elem => {
  elem.addEventListener('click', event => {
    menuLink.forEach(elem => {
      elem.classList.remove('active');
    });
    elem.classList.add('active');
  });
});
//* Делаем активной кнопку выбора валюты при нажатии на секцию "У меня есть"

let itemSwitcherBox = document.querySelectorAll('.item__switcher--box');
itemSwitcherBox.forEach(function (elem) {
  elem.addEventListener('click', function (event) {
    itemSwitcherBox.forEach(elem => {
      elem.classList.remove('box-active');
    });
    elem.classList.add('box-active');
  });
});
//* Делаем активной кнопку выбора валюты при нажатии на секцию "Хочу приобрести"

let itemSwitcherBox2 = document.querySelectorAll('.item__switcher--box2');
itemSwitcherBox2.forEach(function (elem) {
  elem.addEventListener('click', function (event) {
    itemSwitcherBox2.forEach(elem => {
      elem.classList.remove('box-active');
    });
    elem.classList.add('box-active');
  });
});

//*Converter ====================================================

//*Заполняем option select актуальными названиями валюты ========
const select = document.querySelector('.box-select__select');
const select2 = document.querySelector('.select2');

fetch('https://api.ratesapi.io/api/latest')
  .then(res => res.json())
  .then(data => {
    let objRates = data.rates;
    for (let key in objRates) {
      let option = document.createElement('option');
      option.classList.add('box-select__select--option');
      option.setAttribute('value', key);
      option.innerHTML = key;
      select.appendChild(option);
    }
    for (let key in objRates) {
      let option = document.createElement('option');
      option.classList.add('box-select__select--option');
      option.setAttribute('value', key);
      option.innerHTML = key;
      select2.appendChild(option);
    }
  });

//*Получаем текстовае значения валюты по умолчанию =================

let currencyFrom = 'RUB';
let currencyTo = 'USD';

let switcherBox1 = document.querySelectorAll('.switcher-box-1 ');
switcherBox1.forEach(el => {
  el.addEventListener('click', event => {
    let target = event.target;
    currencyFrom = target.textContent || target.innerText;
    console.log('currencyFrom: ', currencyFrom);
  });
});
let switcherBox2 = document.querySelectorAll('.switcher-box-2 ');
switcherBox2.forEach(el => {
  el.addEventListener('click', event => {
    let target = event.target;
    currencyTo = target.textContent || target.innerText;
    console.log('currencyTo: ', currencyTo);
  });
});