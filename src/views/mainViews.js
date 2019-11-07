import {closeSesion} from '../models/main.js'
import {principal} from './beginViews.js';
import{viewpost}from './postViews.js';

export const initial = () => {
    const root = document.getElementById("root");
    root.innerHTML = 
    `
    <button id="btnbest">Destacados</button>       
    <button id="btnMenu"><img src="img/menu.png" class="imgMenu"></button>
    <div class="containerCarousel">
        <div class="titleCarousel">
            <h2>Destacados</h2>
        </div>
        <div class="carousel">
            <div class="localCarousel">
                <a href="">
                    <img src="img/pf01.jpg">
                </a>
            </div>
            <div class="localCarousel">
                <a href="">
                    <img src="img/pf02.jpg">
                </a>
            </div>
            <div class="localCarousel">
                <a href="">
                    <img src="img/pf03.jpg">
                </a>
            </div>
            <div class="localCarousel">
                <a href="">
                    <img src="img/pf010.jpg">
                </a>
            </div>    
        </div>
        <div class="titleCarousel">
            <h2>Más Baratos</h2>
        </div>
        <div class="carousel">
            <div class="localCarousel">
                <a href="">
                    <img src="img/pf04.jpg">
                </a>
            </div>
            <div class="localCarousel">
                <a href="">
                    <img src="img/pf05.jpg">
                </a>
            </div>
            <div class="localCarousel">
                <a href="">
                    <img src="img/pf06.jpg">
                </a>
            </div>
            <div class="localCarousel">
                <a href="">
                    <img src="img/pf011.jpg">
                </a>
            </div>    
        </div>
        <div class="titleCarousel">
            <h2>Mis Favoritos</h2>
        </div>
        <div class="carousel">
            <div class="localCarousel">
                <a href="">
                    <img src="img/pf07.jpg">
                </a>
            </div>
            <div class="localCarousel">
                <a href="">
                    <img src="img/pf08.jpg">
                </a>
            </div>
            <div class="localCarousel">
                <a href="">
                    <img src="img/pf09.jpg">
                </a>
            </div> 
            <div class="localCarousel">
                <a href="">
                    <img src="img/pf012.jpg">
                </a>
            </div>   
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
