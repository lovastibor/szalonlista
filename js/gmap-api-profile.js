

$(document).ready(function(){/* google maps -----------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {

  /* position Amsterdam */
  var latlng = new google.maps.LatLng(47.4812134, 19.1303031);

  var mapOptions = {
    center: latlng,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 13,
    styles: [
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#7043AA"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]


  };
  
  var marker = new google.maps.Marker({
    position: latlng,
    icon: 'img/marker.png',
    animation: google.maps.Animation.DROP
  });
  
  var map = new google.maps.Map(document.getElementById("map-canvas2"), mapOptions);
  marker.setMap(map);

};
/* end google maps -----------------------------------------------------*/
});