document.addEventListener('DOMContentLoaded', function () {
    // Typing animation for the hero section
    const typed = new Typed('#typed-text', {
        strings: ["Web Developer.", "Designer.", "Creator.", "Problem Solver."],
        typeSpeed: 70, // Speed of typing in milliseconds
        backSpeed: 50, // Speed of backspacing
        backDelay: 2000, // Pause before backspacing
        loop: true // Loop the animation
    });
});