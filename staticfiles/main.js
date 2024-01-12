window.addEventListener('DOMContentLoaded', event => {

    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[data-scroll]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('data-scroll');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('#mainNav').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 75, // Adjust this value based on your layout
        });
    }

    // Highlight active navigation item
    const navItems = document.querySelectorAll('.nav-link[data-scroll]');
    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY + document.querySelector('#mainNav').offsetHeight;

        navItems.forEach(item => {
            const section = document.getElementById(item.getAttribute('data-scroll'));
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
