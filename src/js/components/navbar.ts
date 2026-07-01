import logoSrc from '../../assets/images/logo-camila.png'
import logoNameSrc from '../../assets/images/logo-nome.png'
import { Menu, X } from 'lucide'
import { createIconElement } from '../utils/icons'

const createNavbar = () => {
  const header = document.createElement('header')
  header.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="rounded-b-navbar bg-accent">
        <div class="lg:hidden">
          <div class="flex items-center justify-between h-[100px]">
            <a href="/" class="flex items-center shrink-0">
              <img src="${logoSrc}" alt="Camila Melissa" class="w-[58px] h-[58px] rounded-full object-cover">
              <img src="${logoNameSrc}" alt="Psicóloga Camila Melissa" class="h-[35px] ml-[12px] rounded-[13px]">
            </a>
            <button id="menu-toggle" class="text-white p-2" aria-label="Abrir menu">
            </button>
          </div>
          <div id="mobile-menu" class="hidden border-t border-white/20 bg-accent">
            <div class="px-4 py-4 space-y-4">
              <a href="#sobre" class="block text-white font-label font-semibold text-sm tracking-widest uppercase py-2 no-underline">SOBRE</a>
              <a href="#artigos" class="block text-white font-label font-semibold text-sm tracking-widest uppercase py-2 no-underline">ARTIGOS</a>
              <a href="#contato" class="block text-white font-label font-semibold text-sm tracking-widest uppercase py-2 no-underline">CONTATO</a>
            </div>
          </div>
        </div>

        <div class="hidden lg:flex justify-center">
          <div class="w-[1110px] h-[100px] relative">
            <a href="/" class="absolute left-[21px] top-[21px] flex items-center">
              <img src="${logoSrc}" alt="Camila Melissa" class="w-[58px] h-[58px] rounded-full object-cover">
              <img src="${logoNameSrc}" alt="Psicóloga Camila Melissa" class="h-[35px] ml-[12px] rounded-[13px]">
            </a>
            <nav class="absolute left-[745px] top-[26.5px] px-3 py-3 flex items-center gap-14">
              <a href="#sobre" class="text-white font-label font-semibold text-xs tracking-[0.125em] uppercase leading-[23px] hover:opacity-80 transition-opacity no-underline">
                SOBRE
              </a>
              <a href="#artigos" class="text-white font-label font-semibold text-xs tracking-[0.125em] uppercase leading-[23px] hover:opacity-80 transition-opacity no-underline">
                ARTIGOS
              </a>
              <a href="#contato" class="text-white font-label font-semibold text-xs tracking-[0.125em] uppercase leading-[23px] hover:opacity-80 transition-opacity no-underline">
                CONTATO
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  `

  const toggleBtn = header.querySelector('#menu-toggle')!
  toggleBtn.appendChild(createIconElement(Menu, 'w-7 h-7'))

  const mobileMenu = header.querySelector('#mobile-menu')!
  let isOpen = false

  toggleBtn.addEventListener('click', () => {
    isOpen = !isOpen
    mobileMenu.classList.toggle('hidden', !isOpen)
    toggleBtn.innerHTML = ''
    toggleBtn.appendChild(createIconElement(isOpen ? X : Menu, 'w-7 h-7'))
  })

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      isOpen = false
      mobileMenu.classList.add('hidden')
      toggleBtn.innerHTML = ''
      toggleBtn.appendChild(createIconElement(Menu, 'w-7 h-7'))
    })
  })

  return header
}

export default createNavbar
