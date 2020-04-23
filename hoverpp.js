/*var container = document.getElementById('container');
var profilePic = document.getElementById('profilePic');
        
var onMouseEnterHandler = function(event) {
  update(event);
};
var onMouseLeaveHandler = function() {
    profilePic.style = "";
};
var onMouseMoveHandler = function(event) {
  if (isTimeToUpdate()) {
    update(event);
  }
};

container.onmouseenter = onMouseEnterHandler;
container.onmouseleave = onMouseLeaveHandler;
container.onmousemove = onMouseMoveHandler;

var counter = 0;
var updateRate = 10;
var isTimeToUpdate = function() {
  return counter++ % updateRate === 0;
};

var container = document.getElementById('container');
var profilePic = document.getElementById('profilePic');

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

function findObjectCoords(mouseEvent) {
  var obj = document.getElementById("profilePic");
  var obj_left = 0;
  var obj_top = 0;
  var xpos;
  var ypos;

  while (obj.offsetParent) {
    obj_left += obj.offsetLeft;
    obj_top += obj.offsetTop;
    obj = obj.offsetParent;
  }
  
  //obj_left += obj.offsetLeft + obj.offsetWidth/2;
  //obj_top += obj.offsetTop + obj.offsetHeight/2;
  
  if (mouseEvent)
  {
    //FireFox
    xpos = mouseEvent.pageX;
    ypos = mouseEvent.pageY;
  }
  else
  {
    //IE
    xpos = window.event.x + document.body.scrollLeft - 2;
    ypos = window.event.y + document.body.scrollTop - 2;
  }
  xpos -= obj_left;
  ypos -= obj_top;

  document.getElementById("objectCoords").innerHTML = xpos + ", " + ypos;
}
document.getElementById("profilePic").onmousemove = findObjectCoords;

var update = function(event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / profilePic.offsetHeight/2).toFixed(2),
      (mouse.x / profilePic.offsetWidth/2).toFixed(2)
    );
  };
  
  var updateTransformStyle = function(x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    profilePic.style.transform = style;
    profilePic.style.webkitTransform = style;
    profilePic.style.mozTransform = style;
    profilePic.style.msTransform = style;
    profilePic.style.oTransform = style;
  };