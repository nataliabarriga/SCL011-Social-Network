import {closeSesion} from '../models/main.js'

export const close = () =>{
    const root = document.getElementById("root");
    root.innerHTML = 
    `<button id="btnClose">Cerrar Sesión</button>`

    const btnClose = document.getElementById("btnClose");
    btnClose.addEventListener("click", ()=>{
        closeSesion();
    })
}