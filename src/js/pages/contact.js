import { Tooltip } from 'bootstrap';
import avatar from '../../assets/images/avatar.jpg';
import emailIcon from '../../assets/images/icons/email.png';
import instagramIcon from '../../assets/images/icons/instagram.png';
import linkedinIcon from '../../assets/images/icons/linkedin.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import '../../css/pages/contact.scss';

const contact = `
     <section class="d-flex flex-column-reverse flex-lg-row align-items-center p-3">
        <section class="col-12 col-sm-6 pe-sm-3">
            <img src=${avatar}
                alt="avatar de uma psicóloga de 30 anos que usa óculos e tranças no cabelo" class="img-fluid rounded">
        </section>
        <section class="col-12 col-sm-6 contact-box">
            <ul class="nav nav-pills mb-3 row" id="pills-tab" role="tablist">
                <li class="nav-item col" role="presentation">
                    <button class="nav-link active w-100" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">Contatos</button>
                </li>
                <li class="nav-item col" role="presentation">
                    <button class="nav-link w-100" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">Mensagem</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active pt-3" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-action pt-3 pb-3">
                            <a class="link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover" href="#" data-bs-toggle="tooltip" data-bs-title="WhatsApp">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <img src=${whatsappIcon} alt="logo whatsapp"
                                            width="48px">
                                    </div>
                                    <div>
                                        <p class="m-0"> (11) 959525369 </p>
                                    </div>
                                </div>
                            </a>
                        
                        </li>
                        <li class="list-group-item list-group-item-action pt-3 pb-3">
                            <a class="link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover" href="https://www.instagram.com/psic.camilamelissa" target="_blank" data-bs-toggle="tooltip" data-bs-title="Instagram">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <img src=${instagramIcon} alt="logo instagam"
                                            width="48px">
                                    </div>
                                    <div>
                                        <p class="m-0"> @pisc.camilamelissa </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="list-group-item list-group-item-action pt-3 pb-3">
                            <a class="link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover" href="https://www.linkedin.com/in/camila-melissa-de-souza-a91413191" target="_blank" data-bs-toggle="tooltip" data-bs-title="Linkedin">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <img src=${linkedinIcon} alt="logo linkedin"
                                            width="48px">
                                    </div>
                                    <div>
                                        <p class="m-0"> in/camila-melissa-de-souza </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="list-group-item list-group-item-action pt-3 pb-3">
                            <a class="link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover" href="#" data-bs-toggle="tooltip" data-bs-title="E-mail">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <img src=${emailIcon} alt="logo email" width="48px">
                                    </div>
                                    <div>
                                        <p class="m-0">camila.melissa.souza@gmail.com </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="tab-pane fade pt-3" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <form class="d-flex flex-column gap-3 gap-lg-4">
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-text">Nome</span>
                                <input type="text" class="form-control" id="nome" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-text">
                                    <i class="bi bi-envelope-at-fill"></i>
                                </span>
                                <input type="email" class="form-control" id="email" placeholder="Seu E-mail" required>
                            </div>

                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-text">
                                    Mensagem
                                </span>
                                <textarea class="form-control noResize" id="mensagem" rows="5"></textarea>
                            </div>
                        </div>
                        <div class="d-grid">
                            <button type="submit" class="btn btn-dark">Enviar</button>
                        </div>
                </div>
            </div>
        </section>
    </section>
`;

const activeAllTooltip = () => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl, {
        trigger: 'hover'
    }));
}

export { contact, activeAllTooltip };