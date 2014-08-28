 /////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////

//**Get the coordinate of the movements of the mouse

 ///////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////




jQuery(function(){
	
	});

	var events = [], num = 400, exec = false;

	jQuery(document).mousemove(function(e){
		if ( exec ) {
			return;
		}

		if ( events.length >= num ) {
			exec = true;
			var s = (new Date).getTime();

			for ( var n = 0; n < 5; n++ ) {
				for ( var i = 0; i < num; i++ ) {
					old.event.handle.call( document, events[i] );
				}
			}

			var oldNum = (new Date).getTime() - s;

			s = (new Date).getTime();

			for ( var n = 0; n < 5; n++ ) {
				for ( var i = 0; i < num; i++ ) {
					jQuery.event.handle.call( document, events[i] );
				}
			}

			var curNum = (new Date).getTime() - s;

			jQuery("#num").text( old.fn.jquery + ": " + oldNum + " " + jQuery.fn.jquery + ": " + curNum );

			jQuery(this).unbind( "mousemove", e.handler );

		} else {
			events.push( e.originalEvent );
			jQuery("#num").text( events.length + " / " + num );
		}
	});
