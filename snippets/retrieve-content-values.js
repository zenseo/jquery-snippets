 /////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////

//**Retrive the content values

 ///////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////



$("p").click(function () {
  var htmlstring = $(this).html(); // obtain html string from paragraph
  $(this).text(htmlstring); // overwrite paragraph text with new string value
});
	
var value1 = $('input#username').val(); // textfield input value
var value2 = $('input:checkbox:checked').val(); // get the value from a checked checkbox
var value3 = $('input:radio[name=bar]:checked').val(); // get the value from a set of radio buttons
