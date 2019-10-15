

export const register=()=> {

    const container=document.getElementById("root");
    container.innerHTML = "";
    container.innerHTML += 
`<form class="center">
<input id="nameRegistry" type="text" placeholder="Ingresa tu Nombre">
<input id="mailRegistry" type="email" placeholder="Ingresa tu E-mail">
<input id="passwordRegistry" type="password" placeholder="Ingresa tu contraseña">
<button id="btnRegistryOk">Registrarse</button>
</form>
`
const buttonregister=document.getElementById("btnRegistryOk");
buttonregister.addEventListener("click",() =>{

    
    let email=document.getElementById("mailRegistry").value;
    let password=document.getElementById("passwordRegistry").value; 
    

    registeruser(email,password);
    console.log('usuario registrado');
})
}