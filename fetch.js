		
	function toRad(Value) {
    /** Converts numeric degrees to radians */
    return Value * Math.PI / 180;
}
	function calculateDistance(lat1,lon1,lat2,lon2){
var R = 3958.7558657440545; // Radius of earth in Miles 
    var dLat = toRad(lat2-lat1);
    var dLon = toRad(lon2-lon1); 
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
            Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
     d = R * c;
    return d;
	} 
	var distance;
	 var set = 0;
	 chrome.browserAction.setBadgeText({text:""});
	 var cssLink = $("<link rel='stylesheet' type='text/css' href='style.css'>");
			$.ajax({
                    url: "http://qrderapp.com/mess/index.php",
                    dataType: "text",
					cache: true,
					processData: false,
                    success: function(data) {
                        var json = $.parseJSON(data);
						$.each(json,function(i,item){
						  
	 function showPosition(position) {
	distance = calculateDistance(position.coords.latitude,position.coords.longitude,item.latitude,item.longitude);
	$('.distance'+i).append(parseInt(distance));
	}
		document.write("<table style='width:100%;'>");
		navigator.geolocation.getCurrentPosition(showPosition);
		document.write("<tr><td id='location'>"+item.location+"</td><td id='ml'><span class='a"+i+"'>Büyüklük: "+item.ml+"</span></td><td rowspan='2'>"+"<p>Depremin uzaklığı:<br><span class='distance"+i+"'></span> km"+"<a target='_blank' href='http://maps.google.com/maps?z=14&t=h&q=loc:"+item.latitude+"+"+item.longitude+"'><br>Haritada Göster</a></p></td></tr>");
		document.write("<tr><td id='date'>Tarih: "+item.date+"<br>Saat: "+item.time+"</td><td id='depth'>Derinlik: "+item.depth+" km</td></tr>");
		document.write("</table>");
		//alert(showPosition(position));	
		if(set!=1){
		$("head").append(cssLink); 
		document.write('<div id=reload><img src="refresh.png" width="24" height="auto" class="button"/><p style="position:relative;font-size:12px;bottom:10px;">Babam Sağolsun :)</p></div>');
		}
		set = 1;
		$( ".button" ).click(function() {
		location.reload();
});
		if(parseInt(item.ml)>=5){
		$("span.a"+i+"").css('color', 'red');
	}
		else if(parseInt(item.ml)>=4){
		$("span.a"+i+"").css('color', 'orange');
	}
		else if(parseInt(item.ml)>=3){
		$("span.a"+i+"").css('color', 'mediumseagreen');
	}
    });
                    }
                });