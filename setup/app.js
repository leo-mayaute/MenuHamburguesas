const menu = [{
        id: 1,
        titulo: "Panqueques de leche",
        categoria: "desayuno",
        precio: 9.99,
        img: "./images/item-1.jpeg",
        desc: `Panqueque de leche perfecto para el desayuno suave y esponjoso, se puede acompañar con miel y fruta.`,
    },
    {
        id: 2,
        titulo: "Almuerzo Doble",
        categoria: "almuerzo",
        precio: 13.99,
        img: "./images/item-2.jpeg",
        desc: `Dos hamburguesas dobles de carne con huevo, queso y tocino para que no te quedes sin energía.`,
    },
    {
        id: 3,
        titulo: "Milkshake godzilla",
        categoria: "batidos",
        precio: 6.99,
        img: "./images/item-3.jpeg",
        desc: `Un batido de leche muy rico con varios dulces y también incluye !Una dona¡`,
    },
    {
        id: 4,
        titulo: "Deleite campestre",
        categoria: "desayuno",
        precio: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Un desayuno típico campestre con huevo, papa, pan tostado y café pasado.`,
    },
    {
        id: 5,
        titulo: "Huevos al ataque",
        categoria: "desayuno",
        precio: 22.99,
        img: "./images/item-5.jpeg",
        desc: `Una hamburguesa única con carne, huevo, lechuga y tomate que te dejará con ganas de más.`,
    },
    {
        id: 6,
        titulo: "Dulce oreo",
        categoria: "batidos",
        precio: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Un batido de los que siempre quisiste tomarte cuando niño. Leche, galletas oreo y fudge en un vaso.`,
    },
    {
        id: 7,
        titulo: "Sobrecarga de bacon",
        categoria: "desayuno",
        precio: 8.99,
        img: "./images/item-7.jpeg",
        desc: `Un sandwich saludable, pero rico para empezar el día de la mejor manera.`,
    },
    {
        id: 8,
        titulo: "Almuerzo clásico americano",
        categoria: "almuerzo",
        precio: 12.99,
        img: "./images/item-8.jpeg",
        desc: `Hamburguesa clásica con papas a la francesa y tus cremas favoritas.`,
    },
    {
        id: 9,
        titulo: "Batido de cuarentena",
        categoria: "batidos",
        precio: 16.99,
        img: "./images/item-9.jpeg",
        desc: `Un batido para hacerte olvidar todo el tiempo que pasaste encerrado por la cuarentena, se disfruta mejor con alguien.`,
    },
];

const seccionCentral = document.querySelector('.seccion-central');
const filtroBtns = document.querySelectorAll('.filtro-btn')


window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
});

filtroBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const categoria = e.currentTarget.dataset.id;
        const menuCategoria = menu.filter(function(menuItem) {

            if (menuItem.categoria === categoria) {
                return menuItem;
            }
        });
        if (categoria === 'todo') {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategoria);
        }
    })
})

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return ` <article class="menu-item">
                <img src=${item.img} class="foto" alt=${item.titulo}>
                <div class="plato-info">
                    <header>
                        <h4>${item.titulo}</h4>
                        <h4 class="precio">$1${item.precio}</h4>
                    </header>
                    <p class="plato-descripcion">${item.desc}</p>
                </div>
            </article>`;
    });
    displayMenu = displayMenu.join("");
    seccionCentral.innerHTML = displayMenu;
}