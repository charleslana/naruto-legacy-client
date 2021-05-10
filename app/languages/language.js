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
    toTop();
    home();
    login();
    register();
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

const toTop = () => {
    let element;

    element = document.querySelector('.btn-to-top');
    if (element) {
        element.innerHTML = getLanguage().GO_TO_TOP;
    }
}

const home = () => {
    let element;

    element = document.querySelector('#pageHome > h1');
    if (element) {
        element.innerHTML = getLanguage().HOME_TITLE;
    }

    element = document.querySelector('#pageHome > p');
    if (element) {
        element.innerHTML = getLanguage().HOME_DESCRIPTION;
    }
}

const login = () => {
    let element;

    element = document.querySelector('#pageLogin > h1');
    if (element) {
        element.innerHTML = getLanguage().LOGIN_TITLE;
    }

    element = document.querySelector('#pageLogin > form > div:nth-child(1) > label');
    if (element) {
        element.innerHTML = getLanguage().LOGIN_EMAIL;
    }

    element = document.querySelector('#pageLogin > form > div:nth-child(2) > label');
    if (element) {
        element.innerHTML = getLanguage().LOGIN_PASSWORD;
    }

    element = document.querySelector('#pageLogin > form > div:nth-child(3) > label');
    if (element) {
        element.innerHTML = getLanguage().LOGIN_CHECK;
    }

    element = document.querySelector('#pageLogin button');
    if (element) {
        element.innerHTML = getLanguage().LOGIN_BUTTON;
    }

    element = document.querySelector('#pageLogin p');
    if (element) {
        element.innerHTML = getLanguage().LOGIN_P;
    }

    element = document.querySelector('#pageLogin a');
    if (element) {
        element.innerHTML = getLanguage().LOGIN_A;
    }
}

const register = () => {
    let element;

    element = document.querySelector('#pageRegister h1');
    if (element) {
        element.innerHTML = getLanguage().REGISTER_TITLE;
    }

    element = document.querySelector('#pageRegister > p');
    if (element) {
        element.innerHTML = getLanguage().REGISTER_DESCRIPTION;
    }

    element = document.querySelector('#pageRegister > form > div:nth-child(1) > label');
    if (element) {
        element.innerHTML = getLanguage().REGISTER_NAME;
    }

    element = document.querySelector('#pageRegister > form > div:nth-child(2) > label');
    if (element) {
        element.innerHTML = getLanguage().REGISTER_EMAIL;
    }

    element = document.querySelector('#pageRegister > form > div:nth-child(3) > label');
    if (element) {
        element.innerHTML = getLanguage().REGISTER_PASSWORD;
    }

    element = document.querySelector('#pageRegister > form > div:nth-child(4) > label');
    if (element) {
        element.innerHTML = getLanguage().REGISTER_CONFIRM_PASSWORD;
    }

    element = document.querySelector('#pageRegister > form h4:nth-child(5)');
    if (element) {
        element.innerHTML = getLanguage().REGISTER_STYLE_NINJA_TITLE;
    }

    element = document.querySelector('#pageRegister > form p:nth-child(6)');
    if (element) {
        element.innerHTML = getLanguage().REGISTER_STYLE_NINJA_DESCRIPTION;
    }

    element = document.querySelector('#pageRegister > form h4:nth-child(8)');
    if (element) {
        element.innerHTML = getLanguage().REGISTER_CHARACTER_TITLE;
    }

    element = document.querySelector('#pageRegister > form p:nth-child(9)');
    if (element) {
        element.innerHTML = getLanguage().REGISTER_CHARACTER_DESCRIPTION;
    }

    element = document.querySelector('#pageRegister > form h4:nth-child(11)');
    if (element) {
        element.innerHTML = getLanguage().REGISTER_VILLAGE_TITLE;
    }

    element = document.querySelector('#pageRegister > form p:nth-child(12)');
    if (element) {
        element.innerHTML = getLanguage().REGISTER_VILLAGE_DESCRIPTION;
    }

    element = document.querySelector('#pageRegister button[type="submit"]');
    if (element) {
        element.innerHTML = getLanguage().REGISTER_BUTTON;
    }
}