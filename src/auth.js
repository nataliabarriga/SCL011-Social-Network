import{loginuser} from './login.js'

const buttonregister=document.getElementById("registeruser");
buttonregister.addEventListener("click",() =>{

    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
   

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
})