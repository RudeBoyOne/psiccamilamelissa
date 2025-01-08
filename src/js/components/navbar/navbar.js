import * as bootstrap from 'bootstrap';
import './navbar.scss'
import logo from '../../../assets/images/logo.jpg'

const navbar = `
    <nav class="navbar navbar-expand-lg primary-color">
  <div class="container-fluid">
    <a class="navbar-brand" href="#home">
        <img src="${logo}" alt="Logo psicologa Camila Melissa de Souza" width="100px">
    </a>
    <button class="navbar-toggler btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <i class="bi bi-list"></i>
    </button>
    <div class="collapse navbar-collapse fs-5" id="navbarNav">
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
    </a>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body primary-color text-light fs-2 p-4">
    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
      <li class="nav-item">
        <a class="nav-link custom-hover-sidebar" aria-current="page" href="#home">Início</a>
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
headerElement.innerHTML = navbar;
document.body.insertAdjacentElement('afterbegin', headerElement);

document.querySelectorAll('.offcanvas-body .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const offcanvas = document.querySelector('#offcanvasNavbar');
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
        bsOffcanvas.hide();
    });
});