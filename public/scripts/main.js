// Menu
const menuBtnWrapper = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu__btn');
const nav = document.querySelector('.header__nav');

let hideMenu = true;
menuBtnWrapper.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(hideMenu) {
    nav.classList.add('open');
    menuBtnWrapper.classList.add('open');
    menuBtn.classList.add('open');
    hideMenu = false;
  } else {
    nav.classList.remove('open');
    menuBtnWrapper.classList.remove('open');
    menuBtn.classList.remove('open');
    hideMenu = true;
  }
}


// Form validation
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let message = document.querySelector('#message');
const submit = document.querySelector('#submit');
let formMsg = document.querySelector('.contact__error-msg');

submit.addEventListener('click', e => {
  e.preventDefault();

  let errorMessage = '';  
  if(name.value == '' || email.value == '' || message.value == '') {
    errorMessage = 'Please fill out all the fields';
  } else if(!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email.value)) {
    errorMessage = 'Please enter correct email format';
  } else {
    errorMessage = 'Message sent. Thank you';

    name.value = '';
    email.value = '';
    message.value = '';
  }

  formMsg.innerHTML = errorMessage;
  formMsg.classList.add('show');
  setTimeout(() => {
    formMsg.classList.remove('show')
  }, 3000);

});


// Add href attribute to phone number for mobile
const phone = document.querySelector('.phone');  // icon on the top
const contactPhone = document.querySelector('.contact-phone');  // icon on the bottom
const isMobile = /iPhone|iPad|iPod|webOS|Windows Phone|Android/i.test(navigator.userAgent);

if (isMobile) {
  phone.setAttribute('href', 'tel:+353857751039');
  contactPhone.setAttribute('href', 'tel:+353857751039');
} else {
  phone.removeAttribute('href');
  contactPhone.setAttribute('href', '#address');
}
