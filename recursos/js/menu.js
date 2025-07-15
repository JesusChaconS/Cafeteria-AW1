const cargarProductos = async () => {
    try {
        console.log('hola   ')
        const respuesta = await fetch('./recursos/js/data/productos.json') 
        if (!respuesta.ok) {
            throw new Error(`Error al cargar JSON: ${respuesta.status}`);
        }
        console.log('respuesta', respuesta)
        const data = await respuesta.json();

        
        console.log('data:', data)

        const productos = data.productos;
        console.log('productos', productos)
        renderizarProductos(productos);
    }
    catch (error) {
        console.error('Ocurrió un error al obtener los productos:', error);
        return
    }
}

function renderizarProductos(productos) {
    
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
}


cargarProductos()
