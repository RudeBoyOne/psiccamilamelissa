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
        <div class="d-flex justify-content-center w-auto">
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

const showPdf = (pdf) => {

    const relativePath = pdf || localStorage.getItem('pdfPath');
    if (!relativePath) {
        console.error('Caminho relativo do PDF não encontrado.');
        return;
    }
    localStorage.setItem('pdfPath', relativePath);

    const buttonDownload = document.getElementById('download-pdf');

    const url = new URL(relativePath, window.location.origin).href

    buttonDownload.setAttribute('href', url);

    let pdfDoc = null,
        pageNum = 1,
        pageRendering = false,
        pageNumPending = null,
        scale = 1.5,
        canvas = document.getElementById('pdf-canvas'),
        ctx = canvas.getContext('2d');

    function renderPage(num) {
        pageRendering = true;
        pdfDoc.getPage(num).then(function (page) {
            const viewport = page.getViewport({ scale: scale });
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };
            const renderTask = page.render(renderContext);

            renderTask.promise.then(function () {
                pageRendering = false;
                if (pageNumPending !== null) {
                    renderPage(pageNumPending);
                    pageNumPending = null;
                }
            });

            document.getElementById('page-num').textContent = num;
        });
    }

    function queueRenderPage(num) {
        if (pageRendering) {
            pageNumPending = num;
        } else {
            renderPage(num);
        }
    }

    function onPrevPage() {
        if (pageNum <= 1) {
            return;
        }
        pageNum--;
        queueRenderPage(pageNum);
    }

    function onNextPage() {
        if (pageNum >= pdfDoc.numPages) {
            return;
        }
        pageNum++;
        queueRenderPage(pageNum);
    }

    getDocument(url).promise.then(function (pdf) {
        pdfDoc = pdf;
        document.getElementById('page-count').textContent = pdf.numPages;

        renderPage(pageNum);
    });

    document.getElementById('prev-page').addEventListener('click', onPrevPage);
    document.getElementById('next-page').addEventListener('click', onNextPage);
}

export { displayPdf, showPdf };