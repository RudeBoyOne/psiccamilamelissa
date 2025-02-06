const setClassesInBodyElement = () => {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('d-flex', 'flex-column', 'min-vh-100');
}

setClassesInBodyElement();

const getOrCreateMainElement = () => {
    let main = document.getElementById('main');
    if (!main) {
        main = document.createElement('main');
        main.id = 'main';
        const footer = document.body.lastElementChild;
        if (footer) {
            document.body.insertBefore(main, footer);
        }
    }
    main.classList.add('d-flex', 'container', 'flex-grow-1', 'p-0');
    return main;
};

export default getOrCreateMainElement;