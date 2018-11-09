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
    center: new google.maps.LatLng(robotix[0]),
    zoom: 15,
    mapTypeId: 'terrain'
  });
  
  // The marker, positioned at Uluru
  robotix.map((coords) => {
    new google.maps.Marker({position: coords, map: map});
  })
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}

