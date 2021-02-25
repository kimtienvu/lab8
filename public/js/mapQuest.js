function initMap() {
	L.mapquest.key = 'i90JQQYtYcbOr8lJt6f3AZz8MFpLim06';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
    center: [32.8785, -117.2359],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}
