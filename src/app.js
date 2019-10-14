const buttonRegister = document.getElementById("registerUser");
buttonRegister.addEventListener("click",() =>{
  
  let email=document.getElementById("email").value;
  let password=document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(){
    verificar()
  })
  /* Promesa en caso de que haya un error */
  .catch(function(error) {
  /* Handle Errors here */
    var errorCode = error.code;
    var errorMessage = error.message;
  });
})

const buttonEntry = document.getElementById("userEntry");
buttonEntry.addEventListener("click",()=>{

   let email2=document.getElementById("email2").value;
   let password2=document.getElementById("password2").value;

   firebase.auth().signInWithEmailAndPassword(email2, password2)
   .catch(function(error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       // ...
     });
})

firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
     // User is signed in.
     var displayName = user.displayName;
     var email = user.email;
     var emailVerified = user.emailVerified;
     var photoURL = user.photoURL;
     var isAnonymous = user.isAnonymous;
     var uid = user.uid;
     var providerData = user.providerData;
     // ...
   } else {
     // User is signed out.
     // ...
   }
 });

const closebutton=document.getElementById("close");
closebutton.addEventListener("click",()=>{
firebase.auth().signOut()
.then(function(){
 })
})

function verificar(){
  var user = firebase.auth().currentUser;
  user.sendEmailVerification()
  .then(function() {
      console.log("Enviando correo...");
      
// Email sent.
  }).catch(function(error) {
      console.log(error);
      
// An error happened.
  });
}