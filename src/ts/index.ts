import '../css/bootstrap-icons-custom.css'

import './components/navbar'
import './components/main'
import './components/about'
import './components/quote'
import './components/articles/articles'
import './components/footer'

const init = async () => {
  const main = document.getElementById('main')!
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
  init().catch(() => {})
})
