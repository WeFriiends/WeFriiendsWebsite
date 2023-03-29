const btn = document.querySelector('#btn'); //выбрана кнопка

btn.addEventListener('click', () => {
  const apiKey = '66ne5repmopp67s413jkjageqzmw3eiggubgj7xa'; // api из личного кабинета нужно взять
  const apiUrl = 'https://api.selzy.com/en/api'; //Взята часть строки из запроса
  const listIds = '2'; // тут я не понял какая то id группа так и не понял, ее типо можно получить из личного кабинета, по заапросу. Тут надо тебе посмотреть

  const name = document.querySelector('#name').value; // отсюда получаем имя из инпута
  const email = document.querySelector('#email').value; // здесь email

  const urlSend = creatingUrl(apiUrl, apiKey, name, email, listIds); // с помощью функии creatingUrl создаем url строку

  postRequest(urlSend); // эта функция открывает ссылку и по идеи должна записываться в базу, но это не точно
});

function postRequest(urlSend) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', urlSend);
  xhr.send('POST', urlSend);
}

function creatingUrl(apiUrl, apiKey, name, email, listIds) {
  return `${apiUrl}/subscribe?format=json&api_key=${apiKey}&list_ids=${listIds}&fields[email]=${email}&fields[Name]=${name}`;
}


