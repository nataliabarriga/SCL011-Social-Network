import{initial}from './mainViews.js';
import{writepost} from '../models/post.js';
import{readpost} from '../models/post.js';
import{deletepost} from '../models/post.js';


export const viewpost=()=>{
    const root = document.getElementById("root");
    root.innerHTML = 
    `<div class="post">
        <textarea id="escrito"  rows="4"  placeholder="Ingrese mensaje" ></textarea><br>
        <button id="write">Publicar</button>
        <button id="back">Atras</button> 
    </div>
    <div id="lectura">
    </div>`

    const read=document.getElementById("lectura");
    readpost(read);

    const btnwrite = document.getElementById("write");
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


export const printPost=(valor,index)=>{
    
    return `
    <div class="postear">
    <h3>${valor}</h3>
    <button id="edit${index}">Editar</button>
    <button id="delete${index}" >Borrar</button>
    </div> `; 
}




export const btnpost=(id,index)=>{

    const btndelete=document.getElementById("delete"+index);
    console.log('Eventboton'+index+' creado');
    btndelete.addEventListener("click",()=>{
        
        console.log("borrando post");
        console.log(index);

       deletepost(id);

    })
}

