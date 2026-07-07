import 'bootstrap-icons/font/bootstrap-icons.css'

import './components/navbar'
import './components/main'
import './components/about'
import './components/quote'
import './components/articles'
import './components/footer'
import './pages/displayPdf'

const init = async () => {
  const path = window.location.pathname
  const main = document.getElementById('main')!

  if (path === '/display_pdf') {
    document.body.insertAdjacentHTML('afterbegin', '<app-navbar></app-navbar>')
    main.className = 'flex-1 overflow-x-hidden'
    main.innerHTML = '<pdf-viewer></pdf-viewer>'
    document.body.insertAdjacentHTML('beforeend', '<app-footer></app-footer>')
    return
  }

  main.className = 'flex-1 overflow-x-hidden'
  main.innerHTML = `
    <app-navbar></app-navbar>
    <hero-section></hero-section>
    <about-section></about-section>
    <quote-section></quote-section>
    <articles-grid></articles-grid>
    <app-footer></app-footer>
  `
}

document.addEventListener('DOMContentLoaded', () => {
  init().catch(err => console.error('init error:', err))
})
