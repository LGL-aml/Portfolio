// Typing Animation
const typingText = document.querySelector('.typing-text');
const words = ['Welcome to my Portfolio', 'I Build Web Applications', 'I Love Coding', 'I Create Solutions'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isWaiting = false;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Remove characters
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add characters
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Typing speed
    let typeSpeed = isDeleting ? 50 : 100;

    // If word is complete
    if (!isDeleting && charIndex === currentWord.length) {
        // Wait before starting to delete
        isWaiting = true;
        typeSpeed = 2000; // Wait 2s
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Wait 0.5s before typing next word
    }

    setTimeout(type, typeSpeed);
}

// Start the typing animation
setTimeout(type, 1000);

// Get all sections and navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

// Function to update active menu item based on scroll position
function updateActiveMenu() {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight/3)) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', updateActiveMenu);

// Smooth scroll to section when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
}); 

// Contact Form Handling

const scriptURL = 'https://script.google.com/macros/s/AKfycbyw79Zcv7Fen5_fDLjtNalsbAk6aCRuN-k3V-_63bxNjLkOC5VqRelotVtuK8Gx4iRxrA/exec'
const form = document.forms['submit-to-google-sheet']
const submitButton = form.querySelector('.submit-button');
const successPopup = document.getElementById('successPopup');

// Function to show popup
function showPopup() {
    successPopup.classList.add('show');
    // Hide popup after 3 seconds
    setTimeout(() => {
        successPopup.classList.remove('show');
    }, 3000);
}

// Close popup when clicking outside
successPopup.addEventListener('click', (e) => {
    if (e.target === successPopup) {
        successPopup.classList.remove('show');
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Add loading state
    submitButton.classList.add('loading');
    submitButton.disabled = true;

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            console.log('Success!', response);
            // Remove loading state
            submitButton.classList.remove('loading');
            submitButton.disabled = false;
            // Reset form
            form.reset();
            // Show success popup
            showPopup();
        })
        .catch(error => {
            console.error('Error!', error.message);
            // Remove loading state
            submitButton.classList.remove('loading');
            submitButton.disabled = false;
        });
});