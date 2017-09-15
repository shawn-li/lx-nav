$(document).ready(function(){

	//lx-nav插件
	$(document).lxnav({
		navWidth:'90%'
	});

	//lx-slider插件
	$('#slider').lxslider({
		boxHeight:500,
		imgRatio:(5/7),
		pre_button:'.pre_button',
		next_button:'.next_button',
		stop_button:'.stop_button',
		changeType:'animate',
		animateTime:1000,
		autoFlag:false,
		changeEnd:function(){
			console.log("yoyoyo");
		}
	});

});