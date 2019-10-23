import {closeSesion} from '../models/main.js'
import {principal} from './beginViews.js';
import{viewpost}from './postViews.js';

export const initial = () => {
    const root = document.getElementById("root");
    root.innerHTML = 
    `<button id="btnMenu">Menú</button>
     <button id="btnbest">Destacados</button>

    <div class="carousel">
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

    const btnbest = document.getElementById("btnbest");
    btnbest.addEventListener("click", ()=>{

        viewpost();
    })
    
}

const menu = () => {
    const root = document.getElementById("root");
    root.innerHTML = 
    `<div class="modalMenuContainer">
        <div class="modalMenuInfo">
            <button id="btnBack">Atrás</button>
            <img>
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
