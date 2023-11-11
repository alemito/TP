const divProductos = document.getElementById("productosDestacados");


fetch('https://fakestoreapi.com/products')
    .then((Response) => Response.json())
    .then((data) => mostrarInformacion(data));

function mostrarInformacion(productosDestacados) {
    divProductos.innerHTML = "";
    const productosPorCategoria = {};


    productosDestacados.forEach(element => {
        if (!productosPorCategoria[element.category]) {
            productosPorCategoria[element.category] = [];
        }
        productosPorCategoria[element.category].push(element);
    });

    // Recorro las categorias y creo las secciones
    for (const categoria in productosPorCategoria) {
        const productosDeLaCategoria = productosPorCategoria[categoria];

        // Creo una sección para cada categoría
        const seccion = document.createElement('section'); // section vs article , section se utiliza para agrupar contenido tematicamente relacionado.
        seccion.innerHTML = `<h2>${categoria}</h2>`;
        divProductos.appendChild(seccion); // Agrego la seccion dentro del div principal

        // Recorro los productos de la categoría y los agrego a la seccion
        productosDeLaCategoria.forEach(producto => {
            // Creo el contenedor para cada producto
            const contenedorProductos = document.createElement('div');
            contenedorProductos.classList.add('productos'); // Le agrego la clase "productos" para el css

            // Agrego la imagen del producto
            const imgElement = document.createElement('img');
            imgElement.src = producto.image;
            contenedorProductos.appendChild(imgElement);

            // Agrego título, descripcion y precio del producto
            contenedorProductos.innerHTML += `<strong>${producto.title}</strong>`;
            contenedorProductos.innerHTML += `<p>${producto.description}</p>`;
            contenedorProductos.innerHTML += `<p>Precio: $${producto.price}</p>`;

            // Agrego el contenedor del producto a la sección
            seccion.appendChild(contenedorProductos);
        });
    }
}
