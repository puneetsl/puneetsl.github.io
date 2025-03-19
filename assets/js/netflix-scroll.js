document.addEventListener('DOMContentLoaded', function () {
    // Function to scroll the slider
    function scroll(slider, direction) {
        const scrollAmount = slider.offsetWidth * 0.8; // Scroll 80% of the viewport width
        const currentScroll = slider.scrollLeft;
        const targetScroll = direction === 'next'
            ? currentScroll + scrollAmount
            : currentScroll - scrollAmount;

        slider.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    }

    // Add click handlers to all navigation buttons
    document.querySelectorAll('.netflix-nav').forEach(nav => {
        nav.addEventListener('click', function () {
            const slider = this.closest('.netflix-row').querySelector('.netflix-slider');
            const direction = this.classList.contains('next') ? 'next' : 'prev';
            scroll(slider, direction);
        });
    });

    // Show/hide navigation arrows based on scroll position
    document.querySelectorAll('.netflix-slider').forEach(slider => {
        slider.addEventListener('scroll', function () {
            const row = this.closest('.netflix-row');
            const prevNav = row.querySelector('.netflix-nav.prev');
            const nextNav = row.querySelector('.netflix-nav.next');

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
        slider.dispatchEvent(new Event('scroll'));
    });
}); 