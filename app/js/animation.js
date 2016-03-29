 //Getting the parameters
 function getParam(name) {
     url = window.location.href.toLowerCase();
     name = name.replace(/[\[\]]/g, "\\$&").toLowerCase();
     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
         results = regex.exec(url);
     if (!results) return null;
     if (!results[2]) return '';
     return decodeURIComponent(results[2].replace(/\+/g, " "));
 }

 //Getting the text, speed & background
 var text = getParam('text'),
     speed = getParam('speed'),
     bg = getParam('bg'),
     bannerId = document.querySelector('#banner');
 bannerId.innerHTML = text;

 bannerId.setAttribute('style', 'animation-duration:' + speed + 's');

 bannerId.parentElement.style.background = bg;
