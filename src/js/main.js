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

//*Получаем значения валюты по умолчанию =================

let rate1 = document.querySelector('.rate-1');
let rate2 = document.querySelector('.rate-2');
let input1 = document.querySelector('input.input1');
let input2 = document.querySelector('input.input2');
let currencyFrom = 'RUB';
let currencyTo = 'USD';

//fetch(`https://api.ratesapi.io/api/latest?base=${currencyFrom}&symbols=${currencyTo}`)
fetch(`https://api.ratesapi.io/api/latest?base=${currencyTo}&symbols=${currencyFrom}`)
  .then(res => res.json())
  .then(data => {
    rate1.innerHTML = `1 ${currencyFrom} = ${(1 / data.rates.RUB).toFixed(4)} ${currencyTo}`;
    input2.value = `${(input1.value / data.rates.RUB).toFixed(4)}`;
    rate2.innerHTML = `1 ${currencyTo} = ${data.rates.RUB.toFixed(4)} ${currencyFrom}`;
    input1.addEventListener('input', function () {
      let resultInput1 = this.value;
      rate1.innerHTML = `1 ${currencyFrom} = ${(1 / data.rates.RUB).toFixed(4)} ${currencyTo}`;
      input2.value = `${(resultInput1 / data.rates.RUB).toFixed(4)}`;
      rate2.innerHTML = `1 ${currencyTo} = ${data.rates.RUB.toFixed(4)} ${currencyFrom}`;
    });
  });

//*Получаем текстовае значения валюты по умолчанию =================

let switcherBox1 = document.querySelectorAll('.switcher-box-1 ');
switcherBox1.forEach(el => {
  el.addEventListener('click', event => {
    let target = event.target;
    currencyFrom = target.textContent || target.innerText;
    fetch(`https://api.ratesapi.io/api/latest?base=${currencyTo}&symbols=${currencyFrom}`)
      .then(res => res.json())
      .then(data => {
        const {
          base
        } = data;
        let currencyName = data.rates;
        console.log('ratess: ', currencyName);
        let currencyValue;
        for (let key in currencyName) {
          currencyValue = currencyName[key];
        }
        let resultInput1 = this.value;
        rate1.innerHTML = `1 ${currencyFrom} = ${(1 / currencyValue).toFixed(4)} ${currencyTo}`;
        input2.value = `${(resultInput1 / currencyValue).toFixed(4)}`;
        rate2.innerHTML = `1 ${currencyTo} = ${currencyValue.toFixed(4)} ${currencyFrom}`;
        input1.addEventListener('input', function () {
          let resultInput1 = this.value;
          rate1.innerHTML = `1 ${currencyFrom} = ${(1 / currencyValue).toFixed(4)} ${currencyTo}`;
          input2.value = `${(resultInput1 / currencyValue).toFixed(4)}`;
          rate2.innerHTML = `1 ${currencyTo} = ${currencyValue.toFixed(4)} ${currencyFrom}`;
        });

      });
  });
});

let switcherBox2 = document.querySelectorAll('.switcher-box-2 ');
switcherBox2.forEach(el => {
  el.addEventListener('click', event => {
    let target = event.target;
    currencyTo = target.textContent || target.innerText;
    fetch(`https://api.ratesapi.io/api/latest?base=${currencyTo}&symbols=${currencyFrom}`)
      .then(res => res.json())
      .then(data => {
        console.log('data: ', data);

      });
  });
});