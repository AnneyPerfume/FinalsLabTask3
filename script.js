function switchTheme(value, element) {
    var themeLink = document.getElementById('theme');
    themeLink.href = value;

    var navLinks = document.querySelectorAll('nav ul li');
    navLinks.forEach(link => link.classList.remove('active'));

    navLinks.forEach(navLink => {
        if (navLink.textContent.trim() === element.textContent.trim()) {
            navLink.classList.add('active');
        }
    });
}