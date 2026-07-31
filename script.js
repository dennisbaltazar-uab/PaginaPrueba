const botonTema = document.querySelector("#tema-btn");

function cambiarTema() {
    document.body.classList.toggle("oscuro");
    if (document.body.classList.contains("oscuro")) {
        botonTema.textContent = "☀️ Modo Claro";
    } else {
        botonTema.textContent = "🌙 Modo Oscuro";
    }
}

botonTema.addEventListener("click", cambiarTema);