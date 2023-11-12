let darkMode = false;

document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    darkMode = !darkMode;

    if (darkMode) {
        document.body.classList.add('dark');
        document.getElementById('toggle-dark-mode').textContent = 'Light Mode';
        document.getElementById('toggle-dark-mode').style.backgroundColor = '#FFFFFF';
        document.getElementById('toggle-dark-mode').style.color = '#4CAF50';
        document.getElementById('toggle-dark-mode').style.border = '1px solid #000000';
    } else {
        document.body.classList.remove('dark');
        document.getElementById('toggle-dark-mode').textContent = 'Dark Mode';
        document.getElementById('toggle-dark-mode').style.backgroundColor = '#000000';
        document.getElementById('toggle-dark-mode').style.color = '#4CAF50';
        document.getElementById('toggle-dark-mode').style.border = '1px solid #FFFFFF';
    }
});