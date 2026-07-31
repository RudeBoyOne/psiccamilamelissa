import articlesData, { type ArticleData } from './articlesData'
import './article-pdf-modal'

const articlesDataMap = articlesData as Record<string, ArticleData>

export class ArticleCard extends HTMLElement {
  connectedCallback() {
    const articleId = this.getAttribute('articleid') || ''
    const imgUrl = this.getAttribute('imgurl') || ''
    const title = this.getAttribute('title') || ''
    const description = this.getAttribute('description') || ''

    this.innerHTML = `
      <div class="card-brand cursor-pointer hover:border-detail motion-reduce:transition-none transition-colors w-full h-full"
           role="button" tabindex="0">
        <img src="${imgUrl}" alt="${title}" class="w-full h-72 object-cover" loading="lazy">
        <div class="p-6">
          <h3 class="card-title mb-3">${title}</h3>
          <p class="card-body">${description}</p>
        </div>
      </div>
    `

    const div = this.querySelector<HTMLElement>('.card-brand')
    if (!div) { return }

    div.addEventListener('click', () => {
      const article = articlesDataMap[articleId]
      if (!article) { return }

      if (article.pdfUrl) {
        const modal = document.querySelector('article-pdf-modal')
        if (modal) {
          (modal as any).constructor.open(article.title, article.pdfUrl)
        }
      } else if (article.externalUrl) {
        window.open(article.externalUrl, '_blank', 'noopener,noreferrer')
      }
    })

    div.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        div.click()
      }
    })
  }
}

customElements.define('article-card', ArticleCard)

export class ArticlesGrid extends HTMLElement {
  connectedCallback() {
    const entries = Object.entries(articlesData) as [string, ArticleData][]

    const allCards = entries.map(([id, { title, img, description }]) => `
      <article-card
        articleid="${id}"
        imgurl="${img}"
        title="${title}"
        description="${description}">
      </article-card>
    `).join('')

    this.innerHTML = `
      <section id="artigos" class="bg-muted py-16 lg:py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="font-heading font-bold text-4xl sm:text-heading-lg leading-[1.33] text-center text-gray-7 mb-12">
            Meus artigos
          </h2>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 justify-center max-w-2xl mx-auto">
            ${allCards}
          </div>
        </div>
      </section>
    `
  }
}

customElements.define('articles-grid', ArticlesGrid)
