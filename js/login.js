// Open popup
document.getElementById("open-login-form-button").addEventListener("click", function(){
    var popup = document.querySelector(".popup");
    popup.classList.add("popup__active");
})

// Close popup
document.getElementById("close-button").addEventListener("click", function(){
    var popup = document.querySelector(".popup");
    popup.classList.remove("popup__active");
})

const loginUrl = 'http://10.22.202.183:8000/api/v1/auth/login';

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log("click");

  const data = {
    email: email,
    password: password
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  fetch(loginUrl, options)
    .then(response => response.json())
    .then(data => {
      // Обработка успешного ответа от сервера
      console.log(data);
    })
    .catch(error => {
      // Обработка ошибки
      console.error('Ошибка:', error);
    });
}

const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', login);