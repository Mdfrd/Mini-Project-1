const carData = [
    { title: 'Audi', description: 'Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany.' },
    { title: 'Mercedes-Benz', description: 'Mercedes-Benz, commonly referred to as Mercedes, is a German luxury automotive brand.' },
    { title: 'BMW', description: 'Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational corporate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany.' }
];


function getCars() {
    return carData;
}

function addCards() {
    getCars().forEach((car) => {
        const template = document.getElementById("car-card-template").content.cloneNode(true);
        template.querySelector('.card-title').innerText = car.title;
        template.querySelector('.card-text').innerText = car.description;
        document.querySelector('#car-list').appendChild(template);
    });
}
if ('content' in document.createElement('template')) {
    addCards();
}



fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => console.log(json));






