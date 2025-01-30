import articlesData from './articlesData';
import modal from './articlesModal';

const articles = `
    <section class="p-3 w-100">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            ${Object.entries(articlesData)
            .map(
                ([id, { title, img }]) =>
                    `
                        <div class="col">
                            <div class="card h-100" data-article="${id}">
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
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const articleId = card.getAttribute('data-article');
            const article = articlesData[articleId];

            if (article) {
                modal(article.title, article.pdf);
            } else {
                console.error('Artigo não encontrado:', articleId);
            }
        });
    });
};

export { articles, addCardListeners };
