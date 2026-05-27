document.querySelector('#timestamp').value =
new Date().toISOString();

const lastModified = document.querySelector('#lastModified');

lastModified.textContent =
`Last Modification: ${document.lastModified}`;