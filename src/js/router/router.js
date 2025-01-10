import getOrCreateMainElement from "../utils/mainUtils";
import pages from "./pages";

const insertTemplateHtmlInMainElement = (template) => {
    const main = getOrCreateMainElement();
    main.innerHTML = template;
}

const handleLocation = async () => {
    const path = window.location.hash;
    const page = pages[path];
    insertTemplateHtmlInMainElement(page);
};


window.onpopstate = handleLocation;

export default handleLocation;