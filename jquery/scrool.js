// Smooth Scrolling
$(document).ready(function() {
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname) {
       var $target = $(this.hash);
       $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
       if ($target.length) {
           $target.ScrollTo(400);
           return false;
       }
    };
  });
});
