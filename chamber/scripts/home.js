const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
});

// ACTIVE NAVIGATION LINK
const currentPage = window.location.pathname.split('/').pop();

document.querySelectorAll('.navigation a').forEach(link => {
    const linkPage = new URL(link.href).pathname.split('/').pop();

    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});

/* WEATHER API */

const weatherURL =
'https://api.openweathermap.org/data/2.5/weather?lat=10.6765&lon=122.9509&units=metric&appid=50e2d3aef73638db36c2b4e6f0084faa';

async function getWeather() {

    try {

        const response = await fetch(weatherURL);

        const data = await response.json();


        const weatherIcon =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        const sunrise =
            new Date(data.sys.sunrise * 1000)
            .toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit'
            });

        const sunset =
            new Date(data.sys.sunset * 1000)
            .toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit'
            });

        document.querySelector('#weather').innerHTML = `
        
            <div class="weather-info">

                <img
                    src="${weatherIcon}"
                    alt="${data.weather[0].description}"
                    width="80"
                    height="80"
                >

                <div>

                    <p>
                        <strong>
                            ${Math.round(data.main.temp)}°C
                        </strong>
                    </p>

                    <p>
                        ${data.weather[0].description}
                    </p>

                    <p>
                        High:
                        ${Math.round(data.main.temp_max)}°C
                    </p>

                    <p>
                        Low:
                        ${Math.round(data.main.temp_min)}°C
                    </p>

                    <p>
                        Humidity:
                        ${data.main.humidity}%
                    </p>

                    <p>
                        Sunrise:
                        ${sunrise}
                    </p>

                    <p>
                        Sunset:
                        ${sunset}
                    </p>

                </div>

            </div>
        `;

    } catch (error) {

        console.error(error);

        document.querySelector('#weather').innerHTML =
        `<p>Weather unavailable.</p>`;
    }

}

getWeather();
/* FORECAST API */

const forecastURL =
'https://api.openweathermap.org/data/2.5/forecast?lat=10.6765&lon=122.9509&units=metric&appid=50e2d3aef73638db36c2b4e6f0084faa';

async function getForecast() {

    try {

        const response = await fetch(forecastURL);

        const data = await response.json();

        const forecastContainer =
            document.querySelector('#forecast');

        forecastContainer.innerHTML = '';

        const filteredData = data.list.filter(item =>
            item.dt_txt.includes('12:00:00')
        );

        filteredData.slice(0, 3).forEach(day => {

            const date = new Date(day.dt_txt);

            forecastContainer.innerHTML += `
                <p>
                    ${date.toLocaleDateString('en-US', {
                        weekday: 'long'
                    })}
                    :
                    <strong>${Math.round(day.main.temp)}°C</strong>
                </p>
            `;
        });

    } catch (error) {

        console.error(error);

        document.querySelector('#forecast').innerHTML =
        `<p>Forecast unavailable.</p>`;
    }

}

getForecast();

/* SPOTLIGHTS */

const membersURL = 'data/members.json';

async function getSpotlights() {

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