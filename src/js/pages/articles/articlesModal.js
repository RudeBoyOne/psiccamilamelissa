import { Modal } from "bootstrap";

const modal = (title, pdf) => {

    const templateModal = `
        <div class="modal fade" id="articleModal" tabindex="-1" aria-labelledby="articleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
                <div class="modal-content">
                    <div class="modal-header primary-color text-light">
                        <h5 class="modal-title" id="articleModalLabel">${title}</h5>
                    </div>
                    <div class="modal-body">
                        <embed src="${pdf}" id="pdfViewer" width="100%" height="500px" style="border: none;" type="application/pdf">
                    </div>
                    <div class="modal-footer">
                        <a href="${pdf}" download="${title}.pdf" class="btn primary-color text-light">
                            Baixar Artigo
                        </a>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', templateModal);

    const modalHtml = document.getElementById('articleModal');

    const modalInstance = new Modal(modalHtml);
    modalInstance.show();

    modalHtml.addEventListener('hidden.bs.modal', () => {
        modalInstance.dispose();

        if (modalHtml.parentNode) {
            modalHtml.parentNode.removeChild(modalHtml);
        }

    });
}

export default modal;