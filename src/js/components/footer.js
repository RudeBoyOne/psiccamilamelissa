import './components.scss'

const footer = `
    <section class="d-flex flex-column gap-4">
        <section class="d-flex justify-content-center gap-3">
            <div>
                <a class="text-light icon-link icon-link-hover fs-3" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);"  href="https://www.instagram.com/psic.camilamelissa" target="_blank">
                    <i class="bi bi-instagram"></i>
                </a>
            </div>
            <div>
                <a class="text-light icon-link icon-link-hover fs-3" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);"  href="https://www.linkedin.com/in/camila-melissa-de-souza-a91413191" target="_blank" >
                    <i class="bi bi-linkedin"></i>
                </a>
            </div>
            <div>
                <a class="text-light icon-link icon-link-hover fs-3" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);"  href="">
                    <i class="bi bi-envelope"></i>
                </a>
            </div>
            <div>
                <a class="text-light icon-link icon-link-hover fs-3" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);" href="">
                    <i class="bi bi-whatsapp link-opacity-50-hover"></i>
                </a>
            </div>
        </section>
        <section class="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
            <div>
                <a class="text-light text-decoration-none custom-hover p-2" href="#home">
                    Início
                </a>
            </div>
            <div>
                <a class="text-light text-decoration-none custom-hover p-2" href="#about">
                    Sobre
                </a>
            </div>
            <div>
                <a class="text-light text-decoration-none custom-hover p-2" href="#articles">
                    Artigos
                </a>
            </div>
            <div>
                <a class="text-light text-decoration-none custom-hover p-2" href="#contact">
                    Contato
                </a>
            </div>
        </section>
        <section class="text-center d-flex justify-content-center">
            <small>&copy; 2025 | feito por: <a class="text-decoration-none link-opacity-100-hover" href="https://lucasfncode.com.br" target="_blank">Lucas Ferreira Nogueira</a></small>
        </section>
    </section> `;

const footerElement = document.createElement('footer');
footerElement.innerHTML = footer;
footerElement.classList.add('primary-color', 'text-light')
document.body.insertAdjacentElement('beforeend', footerElement);

