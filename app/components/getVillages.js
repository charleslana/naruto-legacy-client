import villages from '../../static/villages.js';
import { getLanguage } from '../languages/language.js';

const getVillages = () => {
    const element = document.getElementById('getVillages');
    let elements = '';

    if (element) {
        villages.map(village => {
            elements += `
                <div class="col">
                    <label class="form-check-label" for="flexRadioVillage${village.value}">
                        <img src="../assets/img/villages/${village.image}.png" class="d-block mb-2 img-fluid" alt="${getLanguage()[village.name]}">
                        <input class="form-check-input" type="radio" name="flexRadioVillage" id="flexRadioVillage${village.value}"
                            value="${village.value}" required>
                        <span>${getLanguage()[village.name]}</span>
                    </label>
                </div>
            `;
        });

        element.innerHTML = elements;
    }
}

export default getVillages;