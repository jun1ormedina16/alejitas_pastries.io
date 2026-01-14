// ALERTA DE PEDIDO
function pedido() {
    alert("🍰 Gracias por elegir Alejitas Pastrie's 💜\nPronto nos pondremos en contacto contigo.");
}

// MENU HAMBURGUESA RESPONSIVE
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// CARRITO
let carrito = [];

function agregarCarrito(producto) {
    carrito.push(producto);
    mostrarCarrito();
}

function mostrarCarrito() {
    const lista = document.getElementById('cart-items');
    lista.innerHTML = '';

    if(carrito.length === 0){
        const li = document.createElement('li');
        li.textContent = document.querySelector('#cart-items li').dataset.es;
        lista.appendChild(li);
    } else {
        carrito.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            lista.appendChild(li);
        });
    }
}

// CAMBIO DE IDIOMA DESKTOP
const langSelectDesktop = document.getElementById('lang-select-desktop');
langSelectDesktop.addEventListener('change', () => {
    cambiarIdioma(langSelectDesktop.value);
});

// CAMBIO DE IDIOMA MOBILE
const langSelectMobile = document.getElementById('lang-select-mobile');
langSelectMobile.addEventListener('change', () => {
    cambiarIdioma(langSelectMobile.value);
});

// FUNCION CAMBIO DE IDIOMA
function cambiarIdioma(lang){
    document.querySelectorAll('[data-es]').forEach(el => {
        el.textContent = el.dataset[lang];
    });
}
