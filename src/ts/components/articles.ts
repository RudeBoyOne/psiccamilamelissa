import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import articlesData from '../pages/articles/articlesData'

@customElement('article-card')
export class ArticleCard extends LitElement {
  createRenderRoot() { return this }

  @property()
  articleId = ''

  @property()
  imgUrl = ''

  @property()
  title = ''

  @property()
  description = ''

  private _handleClick() {
    const data = articlesData as Record<string, { title: string; pdf: string; img: string; description: string }>
    const article = data[this.articleId]
    if (!article) {return}
    localStorage.setItem('pdf', article.pdf)
    window.location.href = '/display_pdf'
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      this._handleClick()
    }
  }

  render() {
    return html`
      <div class="card-brand cursor-pointer hover:shadow-lg motion-reduce:transition-none transition-shadow"
           role="button" tabindex="0"
           @click=${this._handleClick} @keydown=${this._handleKeyDown}>
        <img src="${this.imgUrl}" alt="${this.title}" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="card-title mb-3">${this.title}</h3>
          <p class="card-body">${this.description}</p>
        </div>
      </div>
    `
  }
}

@customElement('articles-grid')
export class ArticlesGrid extends LitElement {
  createRenderRoot() { return this }

  render() {
    const entries = Object.entries(articlesData) as [string, { title: string; pdf: string; img: string; description: string }][]

    return html`
      <section id="artigos" class="bg-muted py-16 lg:py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="font-heading font-bold text-4xl sm:text-heading-lg leading-[1.33] text-center text-gray-7 mb-12">
            Meus artigos
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${entries.map(([id, { title, img, description }]) => html`
              <article-card
                articleId="${id}"
                imgUrl="${img}"
                title="${title}"
                description="${description}">
              </article-card>
            `)}
          </div>
        </div>
      </section>
    `
  }
}
