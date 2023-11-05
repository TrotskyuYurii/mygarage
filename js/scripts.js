// Отримання посилань на HTML-елементи форми та встановлення обробника подій
const form = document.querySelector('.login-menu-form');
const emailInput = document.querySelector('#login-email');
const passwordInput = document.querySelector('#login-password');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Зупинити стандартну подію відправки форми

  // Отримання значень введених користувачем
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  // Проведення перевірки на відповідність логіну та паролю
  if (isValidLogin(emailValue, passwordValue)) {
    // Якщо дані вірні, виконуємо необхідні дії, наприклад, вхід в систему
    alert('Ви успішно увійшли в систему!');
  } else {
    // Якщо дані невірні, виводимо повідомлення про помилку
    alert('Невірний логін або пароль. Будь ласка, спробуйте знову.');
  }
});

// Функція для перевірки логіну та паролю
function isValidLogin(email, password) {
  // Тут ви можете додати вашу логіку перевірки логіну і паролю
  // Наприклад, порівнювати з валідними даними на сервері або в локальному сховищі

  // Повертаємо true, якщо дані вірні, або false, якщо невірні
  return email === 'ваш_логін' && password === 'ваш_пароль';
}
