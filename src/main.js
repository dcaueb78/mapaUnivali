function darkness() {
    let map = document.getElementById("map");
    if (map.classList == "darkmap mapboxgl-map") {
        map.classList = "whitemap mapboxgl-map";
    } else {
        map.classList = "darkmap mapboxgl-map";
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

// var blocos =  document.getElementById('blocos');
var mostrandoBlocos = 0;

$("#blocos").click(function(){
    if(mostrandoBlocos==0){
        mostrandoBlocos = 1;
        $(".bloco").css("display","block")
    }else{
        mostrandoBlocos = 0;
        $(".bloco").css("display","none");
    }
})

// blocos.onClick = function(){

// 	if(){

//     }
// }