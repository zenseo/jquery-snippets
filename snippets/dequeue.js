$( "button" ).click(function() {
  $( "div" )
    .animate({ left: '+=200px' }, 2000 )
    .animate({ top: '0px' }, 600 )
    .queue(function() {
      $( this ).toggleClass( "red" );
      $.dequeue( this );
    })
    .animate({ left:'10px', top:'30px' }, 700 );
});
