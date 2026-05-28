document.querySelector('#timestamp').value =
new Date().toISOString();

const lastModified =
document.querySelector('#lastModified');

lastModified.textContent =
`Last Modification: ${document.lastModified}`;

const menuButton =
document.querySelector('#menu');

const navigation =
document.querySelector('.navigation');

menuButton.addEventListener('click', () => {

    navigation.classList.toggle('open');

    menuButton.classList.toggle('open');

});