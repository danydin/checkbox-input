// var to hold our darkMode id input
const querySelectorDarkMode = document.getElementById('input-dark-mode-bg');

// event listener on change of the input from above -> toggle the class of dark-mode on the body element
querySelectorDarkMode.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});