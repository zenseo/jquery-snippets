(function($) {
// What does the pluginName plugin do?
$.fn.pluginName = function(options) {
 
  if (!this.length) { return this; }
 
  var opts = $.extend(true, {}, $.fn.pluginName.defaults, options);
 
  this.each(function() {
    var $this = $(this);
 
  });
 
  return this;
};
 
// default options
$.fn.pluginName.defaults = {
  defaultOne: true,
  defaultTwo: false,
  defaultThree: 'yay!'
};
})(jQuery);
