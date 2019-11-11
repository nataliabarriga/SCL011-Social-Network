import {initial} from '../views/mainViews.js'
import{writepost} from '../models/post.js';
import{readpost} from '../models/post.js';
import{deletepost} from '../models/post.js';

export const makePost = () => {
    const root = document.getElementById("root");
    root.innerHTML = 
    `<button id="btnBackInitial"><img src="img/arrow.png" class="imgArrow"></button>
    <div class="imgLocalInfo">
        <img src="img/pf01.jpg"> 
    </div> 
    <div class="containerButtons">
        <button class="comments">Comentarios</button>
        <button class="information">Información</button>
    </div>
    <div class="containerPost">
        <div class="publicationsInfo" id="publicationsInfo"></div>
    </div>
    <div class="centerBtn">
        <button id="btnComment" class="btnComment">+</button> 
    </div>`

    const read=document.getElementById("publicationsInfo");
    readpost(read);

    const btnBackInitial = document.getElementById("btnBackInitial");
    btnBackInitial.addEventListener("click", () =>{
        initial();
    })

    const btnComment = document.getElementById("btnComment");
    btnComment.addEventListener("click", ()=>{
        viewpost()
    })
}

export const viewpost = () => {
    const root = document.getElementById("root");
    root.innerHTML = 
    `<button id="btnBackLocal"><img src="img/arrow.png" class="imgArrow"></button> 
    <div class="publicationsPost" id="publicationsPost"></div>
    <div class="post">
        <textarea id="escrito"  rows="4"  placeholder="Ingrese mensaje" ></textarea><br>
        <button class="send" id="send">P</button>
    </div>`

    const read=document.getElementById("publicationsPost");
    readpost(read);

    const btnSend = document.getElementById("send");
    btnSend.addEventListener("click",()=>{
        const post2= document.getElementById("escrito").value;
        const read=document.getElementById("publicationsPost");
      
        writepost(post2);
        readpost(read);
    })

    const btnBackLocal=document.getElementById("btnBackLocal");
    btnBackLocal.addEventListener("click",()=>{
        makePost();
    })
}

export const printPost= (valor,index)=>{
    return `
    <div class="postear">
        <p>${valor}</p>
        <i class="far fa-star"></i>
        <button class="btnEdit" id="edit${index}">Editar</button>
        <button class="btnDelete" id="delete${index}" >Borrar</button>
        <button id="btnLike" class="btnLike"><img src="img/like1.png" class="imgLike"></button>
        <h4 id="counter" class="counter">0</h4>
    </div> `; 
}

// export const printPost= (valor,index)=>{
//     return `
//     <div class="postear">
//         <p>${valor}</p>
//         <i class="far fa-star"></i>
//         <button class="btnEdit" id="edit${index}">Editar</button>
//         <button class="btnDelete" id="delete${index}" >Borrar</button>
//         <button id="btnLike${index}" class="btnLike">Like</button>
//         <h4 id="counter${index}" class="counter">0</h4>
//     </div> `; 
// }

// export const btnLike = (id, index) =>{
//     let contador = 0;
//     const btnLike = document.getElementById("btnLike"+index);
//     btnLike.addEventListener("click", ()=>{   
//     document.getElementById("counter"+index).innerHTML = contador += 1;
// });

// }


export const btnpost=(id,index)=>{
    const btndelete=document.getElementById("delete"+index);
    console.log('Eventboton'+index+' creado');
    btndelete.addEventListener("click",()=>{
        console.log("borrando post");
        console.log(index);
        deletepost(id);
    })
}

