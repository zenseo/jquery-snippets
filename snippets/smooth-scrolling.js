// HTML:
// <h1 id="anchor">Lorem Ipsum</h1>
// <p><a href="#anchor" class="topLink">Back to Top</a></p>
 
 
$(document).ready(function() {
 
	$("a.topLink").click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});
 
});
