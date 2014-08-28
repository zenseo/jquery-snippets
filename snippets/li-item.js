$(document).ready(function(){
    $("li > a").each(function(index, value) {
        var link = $(this).attr("href");
        $(this).parent().bind("click", function() {
            location.href = link;
        });
    });
})
