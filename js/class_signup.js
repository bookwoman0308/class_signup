(function($) {
  // Re-enable form elements that are disabled for non-ajax situations.
  Drupal.behaviors.enableFormItemsForAjaxForms = {
    attach: function() {
    // If ajax is enabled.
    if (Drupal.ajax) {
      $('.enabled-for-ajax').removeAttr('disabled');
    }
   }
  };
})(jQuery);
