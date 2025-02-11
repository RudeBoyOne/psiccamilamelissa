import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import '../../../css/pages/articles.scss';

GlobalWorkerOptions.workerSrc = new URL('../../../../node_modules/pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

const displayPdf = `
    <section class="container d-flex flex-column align-items-center gap-4 p-3">
        <div class="d-flex align-items-center justify-content-evenly gap-3 mt-4">
            <a id="download-pdf" class="btn btn-dark btn-dark-without-border">Baixar PDF</a>
            <a id="go-back" href="#articles" class="btn btn-secondary">Voltar</a>
        </div>
        <div id="pdf-container-canvas" class="d-flex justify-content-center w-auto">
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


const showPdf = async () => {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'pdf-canvas');
    canvas.classList.add('border', 'border-secondary-subtle', 'rounded', 'shadow', 'w-100');
    const pdfContainerCanvas = document.getElementById('pdf-container-canvas')
    pdfContainerCanvas.appendChild(canvas);
    ctx = canvas.getContext('2d');

    const relativePath = localStorage.getItem('pdf');

    const url = new URL(relativePath, window.location.origin).href;

    let pdfDoc = null,
        pageNum = 1,
        pageRendering = false,
        scale = 1.5

    const renderPage = async (num) => {
        pageRendering = true;

        try {
            const page = await pdfDoc.getPage(num);
            const viewport = page.getViewport({ scale: scale });
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };

            const renderTask = page.render(renderContext);

            await renderTask.promise;

            pageRendering = false;
            document.getElementById('page-num').textContent = num;

        } catch (error) {
            console.error('Erro ao renderizar página:', error);
            pageRendering = false;
        }
    };

    const queueRenderPage = (num) => {
        if (pageRendering) {
            setTimeout(() => queueRenderPage(num), 100);
        } else {
            renderPage(num);
        }
    };

    const onPrevPage = () => {
        if (pageNum <= 1) return;
        pageNum--;
        queueRenderPage(pageNum);
    };

    const onNextPage = () => {
        if (pageNum >= pdfDoc.numPages) return;
        pageNum++;
        queueRenderPage(pageNum);
    };

    try {
        pdfDoc = await getDocument(url).promise;
        document.getElementById('page-count').textContent = pdfDoc.numPages;
        renderPage(pageNum);
    } catch (error) {
        console.error('Erro ao carregar o PDF:', error);
    }

    document.getElementById('prev-page').addEventListener('click', onPrevPage);
    document.getElementById('next-page').addEventListener('click', onNextPage);

    const buttonDownload = document.getElementById('download-pdf');
    buttonDownload.href = url;

};

export { displayPdf, showPdf };