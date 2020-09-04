var elem = document.getElementById("idcontent");
var elem2 = document.getElementById("hoodHub");
var distance = 0;
var distance2 = elem2.clientHeight;
console.log(distance2);

do {
    distance += elem.offsetTop;
    distance2 += elem2.offsetTop;
    console.log(distance2);
    elem = elem.offsetParent;
    elem2 = elem2.offsetParent;
} while(elem && elem2);


var windw = this;

$.fn.followTo = function ( pos ) {
    var $this = this,
        $window = $(windw);
    
    $window.scroll(function(e){
        var spacer = pos + 200;
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'absolute',
                top: spacer
            });
        } else {
            $this.css({
                position: 'fixed',
                top: distance
            });
            console.log(distance);
        }
    });
};

$('#idcontent').followTo(distance2);
