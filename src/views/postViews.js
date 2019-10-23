import{initial}from './mainViews.js';
import{writepost} from '../models/post.js';
import{readpost} from '../models/post.js';



export const viewpost=()=>{
    const root = document.getElementById("root");
   
    root.innerHTML = `

    <div class="post">
    <textarea id="escrito" cols="20" rows="15"  placeholder="Ingrese mensaje" ></textarea><br>
    <button id="write">Publicar</button>
    <button id="back">Atras</button>
    </div>
    <div id="lectura">
    </div>
    `
    const read=document.getElementById("lectura");
    readpost(read);
    
    const btnwrite=document.getElementById("write");
    btnwrite.addEventListener("click",()=>{

     
        const post2= document.getElementById("escrito").value;
        const read=document.getElementById("lectura");
      
        writepost(post2);
        readpost(read);
       
    })

    const btnback=document.getElementById("back");
    btnback.addEventListener("click",()=>{
      
        initial()
    })
   
}

