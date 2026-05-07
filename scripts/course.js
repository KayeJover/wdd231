const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const courseContainer = document.querySelector("#course-container");
const totalCredits = document.querySelector("#totalCredits");

// footer year
currentYear.textContent = new Date().getFullYear();

// last modified date
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// hamburger menu
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});




// Function to display courses
function displayCourses(courseList) {
    courseContainer.innerHTML = "";

    courseList.forEach(course => {
        const courseCard = document.createElement("p");
        courseCard.textContent = `${course.subject} ${course.number}`;

        if (course.completed) {
            courseCard.classList.add("completed");
        }

        courseContainer.appendChild(courseCard);
    });

    const credits = courseList.reduce((sum, course) => sum + course.credits, 0);
    totalCredits.textContent = credits;
}



// Filter buttons
document.querySelector("#all").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#cse").addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject === "CSE");
    displayCourses(cseCourses);
});

document.querySelector("#wdd").addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.subject === "WDD");
    displayCourses(wddCourses);
});
