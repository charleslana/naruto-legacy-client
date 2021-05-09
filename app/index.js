import { pageStarted } from './events/page.js';
import toTop from './components/toTop.js';

document.addEventListener('DOMContentLoaded', () => {
    pageStarted();
    toTop();
});