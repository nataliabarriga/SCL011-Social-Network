import{printPost} from '../views/postViews.js';
import{btnpost} from'../views/postViews.js';
// import{btnLike} from'../views/postViews.js';

// Escribir post
export const writepost=(post2)=>{

    database.collection("restaurantes").add({
        post: post2,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById("escrito").value="";
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
};

// Leer post
export const readpost=(read)=>{
    
    database.collection("restaurantes").onSnapshot((querySnapshot) => {
        let datapost=[];
        let datapostid=[];

        querySnapshot.forEach((doc) => {   
        
            datapost.push(`${doc.data().post}`);
            datapostid.push(`${doc.id}`);
            console.log(datapostid);
        });
       
        read.innerHTML=""; 
        datapost.forEach((valor,index)=>{
    
            read.innerHTML +=printPost(valor,index);
             
        });
        datapost.forEach((valor,index)=>{
    
            btnpost(datapostid[index],index); 
                
        });
    });
};
//Borrar post

export const deletepost=(id)=>{
    
    database.collection("restaurantes").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
};


// Editar post

export const editpost=(id,index)=>{

    //console.log(id);
    const post2=document.getElementById("textpost"+ index).textContent;
    const postnew=document.getElementById("escrito");
      postnew.innerHTML =post2;
    //console.log(post2);

   const btnedit=document.getElementById("edit"+index);
   btnedit.innerHTML='Guardar';

   btnedit.addEventListener ("click",()=>{

    let restaurantRef = database.collection("restaurantes").doc(id);
    // Set the "capital" field of the city 'DC'
    let post2=document.getElementById("escrito").value;

    return restaurantRef.update({
    
        post:post2
    })
    .then(function() {
        
        console.log("Document successfully updated!");
        btnedit.innerHTML='Editar';
        document.getElementById("escrito").value="";

    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
