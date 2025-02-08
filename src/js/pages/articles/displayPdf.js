import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs';
import '../../../css/pages/articles.scss';

GlobalWorkerOptions.workerSrc = new URL('../../../../node_modules/pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

const displayPdf = `
    <section class="container d-flex flex-column align-items-center gap-4 p-3">
        <div class="d-flex align-items-center justify-content-evenly gap-3 mt-4">
            <a id="download-pdf" class="btn btn-dark btn-dark-without-border">Baixar PDF</a>
            <a id="go-back" href="#articles" class="btn btn-secondary">Voltar</a>
        </div>
        <div id="pdf-container" class="d-flex justify-content-center w-auto">
            <canvas id="pdf-canvas" class="border border-secondary-subtle rounded shadow w-100"></canvas>
        </div>
        <nav aria-label="PDF navigation">
            <ul class="pagination justify-content-center mb-3">
                <li class="page-item">
                    <button id="prev-page" class="page-link">
                        <i class="bi bi-caret-left-fill"></i>
                    </button>
                </li>
                <li class="page-item disabled">
                    <span class="page-link"><span id="page-num"></span> / <span id="page-count"></span></span>
                </li>
                <li class="page-item">
                    <button id="next-page" class="page-link">
                        <i class="bi bi-caret-right-fill"></i>
                    </button>
                </li>
            </ul>
        </nav>
    </section>
`;

const createSpinner = () => {
    const spinner = document.createElement('div');
    spinner.classList.add('spinner-grow', 'text-dark');
    spinner.setAttribute('role', 'status');
    spinner.innerHTML = `<span class="visually-hidden">Loading...</span>`;
    spinner.style.display = 'block';
    spinner.style.zIndex = '1000'; 
    return spinner;
}

const showPdf = (pdf) => {
    const relativePath = pdf || localStorage.getItem('pdfPath');
    if (!relativePath) {
        console.error('Caminho relativo do PDF não encontrado.');
        return;
    }
    localStorage.setItem('pdfPath', relativePath);

    const buttonDownload = document.getElementById('download-pdf');
    const url = new URL(relativePath, window.location.origin).href;
    buttonDownload.href = url;

    let pdfDoc = null,
        pageNum = 1,
        pageRendering = false,
        renderTask = null,
        scale = 1.5;

    const pdfContainer = document.getElementById('pdf-container');
    const existingCanvas = pdfContainer.querySelector('canvas');
    if (existingCanvas) {
        existingCanvas.remove();
    }

    const canvas = document.createElement('canvas');
    canvas.id = 'pdf-canvas';
    canvas.className = 'border border-secondary-subtle rounded shadow w-100';
    pdfContainer.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    const existingSpinner = pdfContainer.querySelector('.spinner-grow');
    if (existingSpinner) {
        existingSpinner.remove();
    }

    const spinner = createSpinner();
    pdfContainer.insertBefore(spinner, canvas);

    function cancelPendingRender() {
        if (renderTask && renderTask.promise) {
            renderTask.cancel();
        }
    }

    async function renderPage(num) {
        if (pageRendering) {
            await new Promise(resolve => {
                setTimeout(resolve, 100); // Aguarde um pouco para a renderização terminar
            });
        }

        pageRendering = true;
        spinner.style.display = 'block';

        try {
            const page = await pdfDoc.getPage(num);
            const viewport = page.getViewport({ scale: scale });
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };

            renderTask = page.render(renderContext);

            await renderTask.promise;

            pageRendering = false;
            spinner.style.display = 'none';

            document.getElementById('page-num').textContent = num;
        } catch (error) {
            console.error('Erro ao renderizar página:', error);
            pageRendering = false;
            spinner.style.display = 'none';
        }
    }

    async function queueRenderPage(num) {
        if (pageRendering) {
            const existingNum = pageNum;
            await renderPage(num);
            document.getElementById('page-num').textContent = num;
        } else {
            await renderPage(num);
        }
    }

    function onPrevPage() {
        if (pageNum <= 1) {
            return;
        }
        cancelPendingRender();
        pageNum--;
        queueRenderPage(pageNum);
    }

    function onNextPage() {
        if (pageNum >= pdfDoc.numPages) {
            return;
        }
        cancelPendingRender();
        pageNum++;
        queueRenderPage(pageNum);
    }

    getDocument(url).promise.then(function (pdfDoc_) {
        pdfDoc = pdfDoc_;
        document.getElementById('page-count').textContent = pdfDoc.numPages;
        queueRenderPage(pageNum);
    }).catch(function (error) {
        console.error('Erro ao carregar o PDF:', error);
    });

    document.getElementById('prev-page').addEventListener('click', onPrevPage);
    document.getElementById('next-page').addEventListener('click', onNextPage);
}

export { displayPdf, showPdf };