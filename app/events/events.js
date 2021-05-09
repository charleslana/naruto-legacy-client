import { language, changeLanguage } from '../languages/language.js';
import clickAction from './clickAction.js';
import { scrollToTop } from '../components/toTop.js';

const events = () => {
    language();
    changeLanguage();

    scrollToTop();

    clickAction();
}

export default events;