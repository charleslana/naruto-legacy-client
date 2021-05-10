import stylesNinja from '../../static/stylesNinja.js';
import { getLanguage } from '../languages/language.js';

const getStylesNinja = () => {
    const element = document.getElementById('getStylesNinja');
    let elements = '';
    let count = 0;

    if (element) {
        stylesNinja.map(styleNinja => {
            elements += `
                <input type="radio" class="btn-check" name="btnRadioStyleNinja" id="btnradio${styleNinja.value}" value="${styleNinja.value}" ${count == 0 ? 'checked' : ''}
                required>
                <label class="btn btn-outline-legacy" for="btnradio${styleNinja.value}">${getLanguage()[styleNinja.name]}</label>
            `;
            count++;
        });

        element.innerHTML = elements;
    }
}

export default getStylesNinja;