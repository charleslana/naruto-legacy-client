import { getLanguage } from '../languages/language.js';

export const sweetAlertError = (message) => {
    Swal.fire({
        icon: 'error',
        title: getLanguage().SWEET_ALERT_ERROR,
        text: message
    });
}