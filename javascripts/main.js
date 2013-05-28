;(function ($, window, undefined) {
  'use strict';
  
  $.fn.toggleContent1 = function (options) {

  $('.button-content1').click(function() {
    $('.content-container').toggle('slow', function() {
      // Animation complete.
    });
  });
    
  };

})(jQuery, this);


