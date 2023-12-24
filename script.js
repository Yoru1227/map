function geoFindMe() {
    const status = document.getElementById("status");
    const mapLink = document.getElementById("map-link");

    mapLink.href = "";
    mapLink.textContent = "";

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = "";
        // mapLink.href = `https://www.google.com/maps/place/${latitude}/${longitude}`;
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }

    function error() {
        status.textContent = "Unable to retrieve your location";
    }

    const options = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
    };

    // 偵測瀏覽器是否支援Geolocation API
    if (!navigator.geolocation) {
        status.textContent = "Geolocation is not supported by your browser";
    } else {
        status.textContent = "Locating…";
        const watchID = navigator.geolocation.watchPosition(success, error);
        // navigator.geolocation.getCurrentPosition(success, error);
    }
}

geoFindMe();