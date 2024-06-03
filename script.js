


async function obtenerUbicacion() {
    window.location.href = 'pages/cartaamor.html';
}

async function irAPagina() {
    window.location.href = 'pages/mapa_y.html';
}

async function mostrarMapaConDistancia() {
    // Coordenadas del punto fijo (por ejemplo, Times Square, NY)
    const puntoFijo = [ 19.508378912294813, -99.0372744770284];

    // Obtener la ubicación actual del usuario
    const posicion = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const puntoUsuario = [posicion.coords.latitude, posicion.coords.longitude];

    console.log(puntoUsuario)

    // Inicializar el mapa
    var map = L.map('map').setView(puntoUsuario, 13);

    // Agregar capa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Agregar marcador para el punto fijo
    L.marker(puntoFijo).addTo(map)
        .bindPopup('Punto Fijo')
        .openPopup();

    // Agregar marcador para la ubicación del usuario
    L.marker(puntoUsuario).addTo(map)
        .bindPopup('Tu Ubicación')
        .openPopup();

    // Calcular la distancia utilizando Turf.js
    const from = turf.point(puntoUsuario);
    const to = turf.point(puntoFijo);
    const options = { units: 'kilometers' };
    const distancia = turf.distance(from, to, options);

    // Mostrar la distancia en un popup
    L.popup()
        .setLatLng(puntoUsuario)
        .setContent('Distancia al Punto Fijo: ' + distancia.toFixed(2) + ' km')
        .openOn(map);
}
