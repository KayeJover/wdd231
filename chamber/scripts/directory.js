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
        logo.setAttribute('loading', 'lazy');

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

const menuButton = document.querySelector('#menu');

const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {

    navigation.classList.toggle('open');

    menuButton.classList.toggle('open');

});
const lastModified = document.querySelector('#lastModified');

lastModified.textContent =
`Last Modification: ${document.lastModified}`;