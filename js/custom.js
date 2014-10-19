 function onLoad() {
     window.onscroll = function() {
         var speed = 8.0;
         document.body.style.backgroundPosition = (-window.pageXOffset / speed) + "px " + (-window.pageYOffset / speed) + "px";
     }
 }