// ==========================
// RESERVATION FORM
// ==========================

const reservationForm = document.querySelector(".reservation-form");

if (reservationForm) {

    const fields = [
        "fullname",
        "email",
        "phone",
        "reservationDate",
        "reservationTime",
        "guests",
        "occasion",
        "requests"
    ];

    // ==========================
    // LOAD SAVED DATA
    // ==========================

    fields.forEach(field => {

        const element = document.getElementById(field);

        const savedValue =
            localStorage.getItem(field);

        if (element && savedValue) {
            element.value = savedValue;
        }
    });

    // ==========================
    // SAVE ON INPUT
    // ==========================

    fields.forEach(field => {

        const element = document.getElementById(field);

        if (element) {

            element.addEventListener("input", () => {

                localStorage.setItem(
                    field,
                    element.value
                );
            });
        }
    });
    const timestampField = document.getElementById("timestamp");

if (timestampField) {
    timestampField.value = new Date().toLocaleString();
}

    // ==========================
    // CLEAR AFTER SUBMIT
    // ==========================

    reservationForm.addEventListener("submit", () => {

        fields.forEach(field => {

            localStorage.removeItem(field);
        });
    });
}