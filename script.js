const cursor = document.querySelector('.custom-cursor');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Mobile Navigation Toggle
        const menuBtn = document.querySelector('.menu-btn');
        const navLinks = document.querySelector('.nav-links');

        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Fade In Animation on Scroll
        const fadeElements = document.querySelectorAll('.fade-in');

        const fadeInOnScroll = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', fadeInOnScroll);
        fadeInOnScroll(); // Initial check

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });