document.getElementById('formBusqueda').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtenemos el valor de búsqueda
    const busqueda = document.getElementById('busqueda').value;

    // Realizamos una solicitud al servidor para obtener los resultados
    fetch(`/buscar-productos?busqueda=${busqueda}`)
    
        .then(response => response.json())
        .then(data => {
            // Limpia la sección de resultados
            document.getElementById('resultadosTienda').innerHTML = '';

            // Itera sobre los resultados y agrega cada producto a la sección
            data.forEach(producto => {
                const productoHTML = `
                    <div class="productotienda">
                        <h3>${producto.nombre}</h3>
                        <p>Categoría: ${producto.categoria}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p>Stock: ${producto.stock}</p>
                        <!-- Agrega más detalles según tu modelo de datos -->
                    </div>
                `;
                document.getElementById('resultadosTienda').innerHTML += productoHTML;
            });
        })
        .catch(error => console.error('Error en la solicitud:', error));
});

document.getElementById('limpiar').addEventListener('click', function () {
    // Limpiar el campo de búsqueda y realizar una nueva búsqueda sin términos para mostrar todos los productos
    document.getElementById('busqueda').value = '';
    buscarProductos();
});

function buscarProductos() {
    // Obtenemos el valor de búsqueda
    const busqueda = document.getElementById('busqueda').value;

    // Realizamos una solicitud al servidor para obtener los resultados
    fetch(`/buscar-productos?busqueda=${busqueda}`)
        .then(response => response.json())
        .then(data => {
            // Limpia la sección de resultados
            document.getElementById('resultadosTienda').innerHTML = '';

            // Itera sobre los resultados y agrega cada producto a la sección
            data.forEach(producto => {
                const productoHTML = `
                    <div class="productotienda">
                        <h3>${producto.nombre}</h3>
                        <p>Categoría: ${producto.categoria}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p>Stock: ${producto.stock}</p>
                        <!-- Agrega más detalles según tu modelo de datos -->
                    </div>
                `;
                document.getElementById('resultadosTienda').innerHTML += productoHTML;
            });
        })
        .catch(error => console.error('Error en la solicitud:', error));
}