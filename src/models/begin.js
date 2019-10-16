
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
        console.log("Usuario activo");
    })
    .catch(function(error){
       var errorCode = error.code;
       console.log(errorCode);
       var errorMessage = error.message;
       alert("Usuario y/o contraseña son incorrectos")
    });
}

// const buttonenter=document.getElementById("userenter");
// buttonenter.addEventListener("click",()=>{

//   let email2=document.getElementById("email2").value;
//   let password2=document.getElementById("password2").value;

//   firebase.auth().signInWithEmailAndPassword(email2, password2)
//   .catch(function(error){
//        // Handle Errors here.
//        var errorCode = error.code;
//        var errorMessage = error.message;
//        // ...
//   });
//   login();

//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user){
//     // User is signed in.
//       const user=document.getElementById("root");
//       user.innerHTML="Usuario activo";
//       var displayName = user.displayName;
//       var email = user.email;
//       var emailVerified = user.emailVerified;
//       var photoURL = user.photoURL;
//       var isAnonymous = user.isAnonymous;
//       var uid = user.uid;
//       var providerData = user.providerData;
//     } else {
//           // User is signed out.
//       }
//   });
// })