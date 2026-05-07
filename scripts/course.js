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



// COURSES ARRAY
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        completed: false
    }
];


// DISPLAY COURSES
function displayCourses(courseList) {
    courseContainer.innerHTML = "";

    courseList.forEach(course => {
        const courseCard = document.createElement("p");

        // show subject + number + title
        courseCard.textContent = `${course.subject} ${course.number}`;
        // mark completed
        if (course.completed) {
            courseCard.classList.add("completed");
        }

        courseContainer.appendChild(courseCard);
    });

    // total credits
   const credits = courseList
  .filter(course => course.completed)
  .reduce((sum, course) => sum + course.credits, 0);

totalCredits.textContent = credits;
}


// FILTER BUTTONS
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


// =====================
// INITIAL LOAD (IMPORTANT)
// =====================
displayCourses(courses);