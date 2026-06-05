import { places } from "../data/places.mjs";

// DISPLAY DISCOVER CARDS
const cardsContainer = document.querySelector("#discover-cards");

places.forEach(place => {
  const card = document.createElement("article");
  card.classList.add("discover-card");

  card.innerHTML = `
        <h2>${place.name}</h2>

        <figure>
            <img src="${place.image}" alt="${place.name}" loading="lazy">
        </figure>

        <p>${place.description}</p>

        <address>${place.address}</address>

       <button
  class="learn-more-btn"
  data-name="${place.name}"
  data-details="${place.details}">
  Learn More
</button>
    `;

  cardsContainer.appendChild(card);
});

const modal = document.querySelector("#place-modal");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const closeModal = document.querySelector(".close-modal");

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("learn-more-btn")) {

        modalTitle.textContent = e.target.dataset.name;
        modalDescription.textContent = e.target.dataset.description;
        modalDescription.textContent = e.target.dataset.details;

        modal.style.display = "block";
    }
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

const visitMessage = document.querySelector("#visitor-message");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const timeDifference = now - Number(lastVisit);

  const daysBetweenVisits = Math.floor(
    timeDifference / (1000 * 60 * 60 * 24)
  );

  if (daysBetweenVisits < 1) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else if (daysBetweenVisits === 1) {
    visitMessage.textContent = "You last visited 1 day ago.";
  } else {
    visitMessage.textContent = `You last visited ${daysBetweenVisits} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);



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