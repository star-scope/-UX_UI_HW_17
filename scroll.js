var elem = document.getElementById("idcontent");
var elem2 = document.getElementById("hoodHub");
var elem3 = document.getElementById("idcontent");
var distance = 0;
var distance2 = elem2.clientHeight;

do {
    distance += elem.offsetTop;
    distance2 += elem2.offsetTop;
    elem = elem.offsetParent;
    elem2 = elem2.offsetParent;
} while (elem && elem2);

var distance3 = distance + elem3.clientHeight;
var windw = this;

$.fn.followTo = function (pos) {
    var $this = this,
        $window = $(windw);

    $window.scroll(function () {
        var spacer = distance2 - elem3.clientHeight;
        if (($window.scrollTop() + distance3) > pos) {
            $this.css({
                position: 'absolute',
                top: spacer
            });
        } else {
            $this.css({
                position: 'fixed',
                top: distance
            });
        }
    });
};


if (window.innerWidth > 1200) {
    $('#idcontent').followTo(distance2);
};