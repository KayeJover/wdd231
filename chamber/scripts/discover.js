import { places } from "../data/places.mjs";

const cardContainer = document.querySelector("#discover-cards");

places.forEach((place, index) => {

  const card = document.createElement("article");

  card.classList.add("discover-card");
  card.style.gridArea = `card${index + 1}`;

  card.innerHTML = `
    <h2>${place.name}</h2>

    <figure>
      <img
        src="${place.image}"
        alt="${place.name}"
        loading="lazy"
        width="300"
        height="200">
    </figure>

    <address>${place.address}</address>

    <p>${place.description}</p>

    <button>Learn More</button>
  `;

  cardContainer.appendChild(card);
});


const message = document.querySelector("#visitor-message");

const lastVisit = localStorage.getItem("lastVisit");

const currentVisit = Date.now();

if (!lastVisit) {

  message.textContent =
    "Welcome! Let us know if you have any questions.";

} else {

  const milliseconds = currentVisit - Number(lastVisit);

  const days = Math.floor(milliseconds / 86400000);

  if (days < 1) {

    message.textContent =
      "Back so soon! Awesome!";

  } else if (days === 1) {

    message.textContent =
      "You last visited 1 day ago.";

  } else {

    message.textContent =
      `You last visited ${days} days ago.`;

  }

}

localStorage.setItem("lastVisit", currentVisit);



const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

// ACTIVE NAVIGATION LINK
const currentPage = window.location.pathname.split('/').pop();

document.querySelectorAll('.navigation a').forEach(link => {
    const linkPage = new URL(link.href).pathname.split('/').pop();

    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});

const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}