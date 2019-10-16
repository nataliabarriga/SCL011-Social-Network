// import {register} from '../views/beginViews.js'
// import {login} from '../views/beginViews.js'

export const registerUser = (nameRegistry, mailRegistry, passwordRegistry) =>{
    firebase.auth().createUserWithEmailAndPassword(mailRegistry, passwordRegistry)
    .then (function(){
        verificar();
    })
    .catch(function(error) {
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        alert("Usuario registrado");
    });
}

function verificar(){
    var user = firebase.auth().currentUser;
    user.sendEmailVerification()
    .then(function(){
        console.log("Enviando correo...");
    })
    .catch(function(error){
        console.log(error);
    });
}

export const loginUser = (mailLogin,passwordLogin) => {
    firebase.auth().signInWithEmailAndPassword(mailLogin, passwordLogin)
    .then(function(){
        observer();
    })
    .catch(function(error){
       var errorCode = error.code;
       console.log(errorCode);
       var errorMessage = error.message;
       console.log(errorMessage);
       alert("Usuario y/o contraseña son incorrectos")
    });
}

function observer(){
    firebase.auth().onAuthStateChanged(function(user) {
        if(user){
            console.log("Existe Usuario Activo");
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
        }  
        else{
            console.log("No existe usuario activo");
        }
    });
}
