import { addCardListeners } from "../pages/articles/articles";
import { showPdf } from "../pages/articles/displayPdf";
import { activeAllTooltip, emailSending } from "../pages/contact/contact";
import { eventButton } from "../pages/home";
import getOrCreateMainElement from "../utils/mainUtils";
import pages from "./pages";
import metaTagsConfig from "./metaTags";


const updateMetaTags = (metaTags) => {
    document.title = metaTags.title;

    const head = document.head;
    const metas = head.querySelectorAll('meta[name]:not([name="viewport"]), meta[charset]');
    metas.forEach(meta => {
        if (meta.name !== "viewport" && !meta.hasAttribute('charset')) {
            head.removeChild(meta);
        }
    });

    metaTags.meta.forEach(tag => {
        const meta = document.createElement('meta');
        meta.name = tag.name;
        meta.content = tag.content;
        head.appendChild(meta);
    });
};

function updateCanonicalForHome() {
    const currentURL = window.location.origin;
    const canonicalLink = document.querySelector("link[rel='canonical']");
    console.log(currentURL);

    if (!canonicalLink) {
        const newLink = document.createElement("link");
        newLink.setAttribute("rel", "canonical");
        newLink.setAttribute("href", currentURL);
        document.head.insertAdjacentElement("beforeend", newLink);
    } else {
        canonicalLink.setAttribute("href", currentURL);
    }
}

function removeCanonicalTag() {
    const canonicalLink = document.querySelector("link[rel='canonical']");
    if (canonicalLink) {
        canonicalLink.remove();
    }
}

const insertTemplateHtmlInMainElement = (template) => {
    const main = getOrCreateMainElement();

    main.classList.add('fade-out');

    setTimeout(() => {
        main.innerHTML = template;

        let path = window.location.pathname;
        const metaTags = metaTagsConfig[path] || metaTagsConfig['default'];

        switch (path) {
            case '/home':
            case '/':
                eventButton();
                updateCanonicalForHome();
                break;
            case '/articles':
                addCardListeners();
                break;
            case '/display_pdf':
                showPdf();
                break;
            case '/contact':
                activeAllTooltip();
                emailSending();
                break;
            default:
                break;
        }

        updateMetaTags(metaTags);

        main.classList.remove('fade-out');
        main.classList.add('fade-in');

        setTimeout(() => {
            main.classList.remove('fade-in');
        }, 300); // duração fade-in
    }, 300); // duração fade-out
};

const handleLocation = async () => {
    removeCanonicalTag();
    const path = window.location.pathname;
    const page = pages[path];
    insertTemplateHtmlInMainElement(page);
};

window.onpopstate = handleLocation;

window.addEventListener('popstate', handleLocation);
window.addEventListener('DOMContentLoaded', () => {
    handleLocation();

    document.body.addEventListener('click', event => {
        if (event.target.tagName === 'A' && event.target.href.startsWith(window.location.origin)) {
            event.preventDefault();
            const path = new URL(event.target.href).pathname;
            history.pushState(null, null, path);
            handleLocation();
        }
    });
});

export default handleLocation;