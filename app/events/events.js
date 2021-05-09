import { language, changeLanguage } from '../languages/language.js';
import clickAction from './clickAction.js';

const events = () => {
    language();
    changeLanguage();

    clickAction();
}

export default events;