async function obtenerUbicacion() {
    try {      
        // Redireccionar a la página cartaamor.html
        window.location.href = 'pages/cartaamor.html';

    } catch (error) {
        alert('No se pudo obtener la ubicación: ' + error.message);
    }
}
function irAPagina() {
    window.location.href = 'pages/mapa_y.html';
}