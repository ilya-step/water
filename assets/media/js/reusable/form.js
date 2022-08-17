$(function () {

	$('input[data-telephone]').mask('+7 999 999 99 99', {autoclear: true});
	
	$(document).on('submit', 'form[data-ajax-form]', function (e) {
		e.preventDefault();
		
		var form = $(this),
			container = form.closest('[data-form]'),
			submit = form.find('[type="submit"]');
		
		container.css('min-height', container.outerHeight()).addClass('loading');
		
		submit.prop('disabled', true);
		
		$.post(
			window.location.href,
			form.serialize(),
			function (response) {
				var responseForm = $(response).find(`[data-form="${container.data('form')}"]`),
					data = responseForm.find(` > *`);
				
				if (responseForm.find('.thank').length && form.closest('.popup').length) {
					form.closest('.popup').addClass('success');
				}
				
				container.html(data);
				
				container.removeClass('loading');
			}, 'html'
		);
		
		return false;
	})
	
	// var bottomFormContainerSelector = '[data-bottom-form]';
	//
	// $(bottomFormContainerSelector + ' form').on('submit', function (e) {
	// 	e.preventDefault();
	//
	// 	var form = $(this),
	// 		container = form.closest(bottomFormContainerSelector),
	// 		containerIn = container.find('.in');
	//
	// 	containerIn.css('min-height', '');
	// 	containerIn.css('min-height', containerIn.outerHeight());
	//
	// 	container.addClass('loading');
	//
	// 	$.post(
	// 		window.location.href,
	// 		form.serialize(),
	// 		function (response) {
	// 			response = $(response).filter(bottomFormContainerSelector);
	//
	// 			setTimeout(function () {
	// 				container.find('.in').html($(response).find('.in > *'));
	//
	// 				container.removeClass('loading').addClass('success');
	// 			}, 200);
	// 		}, 'html'
	// 	)
	//
	// 	return false;
	// });

});
