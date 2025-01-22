// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Primero guardare los nombres para el sorteo
let listaDeAmigos = [];
let nombreAmigo = "";

function agregarAmigo(){
    nombreAmigo = document.querySelector('#amigo').value;
    if (nombreAmigo == ""){
        alert('No has ingresado un nombre');
    }else{
        listaDeAmigos.push(nombreAmigo);
        document.querySelector("#listaAmigos").innerHTML = "";
        //muestro los nombres agregados en la página
        for(let nombres of listaDeAmigos){
            document.querySelector("#listaAmigos").innerHTML += "<li>"+nombres+"</li>";
        }
        console.log(listaDeAmigos);
    }
    document.querySelector('#amigo').value ='';
}

function sortearAmigo(){
    let posicionFinal =listaDeAmigos.length
    let posicionSorteada = Math.floor(Math.random()*posicionFinal);
    const nombreElegido = listaDeAmigos[posicionSorteada];
    document.querySelector('#resultado').innerHTML = `El nombre de tu amigo secreto es: ${nombreElegido}`
    console.log(posicionSorteada)
    console.log(nombreElegido)
}