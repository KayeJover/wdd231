export function openDishModal(
    dialog,
    modalTitle,
    modalImage,
    modalPrice,
    modalDescription,
    dish
) {
    modalTitle.textContent = dish.name;

    modalImage.src = dish.image;
    modalImage.alt = dish.name;

    modalPrice.textContent = `₱${dish.price}`;

    modalDescription.textContent = dish.details;

    dialog.showModal();
}