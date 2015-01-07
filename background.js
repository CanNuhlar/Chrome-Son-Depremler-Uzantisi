var count = 0;

setInterval(function() {	
		$.ajax({
                    url: "http://qrderapp.com/mess/index.php",
                    dataType: "text",
					cache: true,
					processData: false,
                    success: function(data) {
                        var json = $.parseJSON(data);
						console.log("parse done!");
						if(localStorage.lasttime && localStorage.lasttime !== json[0].time){
							//chrome.browserAction.setBadgeBackgroundColor({color:[190, 190, 190, 230]});
							count = count + 1;
							chrome.browserAction.setBadgeText({text:""+count});
							console.log("new!");}
					localStorage.lasttime = json[0].time;}
                });
	},60000);