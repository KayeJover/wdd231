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
});

// ACTIVE NAVIGATION LINK
const currentPage = window.location.pathname.split('/').pop();

document.querySelectorAll('.navigation a').forEach(link => {
    const page = link.href.split('/').pop();

    if (page === currentPage) {
        link.classList.add('active');
    }
});