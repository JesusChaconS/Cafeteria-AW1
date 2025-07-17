const boton = document.getElementById("boton-contacto")
const boton_volver = document.getElementById("boton-volver")
const seccionNosotros = document.getElementById("seccion-nosotros")
const seccionContacto = document.getElementById("seccion-contacto")

boton.addEventListener("click", () => {
    seccionNosotros.style.display="none";
    seccionContacto.style.display="block";
})

boton_volver.addEventListener("click", () => {
    seccionNosotros.style.display="block";
    seccionContacto.style.display="none";
})