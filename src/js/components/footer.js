import '../../css/components/components.scss';

const footer = `
    <section class="d-flex flex-column gap-4 text-light container p-3">
        <section class="d-flex justify-content-center gap-4">
            <div>
                <a class="text-light icon-link icon-link-hover fs-2" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);"  href="https://www.instagram.com/psic.camilamelissa" target="_blank">
                    <i class="bi bi-instagram"></i>
                </a>
            </div>
            <div>
                <a class="text-light icon-link icon-link-hover fs-2" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);"  href="https://www.linkedin.com/in/camila-melissa-de-souza-a91413191" target="_blank" >
                    <i class="bi bi-linkedin"></i>
                </a>
            </div>
            <div>
                <a href="mailto:contato@psiccamilamelissa.com.br?subject=Agendamento%20de%20consulta&body=Olá,%20gostaria%20de%20marcar%20uma%20consulta." class="text-light icon-link icon-link-hover fs-2" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);">
                    <i class="bi bi-envelope"></i>
                </a>
            </div>
            <div>
                <a class="text-light icon-link icon-link-hover fs-2" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);" href="https://wa.me/5511959525369?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20terapia/análise." target="_blank" >
                    <i class="bi bi-whatsapp link-opacity-50-hover"></i>
                </a>
            </div>
        </section>
        <section class="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
            <div>
                <a class="text-light text-decoration-none custom-hover p-2 fs-4" href="/home">
                    Início
                </a>
            </div>
            <div>
                <a class="text-light text-decoration-none custom-hover p-2 fs-4" href="/about">
                    Sobre
                </a>
            </div>
            <div>
            <a class="text-light text-decoration-none custom-hover p-2 fs-4" href="/articles">
                    Artigos
                </a>
            </div>
            <div>
                <a class="text-light text-decoration-none custom-hover p-2 fs-4" href="/contact">
                    Contato
                </a>
            </div>
        </section>
        <section class="text-center d-flex justify-content-center flex-column">
            <small>psic.camilamelissa &copy; todos os direitos reservados </small>
            <small>feito por: 
                <a class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://lucasfncode.com.br" target="_blank">
                    Lucas Ferreira Nogueira
                </a>
                </small>
        </section>
    </section> `;

const footerElement = document.createElement('footer');
footerElement.innerHTML = footer;
footerElement.classList.add('primary-color', 'mt-auto');
document.body.insertAdjacentElement('beforeend', footerElement);

