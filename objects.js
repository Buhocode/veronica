var list = [
    {
        link: './assets/pictures/images/alegre.jpg',
        description: 'Jardin de casa en Milenio III'
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
        description: 'Un departamento'
    },
    {
        link: './assets/pictures/images/ele.JPG',
        description: 'Un deparamento'
    },
    {
        link: './assets/pictures/images/jardin.JPG',
        description: 'Fraccionamiento Milos'
    },
    {
        link: './assets/pictures/images/jardin2.JPG',
        description: 'Fraccionamiento Milos en progreso'
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
        link: './assets/pictures/images/garden.jpg',
        description: 'Jardin Key to the Soul'
    },
    {
        link: './assets/pictures/images/garden2.jpg',
        description: 'Jardin Key to the Soul'
    },
    {
        link: './assets/pictures/images/garden3.jpg',
        description: 'Jardin Key to the Soul'
    },
    {
        link: './assets/pictures/images/madera.jpg',
        description: 'Muro verde de madera'
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
        link: './assets/pictures/images/nippo1.jpg',
        description: 'Casa muestra Nippo'
    },
    {
        link: './assets/pictures/images/nippo2.jpg',
        description: 'Casa muestra Nippo'
    },
    {
        link: './assets/pictures/images/showgarden.jpg',
        description: 'Showgarden'
    },
    {
        link: './assets/pictures/images/showgarden2.jpg',
        description: 'Showgarden'
    },
    {
        link: './assets/pictures/images/natural.jpg',
        description: 'Showgarden'
    },
    {
        link: './assets/pictures/images/sji2.JPG',
        description: 'San Jose de Iturbide'
    },
    {
        link: './assets/pictures/images/sji3.JPG',
        description: 'San Jose de Iturbide'
    },
    {
        link: './assets/pictures/images/sji4.JPG',
        description: 'San Jose de Iturbide'
    },
    {
        link: './assets/pictures/images/sji5.JPG',
        description: 'San Jose de Iturbide'
    },
    {
        link: './assets/pictures/images/sji6.jpg',
        description: 'San Jose de Iturbide'
    },
    {
        link: './assets/pictures/images/sji7.jpg',
        description: 'San Jose de Iturbide'
    },
    {
        link: './assets/pictures/images/sji8.jpg',
        description: 'San Jose de Iturbide'
    },
    {
        link: './assets/pictures/images/tab1.JPG',
        description: 'Fabrica de Tabaco'
    },
    {
        link: './assets/pictures/images/tab2.JPG',
        description: 'Fabrica de Tabaco'
    },
    {
        link: './assets/pictures/images/tab3.JPG',
        description: 'Fabrica de Tabaco'
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
        link: './assets/pictures/images/trinitate.JPG',
        description: 'Uso de macetas'
    },
    {
        link: './assets/pictures/images/sn1.jpg',
        description: 'Sendas del Naranjo'
    },
    {
        link: './assets/pictures/images/tm2019.jpg',
        description: 'Hospital Tec Milenio'
    },
    {
        link: './assets/pictures/images/tm20192.jpg',
        description: 'Hospital Tec Milenio'
    },
    {
        link: './assets/pictures/images/tm20193.jpg',
        description: 'Hospital Tec Milenio'
    },
];

var left = document.getElementsByClassName('left');
var right = document.getElementsByClassName('right');

for (let i = 0; i < list.length; i++) {
    var div = document.createElement('div');
    var img = document.createElement('img');
    var text = document.createElement('p');
    var card_text = document.createElement('div')

    img.src = list[i].link;
    img.alt = list[i].description;
    text.textContent = list[i].description;

    div.classList.add('card', 'mb-5');
    img.classList.add('card-img-top');
    text.classList.add('card-text');
    card_text.classList.add('card-body');

    card_text.append(text)
    div.append(img)
    div.append(card_text)

    if (i % 2 == 0) {
        left[0].append(div)
    } else {
        right[0].append(div)
    }
}