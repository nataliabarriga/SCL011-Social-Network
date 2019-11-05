import{printPost} from '../views/postViews.js';
import{btnpost} from'../views/postViews.js';

//escribir post
export const writepost=(post2)=>{

    database.collection("restaurantes").add({
        post: post2,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
};

//Leer Post
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