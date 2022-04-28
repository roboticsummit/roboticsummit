var dataDate = jQuery('#clock1651120039714136960').attr('data-date');

jQuery('#clock1651120039714136960').countdown(dataDate, function(event) {
  var clock = jQuery(this).html(event.strftime(''
    + '<div class="clock_bg"><div class="clock_counter">%w</div><div class="clock_label">weeks</div></div>'
    + '<div class="clock_bg"><div class="clock_counter">%d</div><div class="clock_label">days</div></div>'
    + '<div class="clock_bg"><div class="clock_counter">%H</div><div class="clock_label">hours</div></div>'
    + '<div class="clock_bg"><div class="clock_counter">%M</div><div class="clock_label">minutes</div></div>'
    + '<div class="clock_bg"><div class="clock_counter">%S</div><div class="clock_label">seconds</div></div>'));
});