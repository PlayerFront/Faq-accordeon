// This is just example of clear JS, only for understanding how it works

document.addEventListener('DOMContentLoaded', function () {
    const triggers = document.querySelectorAll('[data-faq-trigger]');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const item = this.closest('[data-faq-item]');
            const icon = this.querySelector('[data-faq-icon]');
            const answer = item.querySelector('[data-faq-answer]');
            const isActive = item.classList.contains('is-active');

            item.classList.toggle('is-active');

            if (item.classList.contains('is-active')) {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }

            icon.src = item.classList.contains('is-active')
                ? 'assets/images/icon-minus.svg'
                : 'assets/images/icon-plus.svg';
        });
    });
});
