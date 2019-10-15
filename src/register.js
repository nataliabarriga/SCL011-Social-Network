import {register} from'./Viewregister.js';

export const registeruser=(email, password)=>{

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
      register()
}


   
