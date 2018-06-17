(function($){
    $(document).ready(function () {

    	function getRandomInt() {
    		var items = Array(1,3,5,7,9);
    		var item = items[Math.floor(Math.random()*items.length)];
			return item;
		}

    	setInterval(function() {
    		$('.slider__curve-circle').removeClass('slider__curve-circle_state_active');
    		$('.slider__curve-circle:nth-child(' + getRandomInt() + ')').addClass('slider__curve-circle_state_active');
    	}, 2000);

    	function AnimatePlaceholder(selector) {
            if ($(selector).find('input').val()) {
                $(selector).find('.form__placeholder').addClass('form__placeholder_state_active');
            }

            $(selector).find('.form__placeholder').click(function () {
                $(selector).find('input').focus();
            });

            $(selector).find('input').focus(function () {
                if (!$(this).val()) {
                    $(selector).find('.form__placeholder').addClass('form__placeholder_state_active');
                }
            });

            $(selector).find('input').blur(function () {
                if (!$(this).val()) {
                    $(selector).find('.form__placeholder').removeClass('form__placeholder_state_active');
                }
            });
        }

        AnimatePlaceholder($('.form__input-field_site'));
        AnimatePlaceholder($('.form__input-field_email'));
        AnimatePlaceholder($('.form__input-field_phone'));

        //mobile events
        if ($(window).width() < 768) {
            $('.hamburger').on('click', function() {
                $(this).toggleClass('hamburger_state_active');
                $('.header').toggleClass('header_state_active');
            });
        }

        $(window).resize(function() {
            if ($(window).width() < 768) {
                $('.hamburger').on('click', function() {
                    $(this).toggleClass('hamburger_state_active');
                    $('.header').toggleClass('header_state_active');
                });
            }
        });
    })
})(jQuery);