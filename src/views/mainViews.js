import {closeSesion} from '../models/main.js'
import {principal} from './beginViews.js';
import{viewpost}from './postViews.js';

export const initial = () => {
    const root = document.getElementById("root");
    root.innerHTML = 
    `<button id="btnMenu"><img src="img/menu.png" class="imgMenu"></button>
    <div class="containerCarousel">
        <div class="titleCarousel">
            <h2>Destacados</h2>
        </div>
        <div class="carousel">
            <div class="localCarousel">
                <button id="btnLocal" class="btnLocal">
                    <img src="img/pf01.jpg">
                    <h3>Local 1</h3>
                </button>
            </div>
            <div class="localCarousel">
                <button id="btnLocal" class="btnLocal">
                    <img src="img/pf02.jpg">
                    <h3>Local 2</h3>
                </button>
            </div>
            <div class="localCarousel">
                <button id="btnLocal" class="btnLocal">
                    <img src="img/pf03.jpg">
                    <h3>Local 3</h3>
                </button>
            </div>
            <div class="localCarousel">
                <button id="btnLocal" class="btnLocal">
                    <img src="img/pf010.jpg">
                    <h3>Local 4</h3>
                </button>
            </div>    
        </div>
        <div class="titleCarousel">
            <h2>Más Baratos</h2>
        </div>
        <div class="carousel">
            <div class="localCarousel">
                <button id="btnLocal" class="btnLocal">
                    <img src="img/pf04.jpg">
                    <h3>Local 1</h3>
                </button>
            </div>
            <div class="localCarousel">
                <button id="btnLocal" class="btnLocal">
                    <img src="img/pf05.jpg">
                    <h3>Local 2</h3>
                </button>
            </div>
            <div class="localCarousel">
                <button id="btnLocal" class="btnLocal">
                    <img src="img/pf06.jpg">
                    <h3>Local 3</h3>
                </button>
            </div>
            <div class="localCarousel">
                <button id="btnLocal" class="btnLocal">
                    <img src="img/pf011.jpg">
                    <h3>Local 4</h3>
                </button>
            </div>    
        </div>
        <div class="titleCarousel">
            <h2>Mis Favoritos</h2>
        </div>
        <div class="carousel">
            <div class="localCarousel">
                <button id="btnLocal" class="btnLocal">
                    <img src="img/pf07.jpg">
                    <h3>Local 1</h3>
                </button>
            </div>
            <div class="localCarousel">
                <button id="btnLocal" class="btnLocal"">
                    <img src="img/pf08.jpg">
                    <h3>Local 2</h3>
                </button>
            </div>
            <div class="localCarousel">
                <button id="btnLocal" class="btnLocal">
                    <img src="img/pf09.jpg">
                    <h3>Local 3</h3>
                </button>
            </div> 
            <div class="localCarousel">
                <button id="btnLocal" class="btnLocal">
                    <img src="img/pf012.jpg">
                    <h3>Local 4</h3>
                </button>
            </div>   
        </div> 
    </div>
     
    <button id="btnAll">Ver Todos</button>`

    const btnMenu = document.getElementById("btnMenu");
    btnMenu.addEventListener("click", ()=>{
        menu();
    })

    const btnAll = document.getElementById("btnAll");
    btnAll.addEventListener("click", () => {
        all();
    })
    const btnLocal = document.getElementById("btnLocal");
    btnLocal.addEventListener("click", ()=>{
        viewpost();  
    })
    
}

const menu = () => {
    const root = document.getElementById("root");
    root.innerHTML = 
    `<div class="modalMenuContainer">
    <div class="modalMenuInfo">
        <button id="btnBackModal"><img src="img/arrow.png" class="imgArrow"></button>
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

    const btnBackModal = document.getElementById("btnBackModal");
    btnBackModal.addEventListener("click", ()=>{
        initial();
    })
}

const all = () => {
    const root = document.getElementById("root");
    root.innerHTML = 
    `<button id="btnBackMain" class="btnBackMain"><img src="img/arrow.png" class="imgArrow"></button>
    <div class="containerCarouselAll">
         <div class="titleCarouselAll">
             <h2>Comunas</h2>
         </div>
         <div class="carouselAll">
             <div class="localCarouselAll">
                 <a href="">
                     <img src="img/pf01.jpg">
                 </a>
                 <h3>Providencia</h3>
             </div>
             <div class="localCarouselAll">
                 <a href="">
                     <img src="img/pf02.jpg">
                 </a>
                 <h3>Santiago</h3>
             </div>
             <div class="localCarouselAll">
                 <a href="">
                     <img src="img/pf03.jpg">
                 </a>
                 <h3>Maipú</h3>
             </div>
             <div class="localCarouselAll">
                 <a href="">
                     <img src="img/pf010.jpg">
                 </a>
                 <h3>Ñuñoa</h3>
             </div>    
         </div>
     </div>
     <div class="containerlocalList">
         <div class="titleLocalList">
             <h2>Todos</h2>
         </div>
         <div class="localBox">
             <img src="img/pfh01.jpg">
             <div class="localName">
                 <h3>Local 1</h3>
             </div>
         </div>
         <div class="localBox">
             <img src="img/pfh02.jpg">
             <div class="localName">
                 <h3>Local 2</h3>
             </div>
         </div>
         <div class="localBox">
             <img src="img/pfh03.jpg">
             <div class="localName">
                 <h3>Local 3</h3>
             </div>
         </div>
         <div class="localBox">
             <img src="img/pfh04.jpg">
             <div class="localName">
                 <h3>Local 4</h3>
             </div>
         </div>    
         <div class="localBox">
             <img src="img/pfh05.jpg">
             <div class="localName">
                 <h3>Local 5</h3>
             </div>
         </div>       
     </div>`

    const btnBackMain = document.getElementById("btnBackMain");
    btnBackMain.addEventListener("click", ()=>{
        initial();
    })
}