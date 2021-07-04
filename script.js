var id, target, options;

function success(pos) {
    console.log(pos)
    var crd = pos.coords;

    if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
        console.log('Parabéns, você alcançou o destino');
        navigator.geolocation.clearWatch(id);
    }
}

function error(err) {
    console.warn('ERRO(' + err.code + '): ' + err.message);
}

target = {
    latitude: 0,
    longitude: 0
};

options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);