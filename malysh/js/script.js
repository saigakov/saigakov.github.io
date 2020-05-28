$(document).ready(function() {
    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
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

    //hide header
    const header = document.querySelector('header');

    document.onwheel = (event) => {
        /* console.log(event); */
        if (event.deltaY > 0 ) {
            header.classList.add('header_active');
        } else {
            /* header.classList.add('fadeOut'); */
            header.classList.remove('header_active');
        }
    };

    
        

    




});


