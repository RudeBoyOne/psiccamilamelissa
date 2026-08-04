import articlesData, { type ArticleData } from './articlesData'
import './article-pdf-modal'
import { createIconElement } from '../../utils/icons'
import { SquareArrowOutUpRight } from 'lucide'

const articlesDataMap = articlesData as Record<string, ArticleData>

export class ArticleCard extends HTMLElement {
  connectedCallback() {
    const articleId = this.getAttribute('articleid') || ''
    const imgUrl = this.getAttribute('imgurl') || ''
    const title = this.getAttribute('title') || ''
    const description = this.getAttribute('description') || ''

    this.innerHTML = `
      <div class="card-brand flex flex-col cursor-pointer hover:border-detail motion-reduce:transition-none transition-colors w-full h-full"
           role="button" tabindex="0">
        <img src="${imgUrl}" alt="${title}" class="w-full h-72 object-cover" loading="lazy">
        <div class="p-6 flex-1 flex flex-col">
          <h3 class="card-title mb-3">${title}</h3>
          <p class="card-body">${description}</p>
          <span class="mt-auto self-end"> ${createIconElement(SquareArrowOutUpRight, 'w-5 h-5 text-gray-5').outerHTML} </span>
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
  private _observer: IntersectionObserver | null = null

  connectedCallback() {
    const entries = Object.entries(articlesData) as [string, ArticleData][]

    const allCards = entries.map(([id, { title, img, description }], index) => `
      <article-card
        class="opacity-0 translate-y-8 motion-reduce:transition-none transition-all duration-[1700ms] ease-out ${index === 0 ? 'lg:delay-0' : 'lg:delay-300'}"
        articleid="${id}"
        imgurl="${img}"
        title="${title}"
        description="${description}">
      </article-card>
    `).join('')

    this.innerHTML = `
      <section id="artigos" class="bg-muted py-16 lg:py-20 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="font-heading font-bold text-4xl sm:text-heading-lg leading-[1.33] text-center text-gray-7 mb-6">
            Meus artigos
          </h2>
          <h3 class="font-bold text-center mb-6">Acesse...</h3>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 justify-center max-w-2xl mx-auto">
            ${allCards}
          </div>
        </div>
      </section>
    `

    const cards = Array.from(this.querySelectorAll('article-card'))
    if (!cards.length) { return }

    this._observer = new IntersectionObserver((observerEntries) => {
      observerEntries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8')
          entry.target.classList.add('opacity-100', 'translate-y-0')
          this._observer?.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' })

    cards.forEach(card => this._observer?.observe(card))
  }

  disconnectedCallback() {
    this._observer?.disconnect()
    this._observer = null
  }
}

customElements.define('articles-grid', ArticlesGrid)
