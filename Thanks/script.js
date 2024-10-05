// Select the toggle button
const toggleButton = document.getElementById('toggle-theme');

// Check for saved user preference and apply theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
}

// Event listener for the theme toggle button
toggleButton.addEventListener('click', () => {
    // Toggle between 'dark-mode' and 'light-mode'
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // Save the user's theme preference in local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', 'light-mode');
    }
});
