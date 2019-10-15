export const principal=()=> {
    const container=document.getElementById("root");
    container.innerHTML += 
    `<div class="center">
        <img>
        <button id="btnRegistry">Registrate</button>
        <button id="btnLogin">Iniciar Sesión</button>
    </div>`
    
    const btnregister=document.getElementById("btnRegistry");
    btnregister.addEventListener('click', ()=>{
        register()
    })

    const btnlogin=document.getElementById("btnLogin");
    btnlogin.addEventListener('click', ()=>{
        login()
    })
}

export const register=()=> {
    const container=document.getElementById("root");
    container.innerHTML = "";
    container.innerHTML += 
    `<form class="center">
        <input id="nameRegistry" type="text" placeholder="Ingresa tu Nombre">
        <input id="mailRegistry" type="email" placeholder="Ingresa tu E-mail">
        <input id="passwordRegistry" type="password" placeholder="Ingresa tu contraseña">
        <button id="btnRegistryOk">Registrarse</button>
    </form>`

    const buttonregister=document.getElementById("btnRegistryOk");
    buttonregister.addEventListener("click",() =>{
        console.log("hola");
        
        let email=document.getElementById("mailRegistry").value;
        let password=document.getElementById("passwordRegistry").value;
        registeruser(email,password);
    })
}

export const login=()=> {
    const container=document.getElementById("root");
    container.innerHTML = "";
    container.innerHTML += 
    `<form class="center">
       <input id="mailLogin" type="email" placeholder="Ingresa tu E-mail">
       <input id="passwordLogin" type="email" placeholder="Ingresa tu contraseña">
       <button id="btnLoginOk">Iniciar Sesión</button>
    </form>`
}