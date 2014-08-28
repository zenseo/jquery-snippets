/////////////////////////////////////////////////////////////////////
//*The cear queue effect *//
//////////////////////////////////////////////////////////////////////


$( "#start" ).on('click',function() {
  var myDiv = $( "div" );
  myDiv.show( "slow" );
  myDiv.animate({
    left:"+=200"
  }, 5000 );
 
  myDiv.queue(function() {
    var that = $( this );
    that.addClass( "newcolor" );
    that.dequeue();
  });
 
  myDiv.animate({
    left:"-=200"
  }, 1500 );
  myDiv.queue(function() {
    var that = $( this );
    that.removeClass( "newcolor" );
    that.dequeue();
  });
  myDiv.slideUp();
});
 
$( "#stop" ).on('click',function() {
  var myDiv = $( "div" );
  myDiv.clearQueue();
  myDiv.stop();
});
