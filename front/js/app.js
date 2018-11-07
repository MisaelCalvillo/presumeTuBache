var map;

function initMap() {
  var robotix = [
    {lat: 19.277452, lng: -99.571786},
    {lat: 18.277452, lng: -99.571786},
    {lat: 17.277452, lng: -99.571786},
    {lat: 16.277452, lng: -99.571786},
    {lat: 15.277452, lng: -99.571786}
  ];
  
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(robotix),
    zoom: 15,
    mapTypeId: 'terrain'
  });
  
  robotix.map((coords) => {
    new google.maps.Marker({position: coords, map: map});
  })
}

// Loop through the results array and place a marker for each
// set of coordinates.
window.eqfeed_callback = function(results) {
  for (var i = 0; i < results.features.length; i++) {
    var coords = results.features[i].geometry.coordinates;
    var latLng = new google.maps.LatLng(coords[1],coords[0]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
}
