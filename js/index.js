const boton = document.getElementById("pokenizar");

function setLocal() {
    const nombreUsuario = document.getElementById("name").value;
    const edad = document.getElementById("edad").value;
    const numeroFavorito = document.getElementById("number").value;

    const idPoke = Math.floor(edad * 44 / numeroFavorito);


    localStorage.setItem("Nombre", nombreUsuario);
    localStorage.setItem("Edad", edad);
    localStorage.setItem("Numero Favorito", numeroFavorito);
    localStorage.setItem("ID Poke", idPoke);

    window.location = "pokenizado.html"
}

boton.addEventListener("click", setLocal);
