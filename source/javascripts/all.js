//= require foundation/foundation

//= require foundation/foundation.alerts
//= require foundation/foundation.clearing
//= require foundation/foundation.cookie
//= require foundation/foundation.dropdown
//= require foundation/foundation.forms
//= require foundation/foundation.joyride
//= require foundation/foundation.magellan
//= require foundation/foundation.orbit
//= require foundation/foundation.placeholder
//= require foundation/foundation.reveal
//= require foundation/foundation.section
//= require foundation/foundation.tooltips
//= require foundation/foundation.topbar

//= require script

$(function() {
  $('.scrollTo, .nav-bar a').on('click', function(e) {
      e.preventDefault();
      var $target = $(this.hash), target = this.hash;
      Foundation.lib_methods.scrollTo($(window), $($(e.currentTarget).attr('href')).offset().top, 200);
  });
});