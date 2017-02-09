//= require "jquery.min"
//= require "foundation"

$(document).foundation();

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-80535304-1', 'auto');
ga('send', 'pageview');

function fixedFooter() {
    var footer = $(".footer");
    height = footer.height();
    paddingTop = parseInt(footer.css('padding-top'), 10);
    paddingBottom = parseInt(footer.css('padding-bottom'), 0);
    totalHeight = (height + paddingTop + paddingBottom);
    footerPosition = footer.position();
    windowHeight = $(window).height();
    height = (windowHeight - footerPosition.top) - totalHeight;
    if (height > 0) {
      footer.css({
        'margin-top': (height) + 'px'
      });
    }
  }

  $(document).ready(function () {
    fixedFooter();

  });
  $(window).resize(function () {
    fixedFooter();
  });
