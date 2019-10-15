
import {initfirebase } from './init.js';
import { principal} from './Viewmain.js';

const init = () => {

    initfirebase();
    principal();
   
 }
 
window.addEventListener('load', init);

/*
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
}*/


