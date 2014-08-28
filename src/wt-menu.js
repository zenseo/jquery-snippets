/**
 * WT Menu
 * http://webtogether.ie
 *
 * Plugin to make navigation menus more responsive.
 * 
 * July 2013
 * 
 * @version 1
 * @author Abban Dunne http://webtogether.ie
 * @license MIT
 * 
 */
;(function($, window, document, undefined)
{
    // Create the defaults once
    var pluginName = "wtmenu",
        defaults = {
            propertyName: "value"
    };

    // The actual plugin constructor
    function Plugin(element, options)
    {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function()
        {
            //$('p.mobile-main-menu-text').fadeIn();
            $(this.element).prepend('<p class="mobile-main-menu-text">Main Menu</p>');
            $(this.element).addClass('wt-menu').append($('<div class="wt-nav-mobile"></div>'));
            $('li', this.element).has('ul').prepend('<span class="wt-nav-click"><span class="wt-nav-arrow"></span></span>');

            $('.wt-nav-mobile', this.element).on('click', function()
            {
                $(this).siblings('ul').toggleClass('open');
                return false;
            });

            $('.wt-nav-click').on('click', function()
            {
                $(this).siblings('ul').toggleClass('open');
                $(this).children('.wt-nav-arrow').toggleClass('wt-nav-rotate');
                return false;
            });
        }
    };

    $.fn[pluginName] = function(options)
    {
        return this.each(function()
        {
            if(!$.data(this, "plugin_" + pluginName))
            {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);