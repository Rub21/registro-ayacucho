
$(document).on('ready',function () {
	// initialize the map on the "map" div
	var map = new L.Map('map');
	// create a CloudMade tile layer with style #997 (or use other provider of your choice
	var cloudmade = new L.TileLayer('http://a.tiles.mapbox.com/v3/ruben.mapa_seguridadciudadana/{z}/{x}/{y}.png', {
    attribution: '---',minZoom: 14, maxZoom: 19
});

// add the CloudMade layer to the map set the view to a given center and zoom
map.addLayer(cloudmade).setView(new L.LatLng(-13.1641, -74.2210), 15);
map.on('click', onMapClick);
var popup = new L.Popup();
function onMapClick(e) {
    var latlngStr = '(' + e.latlng.lat.toFixed(5) + ', ' + e.latlng.lng.toFixed(5) + ')';
	latlngStr="<h3>"+latlngStr+"</h3>";
    popup.setLatLng(e.latlng);
    popup.setContent("<h3>Cordenadas</h3>" + latlngStr);
    map.openPopup(popup);
	$('#entry_5').attr('value',  e.latlng.lat.toFixed(5));
    $('#entry_6').attr('value',  e.latlng.lng.toFixed(5));
}

/*function passdata()
{
	var latitud= document.getElementById("lat");
	var longitud= document.getElementById("lon");
location.href="https://spreadsheets.google.com/viewform?formkey=dEhMaWJESFJSS3VKeXhGWW5GZlpqQXc6MQ&entry_3="+latitud.innerHTML+"&entry_4="+longitud.innerHTML;
}
*/

});
