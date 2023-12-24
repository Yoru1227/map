let positionInfo = document.getElementById("positionInfo");
var map = L.map('map').setView([0, 0], 13);

// 初始化地圖
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 創建使用者位置標記
var userMarker = L.marker([0, 0]).addTo(map);

// 使用 watchPosition 持續追蹤使用者的位置
var watchId = navigator.geolocation.watchPosition(function (position) {
    var currentLat = position.coords.latitude;
    var currentLng = position.coords.longitude;

    // 更新地圖上的使用者位置標記
    userMarker.setLatLng([currentLat, currentLng]).update();
    map.setView([currentLat, currentLng], 13);
    // 在這裡處理新的座標
    console.log('新的座標:', currentLat, currentLng);
    positionInfo.textContent = '目前位置:' + currentLat + ',' + currentLng;

}, function (error) {
    console.error('無法獲取位置:', error);
});

// 監聽地圖移動事件
// map.on('moveend', function () {
//     var center = map.getCenter();
//     console.log('新的座標:', center.lat, center.lng);
//     // 在這裡處理新的座標
// });

// 可選：停止監聽使用者位置變化
// navigator.geolocation.clearWatch(watchId);