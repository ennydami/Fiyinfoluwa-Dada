document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Sticky Header Shadow (Kept for consistency)
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        // Keeping the box shadow consistent for the dark theme
        if (window.scrollY > 50) { 
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.7)';
        } else {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.7)'; 
        }
    });

    // 3. SCROLL REVEAL ANIMATION
    const sections = document.querySelectorAll('section:not(#hero)');

    const observerOptions = {
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('hidden-section'); // Add initial class to hide
        sectionObserver.observe(section);
    });
});