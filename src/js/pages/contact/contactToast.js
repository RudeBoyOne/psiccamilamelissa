import { Toast } from "bootstrap";

const toast = () => {

    const templateToast = `
        <div id="toast" class="toast align-items-center position-fixed top-10 start-50 translate-middle p-2 custom-toast border border-light-subtle" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body fw-semibold fs-6 text-light">
                    Sua mensagem foi enviada!
                </div>
                <button type="button" class=" me-2 m-auto  btn btn-dark" data-bs-dismiss="toast" aria-label="Close">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>
        </div>
    `;

    document.getElementById('main').insertAdjacentHTML('afterbegin', templateToast);

    const toastHtml = document.getElementById('toast');
    const toastElement = new Toast(toastHtml, {
        delay: 4000
    });

    toastElement.show();

    toastHtml.addEventListener('hidden.bs.toast', () => {
        toastElement.dispose();

        if (toastHtml.parentNode) {
            toastHtml.parentNode.removeChild(toastHtml);
        }
    });
}

export default toast;