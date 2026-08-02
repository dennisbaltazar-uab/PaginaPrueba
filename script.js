const botonTema = document.querySelector("#tema-btn");
const body = document.body;
function cambiarTema() {
    body.classList.toggle("oscuro");
    if (body.classList.contains("oscuro")) {
        botonTema.textContent = "Modo Claro";
    } else {
        botonTema.textContent = "Modo Oscuro";
    }
}
botonTema.addEventListener("click", cambiarTema);
console.log("Botón encontrado:", botonTema);