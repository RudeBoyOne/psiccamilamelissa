import { addCardListeners } from "../pages/articles/articles";
import { activeAllTooltip, emailSending } from "../pages/contact/contact";
import getOrCreateMainElement from "../utils/mainUtils";
import pages from "./pages";


const insertTemplateHtmlInMainElement = (template) => {
    const main = getOrCreateMainElement();

    main.classList.add('fade-out');

    setTimeout(() => {
        main.innerHTML = template;

        let path = window.location.hash;

        switch (path) {
            case '#articles':
                addCardListeners();
                break;
            case '#contact':
                activeAllTooltip();
                emailSending();
                break;
            default:
                break;
        }

        main.classList.remove('fade-out');
        main.classList.add('fade-in');

        setTimeout(() => {
            main.classList.remove('fade-in');
        }, 300); // duração fade-in
    }, 300); // duração fade-out
};

const handleLocation = async () => {
    const path = window.location.hash;
    const page = pages[path];
    insertTemplateHtmlInMainElement(page);
};

window.onpopstate = handleLocation;

export default handleLocation;