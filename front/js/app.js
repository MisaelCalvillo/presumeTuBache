var map;
var marcadores = [];
var currentZoom = 10;

let reportarBtn = document.getElementById('reportar')
reportarBtn.addEventListener('click', reportarBache);

async function fetchBaches() {
    return await axios.get('https://baches-app.herokuapp.com/api/v1/bache/').then(function(res) {
        return res.data
    }).catch(function(error) {
        console.error(error)
    })
}

async function creaBache(bache) {
    await axios.post('https://baches-app.herokuapp.com/api/v1/bache', {
        "latitud": bache.lat,
        "longitud": bache.lng,
        "comentario": "Primer bache de Xona"
    }).then((res) => {
        console.log("Bache creado", res.data);
    }).catch((error) => {
        console.error(error);
    })
}

function reportarBache() {
    let latitudInput = document.getElementById('lat').value;
    let longitudInput = document.getElementById('lng').value;
    let bache = {
        lat: latitudInput,
        lng: longitudInput
    }
    creaBache(bache);
    initMap();
  return await axios.post('https://baches-app.herokuapp.com/api/v1/bache',{
    "latitud" : bache.lat,
    "longitud" : bache.lng,
    "comentario" : bache.comentario
  }).then((res) => {
    console.log("Bache creado", res.data);
    return {success: true}
  }).catch((error) => {
    console.error(error);
    return {success: false}
  })
}

async function reportarBache() {
  let latitudInput = document.getElementById('lat').value;
  let longitudInput = document.getElementById('lng').value;
  let comentario = document.getElementById('comment').value;
  let bache = {
    lat: latitudInput,
    lng: longitudInput,
    "comentario": comentario
  }
  let crearBacheRes = await creaBache(bache);
  if (crearBacheRes.success) {
    initMap();
  }
}


async function initMap() {
    let baches = await fetchBaches();

    function initMap() {
        var robotix = [
            { lat: 19.277452, lng: -99.571786 },
            { lat: 18.277452, lng: -99.571786 },
            { lat: 17.277452, lng: -99.571786 },
            { lat: 16.277452, lng: -99.571786 },
            { lat: 15.277452, lng: -99.571786 }
        ];

  var robotix = [
    {lat: 19.277452, lng: -99.571786},
    {lat: 18.277452, lng: -99.571786},
    {lat: 17.277452, lng: -99.571786},
    {lat: 16.277452, lng: -99.571786},
    {lat: 15.277452, lng: -99.571786}
  ];
  
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng({lat: Number(baches[baches.length - 1].latitud), lng: Number(baches[baches.length - 1].longitud)}),
    zoom: currentZoom,
    mapTypeId: 'terrain'
  });

  google.maps.event.addListener(map,'center_changed', function() {
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('lng').value = map.getCenter().lng();
    currentZoom = map.getZoom();
  });
  $('<div/>').addClass('center_marker').appendTo(map.getDiv())
  
  for (var i = 0; i < baches.length; i++) {
    // Obten posiciones de los baches
    var marker = new google.maps.Marker({
      map: map,
      position: {lat: Number(baches[i].latitud), lng: Number(baches[i].longitud)},
      animation: google.maps.Animation.DROP,
      id: i
    });
    marcadores.push(marker);

        map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(robotix[0]),
            zoom: 15,
            mapTypeId: 'terrain'
        });

        for (var i = 0; i < baches.length; i++) {
            // Obten posiciones de los baches
            var marker = new google.maps.Marker({
                map: map,
                position: { lat: Number(baches[i].latitud), lng: Number(baches[i].longitud) },
                animation: google.maps.Animation.DROP,
                id: i
            });
            marcadores.push(marker);
        }
    }