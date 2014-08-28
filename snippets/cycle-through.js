$(function(){

	 var j = 0;
	 var delay = 2000; //millisecond delay between cycles
	 function cycleThru(){
	         var jmax = $("ul#cyclelist li").length -1;
	         $("ul#cyclelist li:eq(" + j + ")")
	                 .animate({"opacity" : "1"} ,400)
	                 .animate({"opacity" : "1"}, delay)
	                 .animate({"opacity" : "0"}, 400, function(){
	                         (j == jmax) ? j=0 : j++;
	                         cycleThru();
	                 });
	         };

	 cycleThru();

 });
