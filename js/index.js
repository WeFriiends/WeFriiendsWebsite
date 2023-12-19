/*const btn = document.querySelector('#btn'); //выбрана кнопка
const fullCheck = document.querySelector('#fullCheck');


btn.addEventListener('click', (e) => {
  e.preventDefault();

  const apiKey = '66ne5repmopp67s413jkjageqzmw3eiggubgj7xa'; // api из личного кабинета нужно взять
  const apiUrl = 'https://api.selzy.com/en/api'; //Взята часть строки из запроса
  const listIds = '2'; // тут я не понял какая то id группа так и не понял, ее типо можно получить из личного кабинета, по заапросу. Тут надо тебе посмотреть

  const name = document.querySelector('#name').value; // отсюда получаем имя из инпута
  const email = document.querySelector('#email').value; // здесь email

 //проверка на заполненность всех полей К.
 if(name === '' || email === ''){
  fullCheck.innerHTML = `<p class="form-alert-title" style="margin-bottom: 120px;">You should fill all fields!</p>`; 
  validationSuccess = false; 
 }else{
    validationSuccess = true;
 }

 if (validationSuccess) {
    const form = document.querySelector('#form');
    const formTitle = document.querySelector('#form-title');
    form.remove();
    formTitle.remove();
    fullCheck.innerHTML = `<p class="form-alert-title">Thank you for your subcribtion!</p>
                        <p class="form-alert-text">We will send you all the information as soon as we launch</p>`;
                      }
  

  const urlSend = creatingUrl(apiUrl, apiKey, name, email, listIds); // с помощью функии creatingUrl создаем url строку

  postRequest(urlSend); // эта функция открывает ссылку и по идеи должна записываться в базу, но это не точно
});

function postRequest(urlSend) {
  const xhr = new XMLHttpRequest();
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*'); 
  xhr.open('POST', urlSend);
  xhr.send('POST', urlSend);
}

function creatingUrl(apiUrl, apiKey, name, email, listIds) {
  return `${apiUrl}/subscribe?format=json&api_key=${apiKey}&list_ids=${listIds}&fields[email]=${email}&fields[Name]=${name}`;
}*/

console.log('debug: JS works');

const fullCheck = document.querySelector('#fullCheck');

const apiBaseUrl = 'https://api.selzy.com/en/api/subscribe'; // API endpoint https://selzy.com/en/support/api/contacts/subscribe/

function makeApiParams(n, e) {
  console.log('debug: call makeApiParams()');
  console.log('debug: n:', n.value);
  console.log('debug: e:', e.value);

  // API
  const apiKey = '66ne5repmopp67s413jkjageqzmw3eiggubgj7xa'; // api из личного кабинета нужно взять
  const listIds = '2'; // это номер списка для емейл рассылки, его можно увидеть из личного кабинета
  const tags = 'LaunchNotice';
  const double_optin = 4;
  const overwrite = 0;
  return `format=json&api_key=${apiKey}&list_ids=${listIds}&fields[email]=${e.value}&fields[Name]=${n.value}&tags=${tags}&double_optin=${double_optin}&overwrite=${overwrite}`;
}

function postRequest(apiBase, apiParams) {
  console.log('debug: call postRequest()');
  console.log('debug: apiBase:', apiBase);
  console.log('debug: apiParams:', apiParams);

  const http = new XMLHttpRequest();
  http.open('POST', apiBase, true);
  
  http.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  http.setRequestHeader('Access-Control-Allow-Headers','*');
  http.setRequestHeader('Access-Control-Allow-Origin', '*');
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  
  

  http.onload = function () {
    // do something to API response
    console.log('debug: Selzy API answer:');
    console.log(http.responseText);
  };
  http.send(apiParams);
}

const btnHandler = function(e) {
  e.preventDefault();
  console.log('debug: btnHandler()');

  let validationSuccess;

  // проверка на заполненность всех полей
  const name = document.querySelector('#name'); // ссылка на input id="name"
  const email = document.querySelector('#email'); // ссылка на input id="email"

  console.log('debug: name:', name.value);
  console.log('debug: email:', email.value);

  // first validator
  if(name.value === '' || email.value === '') {
    fullCheck.innerHTML = `<p class="form-alert-title" style="margin-bottom: 120px;">You should fill all fields!</p>`;
    validationSuccess = false;
  } else {
    validationSuccess = true;
  }

  // more validators if..else here
  // more validators if..else here
  
  if (validationSuccess) {
    console.log('debug: form validation = success!');
    const form = document.querySelector('#form');
    form.remove();
    fullCheck.innerHTML = `<p class="form-alert-title">Thank you for your subscription!</p>
                        <p class="form-alert-text">We will send you all the information as soon as we launch</p>`;
    const params = makeApiParams(name, email); // с помощью функии creatingUrl создаем url строку
    postRequest(apiBaseUrl, params); // эта функция делает запрос к API сервиса selzy
  }
}

const btn = document.querySelector('#btn'); //выбрана кнопка

btn.addEventListener('click', btnHandler);

const share = document.querySelector('#share'); 
const buttons = document.querySelector('#buttons'); 

share.addEventListener('click', (e) => {
  e.preventDefault();
});

share.onmouseover = function() {mouseOver()};
share.onmouseout = function() {mouseOut()};
function mouseOver() {
  buttons.classList.toggle('active');
}
function mouseOut() {
  // buttons.classList.toggle('active');
}


function shareOnViber() {
  var text = "Look at this: ";
  var url = encodeURIComponent(text + " " + window.location.href);
  window.location.href = "viber://forward?text=" + url;
}
