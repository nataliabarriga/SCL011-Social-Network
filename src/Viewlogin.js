

export const login=()=> {

    const container=document.getElementById("root");
    container.innerHTML = "";
    container.innerHTML += 

`<form class="center">
       <input id="mailLogin" type="email" placeholder="Ingresa tu E-mail">
       <input id="passwordLogin" type="password" placeholder="Ingresa tu contraseña">
       <button id="btnLoginOk">Iniciar Sesión</button>
   </form>
`
const buttonenter=document.getElementById("btnLoginOk");
buttonenter.addEventListener("click",()=>{

   let Loginmail=document.getElementById("mailLogin").value;
 
   let Loginpassword=document.getElementById("passwordLogin").value;
   usersignin(Loginmail,Loginpassword);   
})
}