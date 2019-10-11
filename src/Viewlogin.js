export const login=()=> {

    const container=document.getElementById("root");
    container.innerHTML = "";
    container.innerHTML += 

`<form class="center">
       <input id="mailLogin" type="email" placeholder="Ingresa tu E-mail">
       <input id="passwordLogin" type="email" placeholder="Ingresa tu contraseña">
       <button id="btnLoginOk">Iniciar Sesión</button>
   </form>
`


}