import {closeSesion} from '../models/main.js'
import {principal} from './beginViews.js';

export const initial = () => {
    const root = document.getElementById("root");
    root.innerHTML = 
    `<button id="btnMenu"><img src="img/menu.png" class="imgMenu"></button>
        <div class="containerCarousel">
        <h2>Destacados</h2>
        <div class="carousel">
            <div class="local"><img src="img/pf01.jpg"></div>
            <div class="local"><img src="img/pf02.jpg"></div>
            <div class="local"><img src="img/pf03.jpg"></div>
        </div>
        <h2>Más Baratos</h2>
        <div class="carousel">
            <div class="local"><img src="img/pf04.jpg"></div>
            <div class="local"><img src="img/pf05.jpg"></div>
            <div class="local"><img src="img/pf06.jpg"></div>
        </div>
        <h2>Tus favoritos</h2>
        <div class="carousel">
            <div class="local"><img src="img/pf07.jpg"></div>
            <div class="local"><img src="img/pf08.jpg"></div>
            <div class="local"><img src="img/pf09.jpg"></div>
        </div>
        </div>
    <button id="btnAll">Ver Todos</button>`

    const btnMenu = document.getElementById("btnMenu");
    btnMenu.addEventListener("click", ()=>{
        menu();
    })
}

const menu = () => {
    const root = document.getElementById("root");
    root.innerHTML = 
    `<div class="modalMenuContainer">
    <div class="modalMenuInfo">
        <button id="btnBack"><img src="img/arrow.png" class="imgArrow"></button>
        <img src="img/user.png" class="imgUser">
        <h4>Nombre</h4>
        <button id="btnFavorites">Mis favoritos</button>
        <button id="btnClose">Cerrar Sesión</button>
    </div>
    </div>`

    const btnClose = document.getElementById("btnClose");
    btnClose.addEventListener('click', ()=>{
        closeSesion();
        principal();
    })

    const btnBack = document.getElementById("btnBack");
    btnBack.addEventListener("click", ()=>{
        initial();
    })
}
