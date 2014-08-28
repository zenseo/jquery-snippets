var loading = false;
$(window).scroll(function(){
	if((($(window).scrollTop()+$(window).height())+250)>=$(document).height()){
		if(loading == false){
			loading = true;
			$('#loadingbar').css("display","block");
			$.get("load.php?start="+$('#loaded_max').val(), function(loaded){
				$('body').append(loaded);
				$('#loaded_max').val(parseInt($('#loaded_max').val())+50);
				$('#loadingbar').css("display","none");
				loading = false;
			});
		}
	}
});

$(document).ready(function() {
	$('#loaded_max').val(50);
});
