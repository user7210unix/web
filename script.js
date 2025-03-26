// Minimal interaction (just a subtle fade-in on scroll)
const animateElements = document.querySelectorAll('.project-card, .intro, .about');

function checkScroll() {
    animateElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight * 0.9) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Initial styles for animation
document.querySelectorAll('.project-card, .intro, .about').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 200ms ease-out, transform 200ms ease-out';
});
