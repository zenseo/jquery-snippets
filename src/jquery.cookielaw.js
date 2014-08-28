/**
 * jQuery Cookie Law
 * http://webtogether.ie
 * 
 * July 2013
 * 
 * @version 1.0
 * @author Abban Dunne http://webtogehter.ie
 * @license MIT
 * 
 */
;(function($, window, document, undefined)
{
    // Create the defaults once
    var pluginName = 'cookielaw';
    var defaults = {
        cookieName: 'eucookielaw',
        elementName: 'cookieMessage',
        elementClass: 'animated bounceInUp',
        buttonName: 'cookieAccept',
        buttonText: 'Hide',
        message: 'This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies.',
        backgroundColour: '#ddd',
        textColour: '#666',
        linkColour: '#2980b9',
        textAlign : 'center',
        padding: '1.5em',
        fontFamily: 'Georgia, "Times New Roman", Times, Serif'
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
            if(!this.getCookie(this.settings.cookieName))
            {
                //this.addStyles();
                $(this.element).prepend('<div id="' + this.settings.elementName +'" class="' + this.settings.elementClass +'">' + this.settings.message + ' <a id="' + this.settings.buttonName + '" href="#">' + this.settings.buttonText + '</a></div>');
                
                if(parseInt($().jquery.charAt(0)) >= 2)
                {
                    $('#' + this.settings.buttonName).one('click', { context : this }, this.hideBanner);
                }
                else
                {
                    $('#' + this.settings.buttonName).on('click', { context : this }, this.hideBanner);
                }
            }
        },

       /* addStyles:function()
        {
            $('head').append(
                '<style media="screen" type="text/css">' +
                    '#' + this.settings.elementName + '{' +
                        'background:' + this.settings.backgroundColour + ';' +
                        'color:' + this.settings.textColour + ';' +
                        'text-align:' + this.settings.textAlign + ';' +
                        'padding:' + this.settings.padding + ';' +
                        'font-family:' + this.settings.fontFamily + ';' +
                    '}' +
                    '#' + this.settings.buttonName + '{' +
                        'color:' + this.settings.linkColour + ';' +
                    '}' +
                '</style>'
            );
        },*/

        hideBanner:function(event)
        {
            var context = event.data.context;
            context.createCookie(context.settings.cookieName, true, 10*356);
            $('#' + context.settings.elementName).slideUp();
            return false;
        },

        createCookie:function(name, value, days)
        {
            if(days)
            {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else var expires = "";
            document.cookie = name + "=" + value + expires + "; path=/";
        },

        getCookie:function(c_name)
        {
            if (document.cookie.length > 0)
            {
                c_start = document.cookie.indexOf(c_name + "=");
                if (c_start != -1)
                {
                    c_start = c_start + c_name.length + 1;
                    c_end = document.cookie.indexOf(";", c_start);
                    if (c_end == -1)
                    {
                        c_end = document.cookie.length;
                    }
                    return unescape(document.cookie.substring(c_start, c_end));
                }
            }
            return "";
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