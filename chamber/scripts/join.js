document.querySelector('#timestamp').value =
new Date().toISOString();

const lastModified =
document.querySelector('#lastModified');

if (lastModified) {
    lastModified.textContent =
    `Last Modification: ${document.lastModified}`;
}

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");

    console.log(navigation.className);
});

// ACTIVE NAVIGATION LINK
const currentPage = window.location.pathname.split('/').pop();

document.querySelectorAll('.navigation a').forEach(link => {
    const linkPage = new URL(link.href).pathname.split('/').pop();

    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});