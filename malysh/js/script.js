$(document).ready(function() {

    //validation form
    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: false,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };
    
    
    
    validateForms('#callback-form');
    validateForms('#feed-form');
    validateForms('#order-form');

    
    $('input[name=phone]').mask("+7 (999) 999-99-99");
    
    $('form').submit(function(e) {
        e.preventDefault();
        let $form = $(this);
        if(! $form.valid()) return false; 
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
    
            $('form').trigger('reset');
        });
        return false;
    });

    //tabs
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog__content').eq(i).toggleClass('catalog__content_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //slider-reviews
    $('.slider-reviews__content').slick({
        speed:1200,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
                }
            
            },
            {
                breakpoint: 400,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
                }
            
            }
        ]
    });

    // Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
        $('.catalog__color').val('color');
        $('.catalog__lacquer').val('lacquer');
        $('.catalog__case').val('case');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('.modal__descr').text($('.catalog__title').eq(i).text());
            $('.modal__color').val($('.catalog__color').eq(i).val());
            $('.modal__lacquer').val($('.catalog__lacquer').eq(i).val());
            $('.modal__case').text($('.catalog__case').eq(i).val());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    
});



window.addEventListener('DOMContentLoaded', () => {

    //hamburger
    const list = document.querySelector('.header__list'),
        menuItem = document.querySelectorAll('.header__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        list.classList.toggle('header__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            list.classList.toggle('header__list_active');
        })
    });

    
        

    




});