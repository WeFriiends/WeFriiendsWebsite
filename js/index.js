const btn = document.querySelector('#btn'); //выбрана кнопка
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
}