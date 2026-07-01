import 'bootstrap-icons/font/bootstrap-icons.css'

import createNavbar from './components/navbar'
import createHero from './components/hero'
import createAbout from './components/about'
import createQuote from './components/quote'
import createArticles from './components/articles'
import createFooter from './components/footer'
import renderPdfViewer from './pages/displayPdf'

const init = async () => {
  const path = window.location.pathname

  if (path === '/display_pdf') {
    const navbar = createNavbar()
    document.body.insertAdjacentElement('afterbegin', navbar)
    await renderPdfViewer()
    const footer = createFooter()
    document.body.appendChild(footer)
    return
  }

  const navbar = createNavbar()
  document.body.insertAdjacentElement('afterbegin', navbar)

  const main = document.getElementById('main')!
  main.className = 'flex-1'

  const sections = [
    createHero(),
    createAbout(),
    createQuote(),
    createArticles(),
  ]

  sections.forEach(section => main.appendChild(section))

  const footer = createFooter()
  document.body.appendChild(footer)
}

document.addEventListener('DOMContentLoaded', () => {
  init().catch(err => console.error('init error:', err))
})
