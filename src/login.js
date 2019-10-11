   
   
   export const loginuser=()=> {

        const container=document.getElementById("root");
        container.innerHTML += 
    `
    <div>
    <h4>Registro de usuario</h4>
    <input id="email" type="email" placeholder="Ingrese e-mail">
    <input id="password" type="password" placeholder="Ingrese contraseña">
    <button id="registeruser">Registrarse </button>
    </div>
    `
    }
    