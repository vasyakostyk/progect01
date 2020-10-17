
$(function() {
    $('.carousel__inner').slick({
        speed:1200,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"> <img src="icons/left.svg"> </button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="icons/right.svg"> </button>'
        
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tabs_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlider(item) {
        $(item).each(function(i){
            $(this).on('click',function(e){
                e.preventDefault();
                $('.catalog-item__contant').eq(i).toggleClass('catalog-item__contant_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    }
    toggleSlider ('.catalog-item__link');
    toggleSlider ('.catalog-item__back');

        // Modal

        $('[data-modal=consultation]').on('click', function() {
            $('.overlay, #consultation').fadeIn('slow');
        });
        $('.modal__close').on('click', function() {
            $('.overlay, #consultation, #order, #thanks ').fadeOut('slow');
        });

        $('.button_mini').each(function(i) {
            $(this).on('click', function() {
                $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
                $('.overlay, #order').fadeIn('slow');
            });
        });

        //vilide

        function valideForms(form) {
            $(form).validate({
                rules:{
                    name: {
                        required: true,
                        minlength: 2
                      },
                    phone:"required",
                    email:{
                        required:true,
                        email: true
                    }
                },
                messages: {
                    name: {
                        required:"Пожалуйста, введите свое имя",
                        minlength: jQuery.validator.format("Введите {0} символа")
                    },
                    phone: "Пожалуйста, введите свой номер телефона",
                    email: {
                      required: "Пожалуйста, введите свою почту",
                      email: "Неправильно введен адрес почты"
                    }
                  }
            });
        }
        valideForms('#consultation-form');
        valideForms('#order form');
        valideForms('#consultation form');

        $('input[name=phone]').mask("+7 (999) 999-99-99");
});