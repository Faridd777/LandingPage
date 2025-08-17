document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const is_active = question.classList.contains('active');

            // Tutup semua item FAQ yang sedang terbuka
            faqItems.forEach(faqItem => {
                faqItem.querySelector('.faq-question').classList.remove('active');
                faqItem.querySelector('.faq-answer').style.maxHeight = '0';
                faqItem.querySelector('.faq-answer').style.padding = '0 20px';
            });

            // Jika item ini belum aktif, buka
            if (!is_active) {
                question.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.padding = '20px 20px';
            }
        });
    });
});