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
            let displayName = user.displayName;
            let email = user.email;
            console.log(email);
            let emailVerified = user.emailVerified;
            console.log(emailVerified);
            let photoURL = user.photoURL;
            let isAnonymous = user.isAnonymous;
            let uid = user.uid;
            let providerData = user.providerData;
        }  
        else{
            console.log("No existe usuario activo");
        }
    });
}
