$.preloadImages = function() {
       for(var i = 0; i<arguments.length; i++) {
               $("<img />").attr("src", arguments[i]);
       }
}

$(document).ready(function() {
       $.preloadImages("hoverimage1.jpg","hoverimage2.jpg");
});
