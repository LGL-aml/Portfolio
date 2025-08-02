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

    // Close menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            menuButton.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when scrolling
    window.addEventListener('scroll', () => {
        if (mobileNav.classList.contains('active')) {
            menuButton.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Form Submission
    const form = document.querySelector('form[name="submit-to-google-sheet"]');
    const successPopup = document.getElementById('successPopup');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.classList.add('loading');
        
        // Simulate form submission (replace with actual form submission)
        setTimeout(() => {
            submitButton.classList.remove('loading');
            successPopup.classList.add('show');
            form.reset();
            
            setTimeout(() => {
                successPopup.classList.remove('show');
            }, 3000);
        }, 2000);
    });
});