 import { register} from './Viewregister.js';
 import { login} from './Viewlogin.js';
 
 export const principal=()=> {
        

        const container=document.getElementById("root");
       
        container.innerHTML += 
    `
     <div class="center">
     <img>
     <button id="btnRegistry">Registrate</button>
     <button id="btnLogin">Iniciar Sesión</button>
   </div>   

    `
    const btnregister=document.getElementById("btnRegistry");
    btnregister.addEventListener('click', ()=>{
        register()
    })

    const btnlogin=document.getElementById("btnLogin");
    btnlogin.addEventListener('click', ()=>{
        login()
    })

    }
