import articlesData from '../pages/articles/articlesData'

const createArticles = () => {
  const section = document.createElement('section')
  section.id = 'artigos'
  section.className = 'bg-muted py-16 lg:py-20'
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="font-heading font-bold text-[36px] sm:text-[48px] leading-[1.33] text-center text-gray-7 mb-12">
        Meus artigos
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${Object.entries(articlesData).map(([id, { title, img, description }]) => `
          <div class="bg-white rounded-feature shadow-card overflow-hidden cursor-pointer hover:shadow-lg transition-shadow article-card" data-article="${id}">
            <img src="${img}" alt="${title}" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="font-heading font-bold text-[22px] leading-[22px] text-text-gray mb-3">
                ${title}
              </h3>
              <p class="font-body text-[14px] leading-[24px] text-gray-5">
                ${description}
              </p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `

  section.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('click', () => {
      const articleId = card.getAttribute('data-article')
      if (!articleId) {return}
      const article = articlesData[articleId]
      localStorage.setItem('pdf', article.pdf)
      window.location.href = '/display_pdf'
    })
  })

  return section
}

export default createArticles
