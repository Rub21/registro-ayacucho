
$(document).on('ready',function () {
	// Initialize the map on the "map" div
	var map = new L.Map('map');
	// Create a CloudMade tile layer with style #997 (or use other provider of your choice)
	var cloudmade = new L.TileLayer('http://a.tiles.mapbox.com/v3/ruben.mapa_seguridadciudadana/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, Imagery © <a href="http://mapbox.com/">MapBox</a>',minZoom: 14, maxZoom: 19
	});

	//Add the CloudMade layer to the map set the view to a given center and zoom
	map.addLayer(cloudmade).setView(new L.LatLng(-13.1641, -74.2210), 15);
	map.on('click', onMapClick);
	var popup = new L.Popup();
	
	function onMapClick(e) {
    var latlngStr = '(' + e.latlng.lat.toFixed(5) + ', ' + e.latlng.lng.toFixed(5) + ')';
	latlngStr="<h3>"+latlngStr+"</h3>";
    popup.setLatLng(e.latlng);
    popup.setContent("<h3>Cordenadas</h3>" + latlngStr);
    map.openPopup(popup);
    //Here put the coordinates in field Latitud dan Longitud
	$('#entry_5').attr('value',  e.latlng.lat.toFixed(5));
    $('#entry_6').attr('value',  e.latlng.lng.toFixed(5));
	}

});
