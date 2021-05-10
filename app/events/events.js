import { language, changeLanguage } from '../languages/language.js';
import clickAction from './clickAction.js';
import { scrollToTop } from '../components/toTop.js';
import getCharacters from '../components/getCharacters.js';
import getVillages from '../components/getVillages.js';
import getStylesNinja from '../components/getStylesNinja.js';

const events = () => {
    language();
    changeLanguage();

    scrollToTop();

    clickAction();

    getStylesNinja();
    getCharacters();
    getVillages();
}

export default events;