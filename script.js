let $div= document.getElementById('vacio');


fetch('https://rickandmortyapi.com/api/character')
.then( (resultado)=>{
    return resultado.json();
})
.then( (resultado)=>{
    let personajes = resultado.results;
    for(let i=0; i<personajes.length; i++){
        $div.innerHTML += `<div class='personaje'>
                          <p>Nombre: ${personajes[i].name}</p>
                          <p>Especie: ${personajes[i].species}</p>
                          </div>`
    };
});