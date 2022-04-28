var grid = jQuery('#3310').masonry({
  itemSelector: '.scheduleday_wrapper',
  gutter: 40
});

jQuery('#3310 li .session_content_wrapper.expandable').on( 'click', function(e) {
	var targetID = jQuery(this).attr('data-expandid');
	
	jQuery(this).parent('li').find('#'+targetID).toggleClass('hide');
	jQuery(this).toggleClass('active');
	grid.masonry();
});
jQuery('#session_filter_3310 li a').on( 'click', function(e) {
	var targetFilter = jQuery(this).attr('data-filter');
	
	jQuery('#session_filter_3310 li a').removeClass('active');
	jQuery(this).addClass('active');
	
	if(targetFilter != '')
	{
		jQuery('#3310 ul.scheduleday_wrapper li').removeClass('hide');
		
		jQuery('#3310 ul.scheduleday_wrapper li').each(function(){
			if(!jQuery(this).hasClass(targetFilter) && !jQuery(this).hasClass('scheduleday_title'))
			{
				jQuery(this).addClass('hide');
			}
		});
	}
	else
	{
		jQuery('#3310 ul.scheduleday_wrapper li').removeClass('hide');
	}
	
	grid.masonry();
});

jQuery('#session_expand_3310').on( 'click', function(e) {
	jQuery('#3310 ul.scheduleday_wrapper li .session_content_wrapper.expandable').trigger('click');
	
	if(jQuery(this).hasClass('do_expand'))
	{
		jQuery(this).removeClass('do_expand');
		jQuery(this).addClass('do_collapse');
		
		jQuery(this).html('Collapse All -');
	}
	else
	{
		jQuery(this).addClass('do_expand');
		jQuery(this).removeClass('do_collapse');
		
		jQuery(this).html('Expand All +');
	}
	
	grid.masonry();
});
