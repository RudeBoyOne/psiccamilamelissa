import logo from '../../assets/images/logo-redimensionado.jpg';
import logoName from '../../assets/images/logo-nome.jpg';
import Offcanvas from 'bootstrap/js/dist/offcanvas';
import '../../css/components/components.scss';

const navbar = `
<nav class="navbar navbar-expand-lg primary-color container">
  <div class="container-fluid flex-nowrap">
    <div>
        <a class="navbar-brand m-0" href="/home">
            <img src="${logo}" alt="Logo psicologa Camila Melissa de Souza" width="100px">
        </a>
        <img src="${logoName}" alt="Logo psicologa Camila Melissa de Souza" class="w-50">
    </div>
    <button class="navbar-toggler btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <i class="bi bi-list"></i>
    </button>
    <div class="collapse navbar-collapse fs-4" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link text-light custom-hover" aria-current="page" href="/home">Início</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light custom-hover" href="/about">Sobre</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light custom-hover" href="/articles">Artigos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light custom-hover" href="/contact">Contato</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
  <div class="offcanvas-header primary-color text-light" data-bs-theme="dark">
    <a class="navbar-brand" href="#home">
        <img src="${logo}" alt="Logo psicologa Camila Melissa de Souza" width="100px">
        <img src="${logoName}" alt="Logo psicologa Camila Melissa de Souza" class="w-50">
    </a>
    <button type="button" class="btn btn-dark" data-bs-dismiss="offcanvas" aria-label="Close">
        <i class="bi bi-x-lg"></i>
    </button>
  </div>
  <div class="offcanvas-body primary-color text-light fs-2 p-4">
    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
      <li class="nav-item">
        <a class="nav-link custom-hover-sidebar" href="/home">Início</a>
      </li>
      <li class="nav-item">
        <a class="nav-link custom-hover-sidebar" href="/about">Sobre</a>
      </li>
      <li class="nav-item">
        <a class="nav-link custom-hover-sidebar" href="/articles">Artigos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link custom-hover-sidebar" href="/contact">Contato</a>
      </li>
    </ul>
  </div>
</div> `;

const headerElement = document.createElement('header');
headerElement.classList.add('primary-color')
headerElement.innerHTML = navbar;
document.body.insertAdjacentElement('afterbegin', headerElement);

document.querySelectorAll('.offcanvas-body .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const offcanvas = document.querySelector('#offcanvasNavbar');
        const bsOffcanvas = Offcanvas.getInstance(offcanvas);

        setTimeout(() => {
            bsOffcanvas.hide();
        }, 300);
    });
});

const activeNavLink = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pathUri = window.location.pathname || '/home';
    navLinks.forEach((link) => {
        link.classList.toggle('nav-active', link.getAttribute('href') === pathUri);

        link.removeEventListener('click', handleClick);
        if (link.getAttribute('data-bs-toggle') === '') {
            link.addEventListener('click', (event) => handleClick(event, navLinks));
        }
    });
};

const handleClick = (event, navLinks) => {
    navLinks.forEach((navLink) => {
        navLink.classList.remove('nav-active');
    });
    event.currentTarget.classList.add('nav-active');
};

document.addEventListener('DOMContentLoaded', activeNavLink);

const originalPushState = history.pushState;
const originalReplaceState = history.replaceState;

history.pushState = function (...args) {
    originalPushState.apply(history, args);
    window.dispatchEvent(new Event("pathnameChange"));
};

history.replaceState = function (...args) {
    originalReplaceState.apply(history, args);
    window.dispatchEvent(new Event("pathnameChange"));
};

window.addEventListener("pathnameChange", activeNavLink);