var mapBack = false;

var publicPoints = false;
var cafePoints = false;
var toiletPoints = false;
var b6 = false;

function darkness() {
    let map = document.getElementById("map");
    if (map.classList == "darkmap mapboxgl-map") {
        map.classList = "whitemap mapboxgl-map";
    } else {
        map.classList = "darkmap mapboxgl-map";
    }
}

function showPublicPoints() {
    if (publicPoints == false) {

        var elemento = document.createElement('div')
        elemento.className = 'marker-rounded biblioteca';
        var popup = new mapboxgl.Popup({ offset: 25 })
            .setText('Biblioteca Univali.');
        var biblioteca = new mapboxgl.Marker(elemento)
            .setLngLat([-48.6628, -26.9147])
            .setPopup(popup) // sets a popup on this marker
            .addTo(map)


        elemento = document.createElement('div')
        elemento.className = 'marker-rounded teatroAdelaideKonder';
        var popup = new mapboxgl.Popup({ offset: 25 })
            .setText('Teatro Adelaide Konder.');
        var teatro = new mapboxgl.Marker(elemento)
            .setLngLat([-48.6632, -26.9152])
            .setPopup(popup)
            .addTo(map)

        publicPoints = true;
    } else {
        $('.biblioteca').hide();
        $('.teatroAdelaideKonder').hide();
        publicPoints = false;
    }
}

function showToiletsPoints() {

    if (toiletPoints == false) {
        var elemento = document.createElement('div')
        elemento.className = 'marker-rounded toilet';
        var popup = new mapboxgl.Popup({ offset: 25 })
            .setText('Banheiros acessíveis.');

        var banheiro = new mapboxgl.Marker(elemento)
            .setLngLat([-48.6634, -26.9157])
            .setPopup(popup) // sets a popup on this marker
            .addTo(map)

        toiletPoints = true;
    } else {
        $('.toilet').hide();
        toiletPoints = false;
    }

}

function showCafePoints() {

    if (cafePoints == false) {
        var elemento = document.createElement('div')
        elemento.className = 'marker-rounded cafe';
        var popup = new mapboxgl.Popup({ offset: 25 })
            .setText('Lanchonete Dusk.');

        var dusk = new mapboxgl.Marker(elemento)
            .setLngLat([-48.6634, -26.9153])
            .setPopup(popup) // sets a popup on this marker
            .addTo(map)

        cafePoints = true;
    } else {
        $('.cafe').hide();
        publicPoints = false;
    }
}


function showB6() {
    if (b6 == false) {
        var elemento = document.createElement('div')
        elemento.className = 'marker';
        var popup = new mapboxgl.Popup({ offset: 25 })
            .setText('Sala 121.');

        var b6121 = new mapboxgl.Marker(elemento)
            .setLngLat([-48.6629, -26.9151])
            .setPopup(popup) // sets a popup on this marker
            .addTo(map)


        elemento = document.createElement('div')
        elemento.className = 'marker';
        popup = new mapboxgl.Popup({ offset: 25 })
            .setText('Sala 114 - Secretaria de pós-graduação.');

        var b6114 = new mapboxgl.Marker(elemento)
            .setLngLat([-48.6626, -26.9150])
            .setPopup(popup) // sets a popup on this marker
            .addTo(map)

        b6 = true;
    } else {
        $('.marker').hide();
        b6 = false;
    }
}

//EXCLUIR
//$('.toilet').hide()


// var nav = new mapboxgl.NavigationControl();
// map.addControl(nav, 'top-left');




// Add fullscreen control to the map.
map.addControl(new mapboxgl.FullscreenControl({ container: document.querySelector('body') }), 'top-left');

// Add geolocate control to the map.
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}), 'top-left');

// var blocos =  document.getElementById('blocos');
var mostrandoBlocos = 0;

$("#blocos").click(function () {
    if (mostrandoBlocos == 0) {
        mostrandoBlocos = 1;
        $(".bloco").css("display", "block")
    } else {
        mostrandoBlocos = 0;
        $(".bloco").css("display", "none");
    }
})

// Instance the tour
var tour = new Tour({
    backdrop: true,
    backdropContainer: 'body',
    // storage: window.localStorage,
    steps: [
        {
            element: ".btn",
            title: "Filtros",
            content: "Clique aqui para acessar os filtros do Mapa"
        },
        {
            element: ".mapboxgl-ctrl-fullscreen",
            title: "Localização",
            content: "Clique aqui para deixar em tela cheia."
        },
        {
            element: ".mapboxgl-ctrl-geolocate",
            title: "Localização",
            content: "Clique aqui para ativar a sua localização em tempo real. Botão também utilizado para câmera voltar a sua posição em tempo real."
        }


    ]
});
$('.mapboxgl-ctrl-bottom-left').hide();
$('.mapboxgl-ctrl-bottom-right').hide();
// Initialize the tour
tour.init();

// Start the tour
tour.start();

