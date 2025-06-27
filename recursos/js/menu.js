import { productos } from './productos.js'
const seccion_productos = document.getElementById('productos_id')
let html = ''

productos.forEach(producto => {
    html += `
    <section class="cafe">
        <img src="${producto.imagen}" alt="${producto.titulo}">
        <h3>${producto.titulo}</h3>
        <p class="descripcion">${producto.descripcion}</p>
        <p class="precio">$ ${producto.precio}</p>
    </section>
    `
})

seccion_productos.innerHTML = html