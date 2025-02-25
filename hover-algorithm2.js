// 2nd Element
(function() {
    // Init
    var container = document.getElementById("container2");
    var item = document.getElementById("item2");
    var border = document.getElementById("border2");

    //-----------------------------------------------------------------

    // Mouse
    var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(event) {
            var e = event || window.event;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
        },
    }
    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);

    //-----------------------------------------------------------------

    // Timing Factor
    var counter = 0;
    var updateRate = 2;
    var isTimeToUpdate = function() {
        return counter++ % updateRate === 0;
    };

    //-----------------------------------------------------------------

    // Event Handlers
    var onMouseEnterHandler = function(event) {
        update(event);
    };
    var onMouseLeaveHandler = function() {
        item.style = "";
        border.style = "";
    };
    var onMouseMoveHandler = function(event) {
        if (isTimeToUpdate()) {
            update(event);
        }
    };

    //-----------------------------------------------------------------

    // Update Animation
    var coordOpac;
    var update = function(evnt) {
        mouse.updatePosition(event);
        if (mouse.y < 0) {
            coordOpac = 0.00;
        }
        else {
        var coordOpac = mouse.y * 0.0075;
        }
        updateTransformStyle(
            (mouse.y / item.offsetHeight/2.5).toFixed(3),
            (mouse.x / item.offsetWidth/2.5).toFixed(3)
        );
        updateShadowStyle(
            (mouse.y * 0.8).toFixed(0), ((mouse.y + 100.0) * 1.275).toFixed(0),
            ((mouse.y + 100.0) * 1.275).toFixed(0),
            ((mouse.y + 100.0) * 1.275).toFixed(0),
            Math.abs(mouse.y * 0.005)
        );
        updateAmbientStyle(
            coordOpac
        );
    };

    var updateTransformStyle = function(x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        item.style.transform = style;
        item.style.webkitTransform = style;
        item.style.mozTransform = style;
        item.style.msTransform = style;
        item.style.oTransform = style;
    };
    var updateShadowStyle = function(ver, r, g, b, opac) {
        var styleShadow = "inset 0 " + ver + "px 100px rgb(" + r + ", "
        + g + ", " + b + ", " + opac + ")";
        item.style.boxShadow = styleShadow;
        item.style.webkitboxShadow = styleShadow;
        item.style.mozboxShadow = styleShadow;
        item.style.msboxShadow = styleShadow;
        item.style.oboxShadow = styleShadow;
    };
    var updateAmbientStyle = function(opac) {
        var styleAmbient = "inset 0px 1px 5px rgb(0, 0, 0, " + opac + ")"
        border.style.boxShadow = styleAmbient;
        border.style.webkitboxShadow = styleAmbient;
        border.style.mozboxShadow = styleAmbient;
        border.style.msboxShadow = styleAmbient;
        border.style.oboxShadow = styleAmbient;
    };

    //-----------------------------------------------------------------

    container.onmouseenter = onMouseEnterHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmousemove = onMouseMoveHandler;
})();

//refresh page on browser resize
$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 200);
});