import { Tooltip } from 'bootstrap';
import imgContact from '../../../assets/images/imgContact2.png';
import emailIcon from '../../../assets/images/icons/email.png';
import instagramIcon from '../../../assets/images/icons/instagram.png';
import linkedinIcon from '../../../assets/images/icons/linkedin.png';
import whatsappIcon from '../../../assets/images/icons/whatsapp.png';
import '../../../css/pages/contact.scss';
import sendEmail from '../../services/emailSendingService';
import toast from './contactToast';

const contact = `
     <section class="d-flex flex-column-reverse flex-lg-row align-items-center p-3 gap-3">
        <section class="col-12 col-lg-6">
            <img src=${imgContact}
                alt="avatar de uma psicóloga de 30 anos que usa óculos e tranças no cabelo" class="img-fluid rounded">
        </section>
        <section class="col-12 col-lg-6 d-flex flex-column justify-content-center">
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
                            <a class="link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover" href="https://wa.me/5511959525369?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20terapia/análise." target="_blank" data-bs-toggle="tooltip"  data-bs-custom-class="custom-tooltip" data-bs-title="WhatsApp">
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
                            <a class="link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover" href="https://www.instagram.com/psic.camilamelissa" target="_blank" data-bs-toggle="tooltip"         data-bs-custom-class="custom-tooltip"
                            data-bs-title="Instagram">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <img src=${instagramIcon} alt="logo instagam"
                                            width="48px">
                                    </div>
                                    <div>
                                        <p class="m-0"> @psic.camilamelissa </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="list-group-item list-group-item-action pt-3 pb-3">
                            <a class="link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover" href="https://www.linkedin.com/in/psic-camilamelissa" target="_blank" data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip"
                            data-bs-title="Linkedin">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <img src=${linkedinIcon} alt="logo linkedin"
                                            width="48px">
                                    </div>
                                    <div>
                                        <p class="m-0"> in/psic-camilamelissa </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="list-group-item list-group-item-action pt-3 pb-3">
                            <a class="link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover" href="#" data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip" data-bs-title="E-mail">
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
                    <form id="formMessage" class="d-flex flex-column gap-3 gap-lg-4">
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-text">Nome</span>
                                <input type="text" class="form-control" name="name" id="name" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-text">
                                    <i class="bi bi-envelope-at-fill"></i>
                                </span>
                                <input type="email" class="form-control" name="email" id="email" placeholder="Seu E-mail" required>
                            </div>

                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-text">
                                    Mensagem
                                </span>
                                <textarea class="form-control noResize" name="message" id="messagem" rows="5" required></textarea>
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

const createSpinner = () => {
    const spinner = document.createElement('span');
    spinner.classList.add('spinner-border', 'spinner-border-sm', 'me-2', 'invisible');
    spinner.setAttribute('role', 'status');
    spinner.setAttribute('aria-hidden', 'true');

    return spinner;
}

const emailSending = () => {
    const form = document.getElementById('formMessage');
    const submitButton = form.querySelector('button[type="submit"]');

    const spinner = createSpinner();
    submitButton.insertAdjacentElement('afterbegin', spinner);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const messageToSend = {
            name: name,
            email: email,
            message: message
        }

        form.querySelectorAll('input, textarea, button').forEach((input) => input.disabled = true);
        spinner.classList.remove('invisible');
        spinner.classList.add('visible');

        try {
            const result = await sendEmail(messageToSend);

            if (result) {
                form.reset();
                toast();
                form.querySelectorAll('input, textarea, button').forEach((input) => input.disabled = false);
                spinner.classList.remove('visible');
                spinner.classList.add('invisible');
            }

        } catch (error) {
            console.error('Mensagem não enviada: ', error);
        }

    })
}

export { contact, activeAllTooltip, emailSending };