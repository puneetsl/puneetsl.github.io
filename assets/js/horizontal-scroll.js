document.addEventListener('DOMContentLoaded', function () {
    // Function to scroll the container
    function scroll(container, direction) {
        const scrollAmount = container.offsetWidth * 0.8;
        const currentScroll = container.scrollLeft;
        const targetScroll = direction === 'next'
            ? currentScroll + scrollAmount
            : currentScroll - scrollAmount;

        container.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    }

    // Add click handlers to all navigation buttons
    document.querySelectorAll('.scroll-nav').forEach(nav => {
        nav.addEventListener('click', function () {
            const container = this.closest('.scroll-section').querySelector('.scroll-container');
            const direction = this.classList.contains('next') ? 'next' : 'prev';
            scroll(container, direction);
        });
    });

    // Show/hide navigation arrows based on scroll position
    document.querySelectorAll('.scroll-container').forEach(container => {
        container.addEventListener('scroll', function () {
            const section = this.closest('.scroll-section');
            const prevNav = section.querySelector('.scroll-nav.prev');
            const nextNav = section.querySelector('.scroll-nav.next');

            // Show/hide prev button
            if (this.scrollLeft > 0) {
                prevNav.style.opacity = '1';
            } else {
                prevNav.style.opacity = '0';
            }

            // Show/hide next button
            if (this.scrollLeft + this.offsetWidth >= this.scrollWidth - 10) {
                nextNav.style.opacity = '0';
            } else {
                nextNav.style.opacity = '1';
            }
        });

        // Trigger scroll event on load to set initial arrow states
        container.dispatchEvent(new Event('scroll'));
    });
}); 