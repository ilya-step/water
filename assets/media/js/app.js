// отправка формы
$(document).ready(function () {
	$("form").submit(function () {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize(),
		}).done(function () {
			document.location.href = "thanks.html";
			setTimeout(function () {
				// Выполнено
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});

new Swiper('[data-id="3-1"] .swiper', {
	slidesPerView: 'auto',
	// allowTouchMove: true,
	navigation: {
		prevEl: '[data-id="3-1"] .controls .prev',
		nextEl: '[data-id="3-1"] .controls .next'
	},
	// breakpoints: {
	// 	1200: {
	// 		allowTouchMove: false
	// 	}
	// }
});

new Swiper('[data-id="6-1"] .swiper', {
	slidesPerView: 'auto',
	scrollbar: {
		el: '[data-id="6-1"] .swiper-scrollbar',
		hide: false,
		dragSize: 120,
		draggable: true
	},
	breakpoints: {
		768: {
			slidesPerView: 4,
			spaceBetween: 20
		}
	}
})

let scroll = new SmoothScroll('a[data-smooth-scroll]', {
	speedAsDuration: true,
	updateURL: false,
	// offset: function () {
	// 	return -100;
	// }
});

$(function () {

	$('[data-fancybox]').fancybox({
		group: false,
		hash: false,
		buttons: ['close'],
		backFocus: false
	});

	$(document).on('click', '[data-product-callback]', function () {
		var control = $(this),
			product = control.data('product-callback');

		$('[data-product-input]').val(product);
		$('[data-product-text]').text(product);

		$.fancybox.open({
			src: '#product-popup',
			type: 'inline'
		}, {
			backFocus: false
		})
	})

	initProductsScripts();

	function initProductsScripts() {
		$('[data-fancybox][data-fancybox-product]').fancybox({
			group: false,
			hash: false,
			buttons: ['close'],
			backFocus: false
		});
	}

});
