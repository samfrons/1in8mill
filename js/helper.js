$(function() {
    app.init = function() {
        // ================
        // = SOME HELPERS =
        // ================
        //replaces a string in a position from the beginning
        String.prototype.replaceAt = function(index, cha) {
            return this.substr(0, index) + cha + this.substr(index+cha.length);
        }
        //replaces a string in a position from the end
        String.prototype.replaceFrom = function(index, cha) {
            return this.substring(0,this.length-index)+cha+this.substring(this.length-index+cha.length,this.length);
        }
        


        //********************//
        // additional helpers
        // modified 12/15/12
        // william kasel
        // original post
        // http://stackoverflow.com/questions/8853396/logical-operator-in-a-handlebars-js-if-conditional
        //
        Handlebars.registerHelper('ifCond',
        function(v1, v2, options) {
            if (v1 == v2) {
                return options.fn(this);
            }
            return options.inverse(this);
        });

        Handlebars.registerHelper("debug",
        function(optionalValue) {
            console.log("Current Context");
            console.log("====================");
            console.log(this);
            if (optionalValue) {
                console.log("Value");
                console.log("====================");
                console.log(optionalValue);
            }
            console.log("JSON",JSON.stringify(this))
        });
    
    };
    jQuery.fn.fitToParent = function()
    {
        this.each(function()
        {
        	var width  = $(this).width();
        	var height = $(this).height();
        	var parentWidth  = $(this).parent().width();
        	var parentHeight = $(this).parent().height();

        	if(width/parentWidth < height/parentHeight)
        	{
        		newWidth  = parentWidth;
        		newHeight = newWidth/width*height;
        	}
        	else
        	{
        		newHeight = parentHeight;
        		newWidth  = newHeight/height*width;
        	}
        	margin_top  = (parentHeight - newHeight) / 2;
        	margin_left = (parentWidth  - newWidth ) / 2;

        	$(this).css({'margin-top' :margin_top  + 'px',
        	             'margin-left':margin_left + 'px',
        	             'height'     :newHeight   + 'px',
        	             'width'      :newWidth    + 'px'});
        });
    };
})



