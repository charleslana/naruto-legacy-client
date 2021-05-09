import english from './en/index.js';
import portuguese from './pt-br/index.js';

export const getLanguage = () => {
    const getStorage = localStorage.getItem('language');

    return getStorage === 'pt' || !getStorage ? portuguese : english;
}

export const language = () => {
    showLanguage();
    navNotLogged();
    footer();
    home();
}

const showLanguage = () => {
    const getStorage = localStorage.getItem('language');
    const iconLanguage = document.getElementById('iconLanguage');
    iconLanguage.classList.remove('language-pt', 'language-en');
    if (iconLanguage && getStorage) {
        iconLanguage.classList.add(`language-${getStorage}`);
    }
}

export const changeLanguage = () => {
    const languagePortuguese = document.getElementById('languagePortuguese');
    if (languagePortuguese) {
        languagePortuguese.addEventListener('click', () => {
            localStorage.setItem('language', 'pt');
            language();
        });
    }

    const languageEnglish = document.getElementById('languageEnglish');
    if (languageEnglish) {
        languageEnglish.addEventListener('click', () => {
            localStorage.setItem('language', 'en');
            language();
        });
    }
}

const navNotLogged = () => {
    let element;

    element = document.querySelector('#navNotLogged > li:nth-child(1) > a');
    if (element) {
        element.innerHTML = getLanguage().NAV_NOT_LOGGED_HOME;
    }

    element = document.querySelector('#navNotLogged > li:nth-child(2) > a');
    if (element) {
        element.innerHTML = getLanguage().NAV_NOT_LOGGED_LOGIN;
    }

    element = document.querySelector('#navNotLogged > li:nth-child(3) > a');
    if (element) {
        element.innerHTML = getLanguage().NAV_NOT_LOGGED_REGISTER;
    }
}

const footer = () => {
    let element;

    element = document.querySelector('footer > div');
    if (element) {
        element.innerHTML = getLanguage().FOOTER;
    }
}

const home = () => {
    let element;

    element = document.querySelector('#homeWelcome > h1');
    if (element) {
        element.innerHTML = getLanguage().HOME_TITLE;
    }

    element = document.querySelector('#homeWelcome > p');
    if (element) {
        element.innerHTML = getLanguage().HOME_DESCRIPTION;
    }
}