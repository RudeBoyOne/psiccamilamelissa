import articlesData from '../pages/articles/articlesData'

const articlesDataMap = articlesData as Record<string, { title: string; pdf: string; img: string; description: string }>

export class ArticleCard extends HTMLElement {
  connectedCallback() {
    const articleId = this.getAttribute('articleid') || ''
    const imgUrl = this.getAttribute('imgurl') || ''
    const title = this.getAttribute('title') || ''
    const description = this.getAttribute('description') || ''

    this.innerHTML = `
      <div class="card-brand cursor-pointer hover:shadow-lg motion-reduce:transition-none transition-shadow"
           role="button" tabindex="0">
        <img src="${imgUrl}" alt="${title}" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="card-title mb-3">${title}</h3>
          <p class="card-body">${description}</p>
        </div>
      </div>
    `

    const div = this.querySelector<HTMLElement>('.card-brand')
    if (!div) return

    div.addEventListener('click', () => {
      const article = articlesDataMap[articleId]
      if (!article) return
      localStorage.setItem('pdf', article.pdf)
      window.location.href = '/display_pdf'
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
    const entries = Object.entries(articlesData) as [string, { title: string; pdf: string; img: string; description: string }][]
    const cards = entries.map(([id, { title, img, description }]) => `
      <article-card
        articleId="${id}"
        imgUrl="${img}"
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
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${cards}
          </div>
        </div>
      </section>
    `
  }
}

customElements.define('articles-grid', ArticlesGrid)
