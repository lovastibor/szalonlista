

$(document).ready(function(){/* google maps -----------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {

 
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

 var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">My</h1>'+
      '<div id="bodyContent">'+
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis nulla pretium, ultrices ante in, dignissim ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam auctor, ex id vulputate lobortis, sapien arcu cursus metus, et gravida arcu quam nec nibh. Curabitur a luctus diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque tellus sapien, condimentum non euismod ac, congue vitae orci. Proin sed mauris quis sapien tincidunt varius. Ut feugiat diam enim, sed luctus lectus dapibus at. Mauris vel aliquet lacus, non varius augue. In sodales faucibus nisl a egestas. Pellentesque eu tincidunt sem. Donec eu ante nisl. Integer eu faucibus augue. Fusce mattis dolor ac finibus tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis dui ac ligula cursus tristique a a orci.</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  marker.setMap(map);

};

/* end google maps -----------------------------------------------------*/
});