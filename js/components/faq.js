$(document).ready(function () {
    $('[data-faq-trigger]').on('click', function() {
        const $item = $(this).closest('[data-faq-item]');
        const $icon = $(this).find('data-faq-icon');
        const $answer = $item.find('[data-faq-answer]');

        $item.toggleClass('is-active');
        $answer.stop().slideToggle(200);

        const isActive = $item.hasClass('is-active');
        $icon.attr('src', 
            isActive
            ? 'assets/images/icon-minus.svg'
            : 'assets/images/icon-plus.svg'
        );
    });
});


