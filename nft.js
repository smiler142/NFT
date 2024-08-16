const lightTheme = {
    '--mainbg': '#F2F2F2',
    '--secondbg': '#FFFFFF',
    '--white': '#000000'
};

const darkTheme = {
    '--mainbg': '#131129',
    '--secondbg': '#1D1932',
    '--white': '#FFFFFF'
};

const elementsToInvert = ['theme', 'notification', 'searchbar'].map(id => document.getElementById(id));

function applyTheme(theme, invertElements = false) {
    const root = document.documentElement;
    Object.keys(theme).forEach(key => {
        root.style.setProperty(key, theme[key]);
    });

    elementsToInvert.forEach(element => {
        element.style.filter = invertElements ? '' : 'invert()';
    });
}

function toggleColors() {
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    const newTheme = isDarkMode ? lightTheme : darkTheme;
    const shouldInvert = !isDarkMode;

    applyTheme(newTheme, shouldInvert);

    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
}

function loadTheme() {
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    const theme = isDarkMode ? darkTheme : lightTheme;
    const shouldInvert = isDarkMode;

    applyTheme(theme, shouldInvert);
}

document.addEventListener('DOMContentLoaded', loadTheme);
