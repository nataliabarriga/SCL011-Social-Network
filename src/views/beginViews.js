import {registerUser} from '../models/begin.js'
import {loginUser} from '../models/begin.js'
import {initial} from './mainViews.js'
import {loginGoogle} from '../models/begin.js'

export const principal = ()=> {
    const root = document.getElementById("root");
    root.innerHTML = 
    `<div class="backgroundBox">
    <div class="center">
        <img src="img/plogo2.png" class="logo">
        <button id="btnRegistry">Regístrate</button>
        <button id="btnLogin">Iniciar Sesión</button>
        <button id="btnGoogle"><img src="img/google1.png">Acceder con Google</button>
    </div>
    </div>`

    const btnRegistry=document.getElementById("btnRegistry");
    btnRegistry.addEventListener('click', ()=>{ 
        register();
    })
    
    const btnLogin=document.getElementById("btnLogin");
    btnLogin.addEventListener('click', ()=>{
        login();
    })

    const btnGoogle=document.getElementById("btnGoogle");
    btnGoogle.addEventListener("click" , ()=>{
        loginGoogle();
    })
}

export const register = () =>{
    const root =document.getElementById("root");
    root.innerHTML =
    `<div class="backgroundBox">
    <form class="center">
    <img src="img/plogo2.png" class="logo">
    <input id="nameRegistry" type="text" placeholder="Ingresa tu Nombre">
    <input id="mailRegistry" type="email" placeholder="Ingresa tu E-mail">
    <input id="passwordRegistry" type="password" placeholder="Ingresa tu Contraseña">
    <button id="btnRegistryOk">Registrarse</button>
    </form>
    </div>`

    const btnRegistryOk = document.getElementById("btnRegistryOk");
    btnRegistryOk.addEventListener("click", () => {
        let nameRegistry = document.getElementById("nameRegistry").value;
        let mailRegistry = document.getElementById("mailRegistry").value;
        let passwordRegistry = document.getElementById("passwordRegistry").value;
        modalRegistry();
        registerUser(nameRegistry, mailRegistry, passwordRegistry);
    })
}

    const modalRegistry = () =>{
    const container=document.getElementById("root");
    container.innerHTML = "";
    container.innerHTML +=

    `<div class="modalContainer">
            <button id="closeModal" class="closeModal">x</button>
    <div class="modalInfo">
            <h1>¡Muchas Gracias!</h1>  
            <img src="img/plogo2.png" class="logoModal">
            <p>Te enviamos un correo para que puedas validar tu cuenta</p>
    </div>
    </div>`

   const btncloseModal = document.getElementById("closeModal");
    btncloseModal.addEventListener("click", () => {
    
    login();
    
    })
}


export const login = () => {
    const root =document.getElementById("root");
    root.innerHTML = 

        `<div class="backgroundBox">
                <form class="center">
                <img src="img/plogo2.png" class="logo">
                 <input id="mailLogin" type="email" placeholder="Ingresa tu E-mail">
                <input id="passwordLogin" type="password" placeholder="Ingresa tu contraseña">
                <button id="btnLoginOk">Iniciar Sesión</button>
                </form>
        </div>`

    const btnLoginOk = document.getElementById("btnLoginOk");
    btnLoginOk.addEventListener("click", () =>{
        let mailLogin = document.getElementById("mailLogin").value;
        let passwordLogin = document.getElementById("passwordLogin").value;
        loginUser(mailLogin,passwordLogin);
        initial();

    })
}
