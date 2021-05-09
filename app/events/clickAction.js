import { recreateNode } from '../functions/functions.js';
import { loadPage } from '../events/page.js';

const clickAction = () => {
    removeAllClickAction();
    const clickActions = [].slice.call(document.querySelectorAll('.click-action'));

    clickActions.map(click => {
        click.addEventListener('click', function (event) {
            event.preventDefault();
            let page = this.href.replace(/^.*\//g, '');
            let pageNow = document.querySelector('main');
            let getAttributePageNow = pageNow.getAttribute('page-now');
            if (page !== getAttributePageNow) {
                removeClickActive();
                loadPage(page, this);
            }
        });
    });
}

const removeAllClickAction = () => {
    const clickActions = [].slice.call(document.querySelectorAll('.click-action'));
    clickActions.map((click) => {
        recreateNode(click);
    });
}

const removeClickActive = () => {
    const clickActions = [].slice.call(document.querySelectorAll('.click-action'));

    clickActions.map(click => {
        click.classList.remove('active');
    });
}

export default clickAction;