import { Offcanvas } from 'bootstrap';
import './components.scss'
import logo from '../../assets/images/logo-redimensionado.jpg'
import logoName from '../../assets/images/logo-nome.jpg'

const navbar = `
    <nav class="navbar navbar-expand-lg primary-color container">
  <div class="container-fluid flex-nowrap">
    <div>
        <a class="navbar-brand m-0" href="#home">
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
          <a class="nav-link text-light custom-hover" aria-current="page" href="#home">Início</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light custom-hover" href="#about">Sobre</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light custom-hover" href="#articles">Artigos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light custom-hover" href="#contact">Contato</a>
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
        <a class="nav-link custom-hover-sidebar" href="#home">Início</a>
      </li>
      <li class="nav-item">
        <a class="nav-link custom-hover-sidebar" href="#about">Sobre</a>
      </li>
      <li class="nav-item">
        <a class="nav-link custom-hover-sidebar" href="#articles">Artigos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link custom-hover-sidebar" href="#contact">Contato</a>
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


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link')
    navLinks.forEach((link) => {
        let hashLink = link.getAttribute('href');
        let hashUri = window.location.hash;
        if (hashLink === hashUri) {
            link.classList.add('nav-active');
        }
        link.addEventListener('click', () => {
            navLinks.forEach((navLink) => {
                navLink.classList.remove('nav-active');
            })
            link.classList.add('nav-active');
        })

    })
})