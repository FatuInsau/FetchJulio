// fetch

// con fetch pedimos a la api de Rick y Morty la informacion de sus personajes
// como esto le lleva tiempo, es una promesa y debemos esperar la respuesta
let respuesta = fetch('https://rickandmortyapi.com/api/character');

// el .then nos ayuda a esperar la respuesta y usarla cuando este cumplida
respuesta
.then( (resultado)=>{
    // lo que recibimos del fetch esta en formato response (que no nos sirve)
    // entonces lo convertimos a json que si nos sirve para trabajar
    return resultado.json();
})
.then( (resultado)=>{
    // aca finalmente recibimos lo que esperabamos y podemos trabajar con eso
    console.log(resultado);
})
.catch((error)=>{
    console.log(error);
});