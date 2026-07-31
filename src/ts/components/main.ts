import { LitElement, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import fotoCamila from '../../assets/images/hero-image.webp'
import heroBgDecoration from '../../assets/images/hero-bg-decoration.svg'
import { UserCheck, Users, BookOpen } from 'lucide'
import { createIconElement } from '../utils/icons'
import { whatsappIcon } from '../utils/icons-social-midea'

const qualityItems = [
  { icon: UserCheck, text: '7 anos de experiência no atendimento clínico' },
  { icon: Users, text: '+ de 80 pacientes' },
  { icon: BookOpen, text: 'em constante aprendizado' },
]

@customElement('hero-section')
export class HeroSection extends LitElement {
  createRenderRoot() { return this }

  @state()
  private _badgeRevealed = false

  firstUpdated() {
    Promise.race([
      document.fonts.ready,
      new Promise(r => setTimeout(r, 2000)),
    ]).then(() => { this._badgeRevealed = true })
  }

  render() {
    return html`
      <section class="bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col lg:flex-row lg:items-center">
            <div class="flex-1 px-4 sm:px-6 lg:px-8 pt-12 lg:pb-20">
              <div class="inline-flex items-center bg-muted rounded-full px-1 py-1 mb-8 overflow-hidden">
                <span class="bg-accent text-white text-sm font-body px-2 sm:px-4 py-1 rounded-full flex-shrink-0">Olhar</span>
                <span id="hero-badge-span" class="inline-block whitespace-nowrap overflow-hidden align-middle text-accent text-sm font-body motion-reduce:transition-none transition-[max-width,opacity,padding] duration-[3000ms] ease-in-out ${this._badgeRevealed ? 'max-w-xl opacity-100 px-1.5 sm:px-3' : 'max-w-0 opacity-0 px-0'}">para dentro é o começo da mudança.</span>
              </div>

              <h1 class="font-heading font-bold text-[44px] sm:text-[55px] md:text-[70px] xl:text-hero leading-[1.1] text-accent mb-6">
                Atendimento clínico
              </h1>

              <p class="font-body text-lg sm:text-2xl leading-[1.58] text-gray-6 max-w-[597px] mb-10">
                focado na abordagem psicanalítica. A psicanálise é uma ferramenta
                poderosa para explorar o inconsciente e entender os fatores que
                influenciam nossos comportamentos e emoções.
              </p>

              <div class="space-y-4 mb-10">
                ${qualityItems.map(({ icon, text }) => html`
                  <div class="flex items-center gap-3">
                    ${createIconElement(icon, 'w-8 h-8 text-gray-6')}
                    <span class="font-body text-sm sm:text-xl leading-[1.41] text-gray-6">${text}</span>
                  </div>
                `)}
              </div>

              <a href="https://wa.me/5511959525369?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20terapia/análise."
                 target="_blank" rel="noopener noreferrer"
                 class="inline-flex items-center gap-3 bg-accent text-white font-body font-bold text-body-lg px-8 py-5 rounded-feature animate-pulse-ring hover:opacity-90">
                Vamos conversar?
                <span class="w-6 h-6">${unsafeHTML(whatsappIcon)}</span>
              </a>
            </div>

            <div class="relative flex-shrink-0 mt-8 lg:mt-0 lg:ml-8 overflow-visible">
              <img src="${heroBgDecoration}" alt="" class="absolute pointer-events-none w-[490px] sm:w-[738px] lg:w-[877px] max-w-none -left-10 sm:left-4 lg:-left-32 lg:-top-10" aria-hidden="true">
              <img src="${fotoCamila}"
                   alt="Camila Melissa de Souza, psicóloga e psicanalista"
                   class="relative w-[600px] max-w-full h-auto object-contain mx-auto">
              <div class="relative -mt-6 mx-auto w-[382px] max-w-[90%] bg-white rounded-input shadow-caption p-4 text-center -mb-6">
                <p class="font-body font-bold text-heading-md text-text-gray">Camila Melissa de Souza</p>
                <p class="font-body font-medium text-base text-gray-6">Psicóloga & Psicanalista</p>
                <p class="font-body font-medium text-base text-gray-6"> CRP 06/158929</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  }
}
