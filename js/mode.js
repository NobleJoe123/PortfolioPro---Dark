document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const lightModeStylesheetId = 'light-mode-stylesheet';

    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        enableLightMode();
    }

    themeToggle.addEventListener('click', function () {
        if (document.body.classList.contains('light-mode')) {
            disableLightMode();
        } else {
            enableLightMode();
        }
    });

    function enableLightMode() {
        document.body.classList.add('light-mode');
        themeIcon.classList.replace('bx-sun', 'bx-moon');
        localStorage.setItem('theme', 'light');

        // Dynamically load light.css
        if (!document.getElementById(lightModeStylesheetId)) {
            const link = document.createElement('link');
            link.id = lightModeStylesheetId;
            link.rel = 'stylesheet';
            link.href = 'css/light.css';
            document.head.appendChild(link);
        }

        replaceImages('light');
    }

    function disableLightMode() {
        document.body.classList.remove('light-mode');
        themeIcon.classList.replace('bx-moon', 'bx-sun');
        localStorage.setItem('theme', 'dark');

    
        const lightStylesheet = document.getElementById(lightModeStylesheetId);
        if (lightStylesheet) {
            lightStylesheet.remove();
        }

        
        replaceImages('dark');
    }

    function replaceImages(mode) {
        const images = document.querySelectorAll('[data-dark][data-light]');
        images.forEach((img) => {
            if (img.tagName === 'IMG') {
                img.src = mode === 'light' ? img.getAttribute('data-light') : img.getAttribute('data-dark');
            } else {
                img.style.backgroundImage =
                    mode === 'light'
                        ? `url(${img.getAttribute('data-light')})`
                        : `url(${img.getAttribute('data-dark')})`;
            }
        });
    }
});