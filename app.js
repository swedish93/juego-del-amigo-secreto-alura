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
        actualizarListaHTML();
    console.log (listaAmigos);
}

function actualizarListaHTML() {
    let ul = document.getElementById('listaAmigosUl');
    ul.innerHTML = "";
    listaAmigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function sortearAmigo (){
    if (listaAmigos.length === 0) {
        alert("La lista está vacía, agrega amigos primero.");
        return;
    }
    let amigoAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSeleccionado = listaAmigos[amigoAleatorio];

    mostrarAmigoSorteado(amigoSeleccionado);
    }

function mostrarAmigoSorteado(amigoSeleccionado){
    let ul2 = document.getElementById('resultado');
    let li = document.createElement("li");
    li.textContent = "El amigo seleccionado es " + amigoSeleccionado;
    ul2.appendChild(li);
    let ul = document.getElementById('listaAmigosUl');
    ul.innerHTML = "";

}
