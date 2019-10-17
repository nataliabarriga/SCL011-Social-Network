import {closeSesion} from '../models/main.js'
import {principal} from './beginViews.js';
import{writepost}from './postViews.js';

export const initial = () => {
    const root = document.getElementById("root");
    root.innerHTML = 
    `<button id="btnMenu">Menú</button>
     <button id="btnbest">Destacados</button>
    <div class="carousel">
        <h2 id="btnbest>Destacados</h2>
        <div><img><h3>Local 1</h3></div>
        <div><img><h3>Local 2</h3></div>
        <div><img><h3>Local 3</h3></div>
    </div>
    <div class="carousel">
        <h2>Más Baratos</h2>
        <div><img></div>
        <div><img></div>
        <div><img></div>
    </div>
    <div class="carousel">
        <h2>Tus favoritos</h2>
        <div><img></div>
        <div><img></div>
        <div><img></div>
    </div>
    <button id="btnAll">Ver Todos</button>`

    const btnMenu = document.getElementById("btnMenu");
    btnMenu.addEventListener("click", ()=>{
        menu();
    })

    const btnbest = document.getElementById("btnbest");
    btnbest.addEventListener("click", ()=>{

        writepost();
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
