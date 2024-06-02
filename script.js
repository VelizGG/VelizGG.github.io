async function obtenerUbicacion() {
    try {

        // Mostrar la imagen con el texto
        const imagenContainer = document.getElementById('imagen-container');
        imagenContainer.innerHTML = ''; // Limpiar contenido previo
        const imagen = document.createElement('img');
        imagen.src = 'images/tania.jpg';
        imagen.alt = 'Imagen de Tania';
        const texto = document.createElement('p');
        texto.textContent = 'Te amo demasiado, amor';
        imagenContainer.appendChild(imagen);
        imagenContainer.appendChild(texto);

    } catch (error) {
        alert('No se pudo obtener la ubicación: ' + error);
    }
}
