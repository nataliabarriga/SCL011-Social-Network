import {registerUser} from '../models/begin.js'
import {loginUser} from '../models/begin.js'

export const principal = ()=> {
    const root = document.getElementById("root");
    root.innerHTML = 
    `<div class="center">
        <img>
        <button id="btnRegistry">Regístrate</button>
        <button id="btnLogin">Iniciar Sesión</button>
    </div>`

    const btnRegistry=document.getElementById("btnRegistry");
    btnRegistry.addEventListener('click', ()=>{ 
        register()
    })
    
    const btnLogin=document.getElementById("btnLogin");
    btnLogin.addEventListener('click', ()=>{
        login()
    })
}

export const register = () =>{
    const root =document.getElementById("root");
    root.innerHTML =
    `<form class="center">
    <input id="nameRegistry" type="text" placeholder="Ingresa tu Nombre">
    <input id="mailRegistry" type="email" placeholder="Ingresa tu E-mail">
    <input id="passwordRegistry" type="password" placeholder="Ingresa tu contraseña">
    <button id="btnRegistryOk">Registrarse</button>
    </form>`

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
    <div class="modalInfo">
      <h1>¡Muchas Gracias!</h1>
      <p>Te enviamos un correo para que puedas validar tu cuenta</p>
    </div>
    </div>`
}

export const login = () => {
    const root =document.getElementById("root");
    root.innerHTML = 
    `<form class="center">
       <input id="mailLogin" type="email" placeholder="Ingresa tu E-mail">
       <input id="passwordLogin" type="password" placeholder="Ingresa tu contraseña">
       <button id="btnLoginOk">Iniciar Sesión</button>
    </form>`

    const btnLoginOk = document.getElementById("btnLoginOk");
    btnLoginOk.addEventListener("click", () =>{
        let mailLogin = document.getElementById("mailLogin").value;
        let passwordLogin = document.getElementById("passwordLogin").value;
        loginUser(mailLogin,passwordLogin);
    })
}