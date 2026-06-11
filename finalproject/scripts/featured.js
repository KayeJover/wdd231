// ==========================
// FEATURED DISHES
// ==========================
import { openDishModal } from "./modal.js";
const featuredContainer = document.querySelector("#featured-container");

async function loadFeaturedDishes() {

    try {

        const response = await fetch("data/dishes.json");

        if (!response.ok) {
            throw new Error("Failed to load dishes.");
        }

        const dishes = await response.json();

        displayDishes(dishes);

    } catch (error) {

        console.error(error);

        featuredContainer.innerHTML =
            "<p>Unable to load featured dishes.</p>";
    }
}

// ==========================
// DISPLAY DISHES
// ==========================

function displayDishes(dishes) {

    dishes.forEach(dish => {

        const card = document.createElement("article");

        card.classList.add("dish-card");

        card.innerHTML = `
            <img
                src="${dish.image}"
                alt="${dish.name}"
                loading="lazy"
                width="300"
                height="200"
            >

            <div class="dish-card-content">

                <h3>${dish.name}</h3>

                <p class="price">
                    ₱${dish.price}
                </p>

                <p>
                    ${dish.description}
                </p>

                <button
                    class="btn learn-more"
                    data-id="${dish.id}"
                >
                    Learn More
                </button>

            </div>
        `;

        featuredContainer.appendChild(card);
    });

    initializeModal(dishes);
}

// ==========================
// MODAL
// ==========================

function initializeModal(dishes) {

    const dialog = document.querySelector("#dishModal");

    const modalTitle =
        document.querySelector("#modalTitle");

    const modalImage =
        document.querySelector("#modalImage");

    const modalPrice =
        document.querySelector("#modalPrice");

    const modalDescription =
        document.querySelector("#modalDescription");

    const closeButton =
        document.querySelector("#closeModal");

    document
        .querySelectorAll(".learn-more")
        .forEach(button => {

            button.addEventListener("click", () => {

                const dishId =
                    Number(button.dataset.id);

                const selectedDish =
                    dishes.find(
                        dish => dish.id === dishId
                    );

                openDishModal(
                    dialog,
                    modalTitle,
                    modalImage,
                    modalPrice,
                    modalDescription,
                    selectedDish
                );
            });
        });

    closeButton.addEventListener("click", () => {

        dialog.close();
    });
}

// ==========================
// INITIALIZE
// ==========================

loadFeaturedDishes();