/** Google Sheet Script URL */
const scriptURL = 'https://script.google.com/macros/s/AKfycbyw79Zcv7Fen5_fDLjtNalsbAk6aCRuN-k3V-_63bxNjLkOC5VqRelotVtuK8Gx4iRxrA/exec';

document.addEventListener('DOMContentLoaded', function() {
    // Typing Animation
    const typingText = document.querySelector('.typing-text');
    const words = ["Welcome to my portfolio", "I'm a Back-End Developer", "I love coding"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isWaiting = false;

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        if (!isDeleting && charIndex === currentWord.length) {
            isWaiting = true;
            setTimeout(() => {
                isDeleting = true;
                isWaiting = false;
            }, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
        const typingSpeed = isDeleting ? 100 : isWaiting ? 3000 : 200;
        setTimeout(type, typingSpeed);
    }
    type();

    // Mobile Menu
    const menuButton = document.querySelector('.menu-btn');
    const mobileNav = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            menuButton.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    window.addEventListener('scroll', () => {
        if (mobileNav.classList.contains('active')) {
            menuButton.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Highlight active menu on scroll/click
    const sections = document.querySelectorAll('section');
    function updateActiveMenu() {
        let currentSection = '';
        const scrollY = window.scrollY + 120; // offset for fixed header
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        navItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', updateActiveMenu);
    navItems.forEach(link => {
        link.addEventListener('click', function(e) {
            // Smooth scroll
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                e.preventDefault();
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // offset for fixed header
                    behavior: 'smooth'
                });
            }
            // Highlight menu
            navItems.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Google Sheet Form Submission
    const form = document.querySelector('form[name="submit-to-google-sheet"]');
    const successPopup = document.getElementById('successPopup');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.classList.add('loading');
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    submitButton.classList.remove('loading');
                    successPopup.classList.add('show');
                    form.reset();
                    setTimeout(() => {
                        successPopup.classList.remove('show');
                    }, 3000);
                })
                .catch(error => {
                    submitButton.classList.remove('loading');
                    alert('There was an error. Please try again!');
                });
        });
    }

    // Close popup when clicking outside
    if (successPopup) {
        successPopup.addEventListener('click', (e) => {
            if (e.target === successPopup) {
                successPopup.classList.remove('show');
            }
        });
    }
});