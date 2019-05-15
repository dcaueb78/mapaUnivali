function darkness() {
    let map = document.getElementById("map");
    if (map.classList == "darkmap") {
        map.classList = "whitemap";
    } else {
        map.classList = "darkmap";
    }
}

var elemento = document.createElement('div')
elemento.className = 'marker-rounded';
var popup = new mapboxgl.Popup({ offset: 25 })
    .setText('Biblioteca Univali.');

var marker = new mapboxgl.Marker(elemento)
    .setLngLat([-48.6628,-26.9147])
    .setPopup(popup) // sets a popup on this marker
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