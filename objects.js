var list = [
    {
        link: './assets/pictures/images/oficina1.jpeg',
        description: 'Oficinas Milenio III',
    },
    {
        link: './assets/pictures/images/oficina2.jpeg',
        description: 'Oficinas Milenio III',
    },
    {
        link: './assets/pictures/images/oficina3.jpeg',
        description: 'Oficinas Milenio III',
    },
    {
        link: './assets/pictures/images/sji8.jpg',
        description: 'San José de Iturbide'
    },
    {
        link: './assets/pictures/images/modulo1.JPG',
        description: 'Modulo de muro verde'
    },
    {
        link: './assets/pictures/images/modulo2.jpg',
        description: 'Modulo de muro verde'
    },
    {
        link: './assets/pictures/images/garden2.jpg',
        description: 'Showgarden South Africa'
    },
    {
        link: './assets/pictures/images/garden3.jpg',
        description: 'Showgarden South Africa'
    },
    {
        link: './assets/pictures/images/showgarden2.jpg',
        description: 'Showgarden South Africa'
    },
    {
        link: './assets/pictures/images/natural.jpg',
        description: 'Showgarden South Africa'
    },
    {
        link: './assets/pictures/images/garden.jpg',
        description: 'Showgarden South Africa'
    },
    {
        link: './assets/pictures/images/showgarden.jpg',
        description: 'Showgarden South Africa'
    },
    {
        link: './assets/pictures/images/jardin2.JPG',
        description: 'Fraccionamiento Milos en progreso'
    },
    {
        link: './assets/pictures/images/jardin.JPG',
        description: 'Fraccionamiento Milos'
    },
    {
        link: './assets/pictures/images/jardin3.JPG',
        description: 'Fraccionamiento Milos'
    },
    {
        link: './assets/pictures/images/jardin4.jpg',
        description: 'Fraccionamiento Milos'
    },
    {
        link: './assets/pictures/images/tm20193.jpg',
        description: 'Torre H+ Querétaro'
    },
    {
        link: './assets/pictures/images/hospital2.jpeg',
        description: 'Torre H+ Querétaro'
    },
    {
        link: './assets/pictures/images/tm2019.jpg',
        description: 'Torre H+ Querétaro'
    },
    {
        link: './assets/pictures/images/tm20192.jpg',
        description: 'Torre H+ Querétaro'
    },
    {
        link: './assets/pictures/images/hospital1.jpeg',
        description: 'Torre H+ Querétaro'
    },
    {
        link: './assets/pictures/images/hospital3.jpeg',
        description: 'Torre H+ Querétaro'
    },
    {
        link: './assets/pictures/images/tab1.JPG',
        description: 'Fábrica de Tabaco'
    },
    {
        link: './assets/pictures/images/tab3.JPG',
        description: 'Fábrica de Tabaco'
    },
    {
        link: './assets/pictures/images/tab2.JPG',
        description: 'Fábrica de Tabaco'
    },
    {
        link: './assets/pictures/images/Bug.JPG',
        description: 'Casa muestra en Bugambilia'
    },
    {
        link: './assets/pictures/images/bug3.JPG',
        description: 'Casa muestra en Bugambilia'
    },
    {
        link: './assets/pictures/images/bug4.JPG',
        description: 'Casa muestra en Bugambilia'
    },
    {
        link: './assets/pictures/images/bug5.JPG',
        description: 'Casa muestra en Bugambilia'
    },
    {
        link: './assets/pictures/images/dep.JPG',
        description: 'Casa muestra en Bugambilia'
    },
    {
        link: './assets/pictures/images/sn1.jpg',
        description: 'Sendas del Naranjo'
    },
    {
        link: './assets/pictures/images/sn2.jpg',
        description: 'Sendas del Naranjo'
    },
    {
        link: './assets/pictures/images/sn3.JPG',
        description: 'Sendas del Naranjo'
    },
    {
        link: './assets/pictures/images/sji2.JPG',
        description: 'San José de Iturbide'
    },
    {
        link: './assets/pictures/images/sji3.JPG',
        description: 'San José de Iturbide'
    },
    {
        link: './assets/pictures/images/sji6.jpg',
        description: 'San José de Iturbide'
    },
    {
        link: './assets/pictures/images/sji7.jpg',
        description: 'San José de Iturbide'
    },
    {
        link: './assets/pictures/images/ele.JPG',
        description: 'San José Iturbide'
    },
    {
        link: './assets/pictures/images/virreyes1.JPG',
        description: 'Departamentos Virreyes'
    },
    {
        link: './assets/pictures/images/virreyes2.JPG',
        description: 'Departamentos Virreyes'
    },
    {
        link: './assets/pictures/images/virreyes3.jpg',
        description: 'Departamentos Virreyes'
    },
    {
        link: './assets/pictures/images/alegre.jpg',
        description: 'Casa habitacion Milenio III'
    },
    {
        link: './assets/pictures/images/nippo1.jpg',
        description: 'Casa muestra Nippo'
    },
    {
        link: './assets/pictures/images/nippo2.jpg',
        description: 'Casa muestra Nippo'
    },
    {
        link: './assets/pictures/images/trinitate.JPG',
        description: 'Uso de macetas'
    },
];

var cards = document.getElementsByClassName('cards');

for (let i = 0; i < list.length; i++) {
    var wrapper = document.createElement('div');
    var div = document.createElement('div');
    var img = document.createElement('img');
    var text = document.createElement('p');
    var card_text = document.createElement('div')

    img.src = list[i].link;
    img.alt = list[i].description;
    img.loading = 'lazy';
    text.textContent = list[i].description;

    div.classList.add('card', 'mb-5');
    img.classList.add('card-img-top');
    text.classList.add('card-text');
    card_text.classList.add('card-body');

    wrapper.classList.add('col-md-5', 'col-sm-12');

    card_text.append(text);
    div.append(img);
    div.append(card_text);
    wrapper.append(div);

    cards[0].append(wrapper);
}