function darkness() {
    let map = document.getElementById("map");
    if (map.classList == "darkmap") {
        map.classList = "whitemap";
    } else {
        map.classList = "darkmap";
    }
}

var elemento = document.createElement('div')
elemento.className = 'marker';

var marker = new mapboxgl.Marker(elemento)
    .setLngLat([-48.665681, -26.917887])
    .addTo(map)

// var nav = new mapboxgl.NavigationControl();
// map.addControl(nav, 'top-left');

// Add geolocate control to the map.

map.addControl(new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
trackUserLocation: true
}));