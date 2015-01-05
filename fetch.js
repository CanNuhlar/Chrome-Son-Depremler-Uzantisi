     var cssLink = $("<link rel='stylesheet' type='text/css' href='style.css'>");
			$.ajax({
                    url: "http://qrderapp.com/mess/index.php",
                    dataType: "text",
                    success: function(data) {
                        var json = $.parseJSON(data);
						$.each(json,function(i,item){
		document.write("<table style='width:100%;'>");
		document.write("<tr><td id='location'>"+item.location+"</td><td id='ml'>Büyüklük: <span class='a"+i+"'>"+item.ml+"</span></td><td rowspan='2'>"+"<a target='_blank' href='http://maps.google.com/maps?z=14&t=h&q=loc:"+item.latitude+"+"+item.longitude+"'>Haritada Göster</a>"+"</td></tr>");
		document.write("<tr><td id='date'>Tarih: "+item.date+" / Saat: "+item.time+"</td><td id='depth'>Derinlik: "+item.depth+" km</td></tr>");
		document.write("</table>");
		$("head").append(cssLink); 
		document.write('<div id=reload><img src="refresh.png" width="24" height="auto" class="button"/><p style="position:relative;font-size:12px;bottom:12px;">Babam Sağolsun :)</p></div>');
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
		$("span.a"+i+"").css('color', 'green');
	}
		else{
		}
    });
                    }
                });