//escribir 
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

export const printPost=(valor)=>{

    return `
    <div class="postear">
    <h3>${valor}</h3>
    <button id="edit">Editar</button>
    <button id="delete">Borrar</button>
    </div>`;
}

export const readpost=(read)=>{
    
    database.collection("restaurantes").onSnapshot((querySnapshot) => {
        let a=[];
        querySnapshot.forEach((doc) => {   
        
            a.push(doc.data().post);
            //console.log(`${doc.id} => ${doc.data().post}`);
        });
       
        read.innerHTML="";  
        a.forEach((valor)=>{
           
            read.innerHTML +=printPost(valor);
        });
    });
};