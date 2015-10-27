/**
 * Handles Mobile nav menu
 */

(function($) {
  $(document).ready(function() {
    $('#header-navigation').addClass('closed');
    $('.mobile-control').click(function(e) {
      $('#header-navigation').toggleClass('open closed');
    })
  });
})(jQuery);