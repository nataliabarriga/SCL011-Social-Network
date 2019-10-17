import{initial}from './mainViews.js';


export const writepost=()=>{
    const root = document.getElementById("root");
    root.innerHTML = `

    <div class="post">
    <textarea id="escrito" cols="20" rows="15"  placeholder="Ingrese mensaje" ></textarea><br>
    <button id="write">Postear</button>
    <button id="back">Atras</button>
    </div>
    `
    const btnback=document.getElementById("back");
    btnback.addEventListener("click",()=>{
      
        initial()
    })
    
}