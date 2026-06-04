const params =
new URLSearchParams(window.location.search);

document.querySelector('#firstName').textContent =
params.get('firstName');

document.querySelector('#lastName').textContent =
params.get('lastName');

document.querySelector('#email').textContent =
params.get('email');

document.querySelector('#phone').textContent =
params.get('phone');

document.querySelector('#business').textContent =
params.get('business');

document.querySelector('#membership').textContent =
params.get('membership');

document.querySelector('#timestamp').textContent =
params.get('timestamp');


/* MOBILE MENU */

const menuButton =
document.querySelector('#menu');

const navigation =
document.querySelector('.navigation');

menuButton.addEventListener('click', () => {

    navigation.classList.toggle('open');

    menuButton.classList.toggle('open');

});