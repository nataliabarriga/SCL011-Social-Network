
import {login} from'./Viewlogin.js';
export const usersignin=(Loginmail,Loginpassword)=>{

    firebase.auth().signInWithEmailAndPassword(Loginmail,Loginpassword)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
 
      firebase.auth().onAuthStateChanged(function(user) {
         if (user) {
           // User is signed in.
        
           const user=document.getElementById("root");
           user.innerHTML="Usuario activo";
           var displayName = user.displayName;
           var email = user.email;
           console.log(email);
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
       login()
}
   
