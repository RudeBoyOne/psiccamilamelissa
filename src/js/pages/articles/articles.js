import articlesData from './articlesData';
import '../../../css/pages/articles.scss';

const articles = `
    <section class="p-3 w-100">
        <section class="mt-4">
            <h1>Meus artigos</h1>
            <h5>Nesta seção você encontra todos meus artigos publicados ou em produção</h5>
            <p>Clique no artigo para leitura completa <i class="bi bi-hand-index-thumb-fill"></i> </p>
        </section>
        <hr class="border border-1 rounded-3 mt-3 mb-3">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            ${Object.entries(articlesData)
        .map(
            ([id, { title, img }]) =>
                `
                        <div class="col">
                            <div class="card card-article h-100 shadows" data-article="${id}">
                                <img src=${img} class="card-img-top" alt="Prévia do Artigo">
                                <div class="card-body">
                                    <h5 class="card-title">${title}</h5>
                                    <p class="card-text text-justify">
                                        Este é um exemplo de resumo do artigo científico. Clique no card para ler o artigo completo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    `
        ).join('')}
        </div>
    </section> `;
;

const addCardListeners = () => {
    document.querySelectorAll('.card-article').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            const articleId = card.getAttribute('data-article');
            const article = articlesData[articleId];
            localStorage.setItem('pdf', article.pdf);
            window.location.hash = '#display_pdf';
        });
    });
};

export { articles, addCardListeners };
