export const closeSesion = ()=>{
    firebase.auth().signOut()
    .then(function(){
        console.log("Cerrando Sesión");
    })
    .catch(function(error){
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        console.log(errorMessage);
    })
}