

function diz() {
    return "chegou";
}
const pages = {
    "": "",
    404: diz
};

const handleLocation = async () => {
    const path = window.location.hash;
    console.log(path);
    const page = pages[path];
    page();
};

window.onpopstate = handleLocation;
handleLocation();
