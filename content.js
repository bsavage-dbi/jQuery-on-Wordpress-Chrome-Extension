var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';

document.getElementsByTagName('head')[0].appendChild(script);

$("body").append("<div class = 'chrome-notification'><img src = 'https://www.sololearn.com/Icons/Courses/1082.png'><h2>jQuery Added!</h2></div>");
$(".chrome-notification h2").css({"height":$(".chrome-notification").height()});
$(".chrome-notification").fadeOut(2500);
