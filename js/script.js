var menu = false;

function openMenu()
{
	var screen = document.getElementById("screen");
	if(menu)
	{
		screen.style.left = "0px";
		menu = false;
	}
	else
	{
		screen.style.left = "260px";
		menu = true;
	}
}


var mapOptions = {
              center: new google.maps.LatLng(36.835451,10.143755),
              zoom: 16,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              disableDefaultUI: true,
              minZoom: 6
            };
map = new google.maps.Map(document.getElementById("map"), mapOptions);

var markerPosition = new google.maps.Marker({
       animation: google.maps.Animation.DROP,
           position: new google.maps.LatLng(36.835451,10.143755),
       map: map,
});








