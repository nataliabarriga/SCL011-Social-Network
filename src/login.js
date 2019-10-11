const buttonenter=document.getElementById("userenter");
buttonenter.addEventListener("click",()=>{

   let email2=document.getElementById("email2").value;
   let password2=document.getElementById("password2").value;

   firebase.auth().signInWithEmailAndPassword(email2, password2)
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

})
