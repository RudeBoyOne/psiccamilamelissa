import { LitElement, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import logoSrc from '../../assets/images/logo-camila.png'
import logoNameSrc from '../../assets/images/logo-nome.png'
import { Menu, X } from 'lucide'
import { createIconElement } from '../utils/icons'

@customElement('app-navbar')
export class AppNavbar extends LitElement {
  createRenderRoot() { return this }

  @state()
  private _isOpen = false

  private _toggle() {
    this._isOpen = !this._isOpen
  }

  private _close() {
    this._isOpen = false
  }

  render() {
    return html`
      <header>
        <div class="max-w-7xl mx-auto">
          <div class="rounded-b-navbar bg-accent">
            <!-- Mobile -->
            <div class="lg:hidden">
              <div class="flex items-center justify-between h-[100px] px-3">
                <a href="/" class="flex items-center shrink-0 py-1" aria-label="Página inicial">
                  <img src="${logoSrc}" alt="Camila Melissa" class="w-9 h-9 rounded-full object-cover">
                  <img src="${logoNameSrc}" alt="Psicóloga Camila Melissa" class="h-[23px] ml-3 rounded-xl">
                </a>
                <button @click=${this._toggle} class="text-white p-2" aria-label=${this._isOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded="${this._isOpen ? 'true' : 'false'}">
                    <span class="relative block w-7 h-7">
                    <span class="absolute inset-0 flex items-center justify-center motion-reduce:transition-none transition-[opacity,transform] duration-500 ${this._isOpen ? 'opacity-0 scale-75 rotate-90' : 'opacity-100 scale-100 rotate-0'}">
                      ${createIconElement(Menu, 'w-7 h-7')}
                    </span>
                    <span class="absolute inset-0 flex items-center justify-center motion-reduce:transition-none transition-[opacity,transform] duration-500 ${this._isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-90'}">
                      ${createIconElement(X, 'w-7 h-7')}
                    </span>
                  </span>
                </button>
              </div>
              <div class="border-t border-white/20 bg-accent origin-top overflow-hidden motion-reduce:transition-none transition-[opacity,transform,max-height] duration-500 ease-in-out ${this._isOpen ? 'scale-y-100 opacity-100 max-h-80' : 'scale-y-0 opacity-0 max-h-0'}">
                <div class="px-4 py-4 space-y-4">
                  <a href="#sobre" @click=${this._close} class="block text-white font-label font-semibold text-sm tracking-widest uppercase py-2 no-underline">SOBRE</a>
                  <a href="#artigos" @click=${this._close} class="block text-white font-label font-semibold text-sm tracking-widest uppercase py-2 no-underline">ARTIGOS</a>
                  <a href="#contato" @click=${this._close} class="block text-white font-label font-semibold text-sm tracking-widest uppercase py-2 no-underline">CONTATO</a>
                </div>
              </div>
            </div>

            <!-- Desktop -->
            <div class="hidden lg:flex justify-center">
              <div class="w-[1110px] h-[100px] relative">
                <a href="/" class="absolute left-[21px] top-[21px] flex items-center" aria-label="Página inicial">
                  <img src="${logoSrc}" alt="Camila Melissa" class="w-[58px] h-[58px] rounded-full object-cover">
                  <img src="${logoNameSrc}" alt="Psicóloga Camila Melissa" class="h-[35px] ml-3 rounded-[13px]">
                </a>
                <nav class="absolute left-[745px] top-[26.5px] px-3 py-3 flex items-center gap-14">
                  <a href="#sobre" class="text-white font-label font-semibold label-sm hover:opacity-80 motion-reduce:transition-none transition-opacity no-underline">
                    SOBRE
                  </a>
                  <a href="#artigos" class="text-white font-label font-semibold label-sm hover:opacity-80 motion-reduce:transition-none transition-opacity no-underline">
                    ARTIGOS
                  </a>
                  <a href="#contato" class="text-white font-label font-semibold label-sm hover:opacity-80 motion-reduce:transition-none transition-opacity no-underline">
                    CONTATO
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    `
  }
}
