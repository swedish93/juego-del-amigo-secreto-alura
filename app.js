// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function añadirListaAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
            if (nombreAmigo === "") {
            alert ('Ingrese nombre válido')
        } else {
            listaAmigos.push(nombreAmigo)
            document.getElementById('amigo').value= "";
        }

    console.log (listaAmigos);
}
