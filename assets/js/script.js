'use strict';


/**
 * PRELOAD
 */
const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}
/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

(function () {
  emailjs.init("xs9UYaMsCof-0Vjko");
})();

function sendEmail() {
  let fromName = document.getElementById('fromName').value;
  let email = document.getElementById('email').value;
  let number = document.getElementById('number').value;
  let message = document.getElementById('message').value;

  if (!fromName || !number) {
    alert("Поля 'Ім'я' та 'Телефон' обов'язкові для заповнення");
    return;
  }

  if (email && !validateEmail(email)) {
    alert('Будь ласка, введіть правильну адресу електронної пошти.');
    return;
  }

  if (number && !validatePhoneNumber(number)) {
    alert('Будь ласка, введіть коректний номер телефону.');
    return;
  }

  let params = {
    from_name: fromName,
    client_email: email,
    client_number: number,
    client_message: message,
  }

  emailjs.send("service_h3gxuce", "template_mavmg7j", params).then(
    function () {
      alert("Ваше повідомлення відправлено! Менеджер зв'яжеться з вами якнайшвидше!");

      document.getElementById('fromName').value = '';
      document.getElementById('email').value = '';
      document.getElementById('number').value = '';
      document.getElementById('message').value = '';
    }
  );
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhoneNumber(phone) {
  const phoneRegex = /^\+\d{1,12}$/;
  return phoneRegex.test(phone);
}