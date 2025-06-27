const boton = document.getElementById("boton-contacto")
const seccionNosotros = document.getElementById("seccion-nosotros")
const seccionContacto = document.getElementById("seccion-contacto")

boton.addEventListener("click", () => {
    seccionNosotros.style.display="none";
    seccionContacto.style.display="block";
})