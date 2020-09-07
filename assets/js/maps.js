function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: {
      "lat": "52.4689",
      "lng": "-2.148731",
    },
  });

  var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

  var markers = [{
      title: "Stourbridge Canal",
      lat: "52.4689",
      lng: "-2.148731",
      description:
        "To find out more about the Stourbridge Canal, click here!",
    },
    {
      title: "Dudley No.2 Path",
      lat: "52.51867",
      lng: "-2.07391",
      description:
        "To find out more about the Dudley No.2 Path, click here!",
    },
    {
      title: "Dudley No.1 Path",
      lat: "52.49341",
      lng: "-2.06903",
      description:
        "To find out more about the Dudley No.1 Path, click here!",
    },
  ];

  //   var markers = locations.map(function (location, i) {
  //     return new google.maps.Marker({
  //       position: location,
  //       label: labels[i % labels.length],
  //     });
  //   });

  var mapOptions = {
    center: new google.maps.LatLng(
      parseFloat(markers[0].lat),
      parseFloat(markers[0].lng)
    ),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  //Create and open InfoWindow.
  var infoWindow = new google.maps.InfoWindow();
  for (var i = 0; i < markers.length; i++) {
    var data = markers[i];
    var myLatlng = new google.maps.LatLng(data.lat, data.lng);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: data.title,
    });

    //Attach click event to the marker.
    (function (marker, data) {
      google.maps.event.addListener(marker, "click", function (e) {
        //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
        infoWindow.setContent(
          "<div style = 'width:200px;min-height:70px'>" + data.title + "</div>"
        );
        infoWindow.open(map, marker);
      });
    })(marker, data);
  }

  //   var markerCluster = new MarkerClusterer(map, markers, {
  //     imagePath:
  //       "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  //   });
}
