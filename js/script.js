
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
});