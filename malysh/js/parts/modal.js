function modal() {
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

}

module.exports = modal;