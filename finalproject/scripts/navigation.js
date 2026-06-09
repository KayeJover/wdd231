// ==========================
// MOBILE NAVIGATION
// ==========================

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        const isOpen = navigation.classList.contains("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuButton.textContent = isOpen ? "✕" : "☰";
    });
}

// ==========================
// ACTIVE NAVIGATION LINK
// ==========================

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".navigation a").forEach(link => {

    const href =
        link.getAttribute("href");

    if (href === currentPage) {

        link.classList.add("active");
    }
});

// ==========================
// CLOSE MENU WHEN LINK CLICKED
// ==========================

document.querySelectorAll(".navigation a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth < 641) {

            navigation.classList.remove("open");

            menuButton.textContent = "☰";

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });
});

// ==========================
// RESET NAVIGATION ON RESIZE
// ==========================

window.addEventListener("resize", () => {

    if (window.innerWidth >= 641) {

        navigation.classList.remove("open");

        menuButton.textContent = "☰";

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }
});