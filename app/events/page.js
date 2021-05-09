import config from '../config.js';
import { sweetAlertError } from '../components/sweetAlert.js';
import { getLanguage } from '../languages/language.js';
import events from './events.js';
import spinner from '../components/spinner.js';

export const pageStarted = (page = 'home') => {

    if (page === 'home' || page === 'login' || page === 'register') {
        return loadPageMain('mainNotLogged', page);
    }

    loadPageMain('mainLogged', page);
}

const loadPageMain = (mainPage, page) => {
    const main = document.querySelector('main');

    main.innerHTML = spinner();

    fetch(config[mainPage])
        .then(response => {
            if (!response.ok) {
                throw new Error(`${getLanguage().MAINTENANCE}, ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            main.innerHTML = data;

            loadPage(page);
        })
        .catch(error => {
            sweetAlertError(error.message);
        });
}

export const loadPage = (page) => {
    const section = document.querySelector('section');

    section.innerHTML = spinner();

    fetch(config[page])
        .then(response => {
            if (!response.ok) {
                throw new Error(`${getLanguage().MAINTENANCE}, ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            section.innerHTML = data;
            document.querySelector('main').setAttribute('page-now', page);

            const element = document.getElementById(page);
            if (element) {
                element.classList.add('active');
            }

            events();
        })
        .catch(error => {
            sweetAlertError(error.message);
        });
}