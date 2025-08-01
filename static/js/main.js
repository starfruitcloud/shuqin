(function ($) {
    'use strict';
    new WOW().init();
    //====================Start pre loader js======================// 
    $(window).on('load', function () {
        $('#js-preloader').addClass('loaded');

    });
    //====================End pre loader js======================// 


    //====================Start Sticky menu js======================// 
    $(window).on("scroll", function () {
        $(this).scrollTop() > 120 ? $(".navbar-area").addClass("is-sticky") : $(".navbar-area").removeClass("is-sticky");
    });
    $(".mean-menu").meanmenu({
        meanScreenWidth: "991"
    });
    //====================End Sticky menu js======================// 


    //=======================Start counter js========================//
    $(".odometer").appear(function (e) {
        $(".odometer").each(function () {
            var e = $(this).attr("data-count");
            $(this).html(e)
        })
    });
    //=======================End counter js========================//

    //=======================Start back to top btn js========================//
    $(window).on("scroll", function () {
        var e = $(window).scrollTop();
        e > 600 && $(".go-top").addClass("active"), e < 600 && $(".go-top").removeClass("active");
    });
    $(".go-top").on("click", function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 500)
    });
    //=======================End back to top btn js========================//

    //======================Start-Testimonial-slider-js=======================//

    var $testimonial = $('.testimonial-full');
    if ($testimonial.length > 0) {
        $('.testimonial-full').owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 8000,
            smartSpeed: 800,
            items: 2,
            dots: true,
            navText: ['<span class="testimonial-slider-nav"><i class="fas fa-chevron-left"></i></i></i></span>', '<span class="testimonial-slider-nav"><i class="fas fa-chevron-right"></i></span>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: 2,
                },
            }
        });
    }
    //======================End-Testimonial-slider-js=======================//

        //======================Start-partner-slider-js=======================//

        var $partner = $('.partner-full');
        if ($partner.length > 0) {
            $('.partner-full').owlCarousel({
                autoplay: true,
                loop: true,
                nav: false,
                autoplay: true,
                autoplayTimeout: 5000,
                smartSpeed: 700,
                items: 6,
                dots: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    400: {
                        items: 2,
                    },
                    600: {
                        items: 3,
                    },
                    800: {
                        items: 4,
                    },
                    1000: {
                        items: 5,
                    },
                    1100: {
                        items: 6,
                    },
                }
            });
        }
        //======================End-partner-slider-js=======================//

    //======================Start-hero-slider-js=======================//

    var $hero = $('.hero-full');
    if ($hero.length > 0) {
        $('.hero-full').owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 8000,
            smartSpeed: 800,
            items: 1,
            dots: true,
            navText: ['<span class="hero-slider-nav"><i class="fas fa-chevron-left"></i></i></i></span>', '<span class="hero-slider-nav"><i class="fas fa-chevron-right"></i></span>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
            }
        });
    }
    //======================End-hero-slider-js=======================//

    //==================== Start Countdown js=======================//


    var Countdown = {
        // Backbone-like structure
        $el: $('.countdown'),

        // Params
        countdown_interval: null,
        total_seconds: 0,

        // Initialize the countdown  
        init: function () {

            // DOM
            this.$ = {
                hours: this.$el.find('.bloc-time.hours .figure'),
                minutes: this.$el.find('.bloc-time.min .figure'),
                seconds: this.$el.find('.bloc-time.sec .figure')
            };

            // Init countdown values
            this.values = {
                hours: this.$.hours.parent().attr('data-init-value'),
                minutes: this.$.minutes.parent().attr('data-init-value'),
                seconds: this.$.seconds.parent().attr('data-init-value'),
            };

            // Initialize total seconds
            this.total_seconds = this.values.hours * 60 * 60 + (this.values.minutes * 60) + this.values.seconds;

            // Animate countdown to the end 
            this.count();
        },

        count: function () {

            var that = this,
                $hour_1 = this.$.hours.eq(0),
                $hour_2 = this.$.hours.eq(1),
                $min_1 = this.$.minutes.eq(0),
                $min_2 = this.$.minutes.eq(1),
                $sec_1 = this.$.seconds.eq(0),
                $sec_2 = this.$.seconds.eq(1);

            this.countdown_interval = setInterval(function () {

                if (that.total_seconds > 0) {

                    --that.values.seconds;

                    if (that.values.minutes >= 0 && that.values.seconds < 0) {

                        that.values.seconds = 59;
                        --that.values.minutes;
                    }

                    if (that.values.hours >= 0 && that.values.minutes < 0) {

                        that.values.minutes = 59;
                        --that.values.hours;
                    }

                    // Update DOM values
                    // Hours
                    that.checkHour(that.values.hours, $hour_1, $hour_2);

                    // Minutes
                    that.checkHour(that.values.minutes, $min_1, $min_2);

                    // Seconds
                    that.checkHour(that.values.seconds, $sec_1, $sec_2);

                    --that.total_seconds;
                }
                else {
                    clearInterval(that.countdown_interval);
                }
            }, 1000);
        },

        animateFigure: function ($el, value) {

            var that = this,
                $top = $el.find('.top'),
                $bottom = $el.find('.bottom'),
                $back_top = $el.find('.top-back'),
                $back_bottom = $el.find('.bottom-back');

            // Before we begin, change the back value
            $back_top.find('span').html(value);

            // Also change the back bottom value
            $back_bottom.find('span').html(value);

            // Then animate
            TweenMax.to($top, 0.8, {
                rotationX: '-180deg',
                transformPerspective: 300,
                ease: Quart.easeOut,
                onComplete: function () {

                    $top.html(value);

                    $bottom.html(value);

                    TweenMax.set($top, { rotationX: 0 });
                }
            });

            TweenMax.to($back_top, 0.8, {
                rotationX: 0,
                transformPerspective: 300,
                ease: Quart.easeOut,
                clearProps: 'all'
            });
        },

        checkHour: function (value, $el_1, $el_2) {

            var val_1 = value.toString().charAt(0),
                val_2 = value.toString().charAt(1),
                fig_1_value = $el_1.find('.top').html(),
                fig_2_value = $el_2.find('.top').html();

            if (value >= 10) {

                // Animate only if the figure has changed
                if (fig_1_value !== val_1) this.animateFigure($el_1, val_1);
                if (fig_2_value !== val_2) this.animateFigure($el_2, val_2);
            }
            else {

                // If we are under 10, replace first figure with 0
                if (fig_1_value !== '0') this.animateFigure($el_1, 0);
                if (fig_2_value !== val_1) this.animateFigure($el_2, val_1);
            }
        }
    };

    // Let's go !
    Countdown.init();

    //==================== End Countdown js=======================//

})(jQuery);