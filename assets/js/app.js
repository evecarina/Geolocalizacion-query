const appMaps = {
    map:function()
    {undefined},

    //funcion para inicializar la aplicación
    init : function(){
        appMaps.map = new google.maps.Map(document.getElementById("map"),{
        zoom: 10,
        center: {lat: -33.4724728, lng: -70.9100251},
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl:false
    });

    }

}

function initMap(){
    appMaps.init();
}