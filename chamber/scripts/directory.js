const membersContainer = document.querySelector('#members');
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const url = 'data/members.json';

async function getMembers() {

    const response = await fetch(url);

    const data = await response.json();

    displayMembers(data);

}

getMembers();

const displayMembers = (members) => {

    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let info = document.createElement('p');
        let logo = document.createElement('img');

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        info.textContent = member.info;
        website.textContent = 'Visit Website';
        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');
        logo.setAttribute('src', `images/${member.image}`);
        logo.setAttribute('alt', `${member.name} Logo`);
        logo.setAttribute('width', '120');
        logo.setAttribute('height', '80');
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('decoding', 'async');

        card.appendChild(logo);

        card.appendChild(name);

        card.appendChild(address);

        card.appendChild(phone);

        card.appendChild(website);

        card.appendChild(info);

        membersContainer.appendChild(card);

    });

};

gridButton.addEventListener('click', () => {

    membersContainer.classList.add('grid');
    membersContainer.classList.remove('list');

});

listButton.addEventListener('click', () => {

    membersContainer.classList.add('list');
    membersContainer.classList.remove('grid');

});

/* WEATHER API */

const weatherURL =
'https://api.openweathermap.org/data/2.5/weather?lat=10.6765&lon=122.9509&units=metric&appid=c7a51fde2845c136c5a8bd87a14a5f68';

async function getWeather() {

    const weatherContainer = document.querySelector('#weather');

    if (!weatherContainer) return;

    try {

        const response = await fetch(weatherURL);

        if (!response.ok) {
            throw new Error('Weather data failed');
        }

        const data = await response.json();

        weatherContainer.innerHTML = `
            <p><strong>${Math.round(data.main.temp)}°C</strong></p>
            <p>${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;

    } catch (error) {

        console.error(error);

        weatherContainer.innerHTML =
        `<p>Weather unavailable.</p>`;
    }
}

getWeather();


/* SPOTLIGHTS */

const membersURL = 'data/members.json';

async function getSpotlights() {

    const container = document.querySelector('#spotlights');

    if (!container) return;

    const response = await fetch(membersURL);

    const members = await response.json();

    const filtered = members.filter(member =>
        member.membershipLevel === 2 ||
        member.membershipLevel === 3
    );

    const randomMembers =
        filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

    displaySpotlights(randomMembers);

}

getSpotlights();

function displaySpotlights(members) {

    const container = document.querySelector('#spotlights');

    if (!container) return;

    container.innerHTML = '';

    members.forEach(member => {

        const card = document.createElement('section');

        card.classList.add('spotlight-card');

        card.innerHTML = `
            <img
                src="images/${member.image}"
                alt="${member.name}"
                width="120"
                height="80"
                loading="lazy"
                decoding="async"
            >

            <h3>${member.name}</h3>

            <p>${member.phone}</p>

            <p>${member.address}</p>

            <a href="${member.website}" target="_blank">
                Visit Website
            </a>

            <p>
                Membership Level:
                ${member.membershipLevel}
            </p>
        `;

        container.appendChild(card);

    });

}

const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

/* ACTIVE NAVIGATION LINK */

const currentPage = window.location.pathname.split('/').pop();

document.querySelectorAll('.navigation a').forEach(link => {
    const linkPage = new URL(link.href).pathname.split('/').pop();

    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});

const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
});