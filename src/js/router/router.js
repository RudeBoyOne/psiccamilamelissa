import { addCardListeners } from "../pages/articles/articles";
import getOrCreateMainElement from "../utils/mainUtils";
import pages from "./pages";


const insertTemplateHtmlInMainElement = (template) => {
    const main = getOrCreateMainElement();

    main.classList.add('fade-out');

    setTimeout(() => {
        main.innerHTML = template;
        
        if (window.location.hash === '#articles') {
            addCardListeners();            
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