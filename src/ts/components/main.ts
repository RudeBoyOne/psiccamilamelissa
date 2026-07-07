import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import fotoCamila from '../../assets/images/foto-camila.png'
import heroBgDecoration from '../../assets/images/hero-bg-decoration.svg'
import { UserCheck, Users, BookOpen } from 'lucide'
import { createIconElement } from '../utils/icons'

const qualityItems = [
  { icon: UserCheck, text: '5+ de experiência no atendimento clínico' },
  { icon: Users, text: '+ de 50 pacientes' },
  { icon: BookOpen, text: 'estou em constante aprendizado' },
]

@customElement('hero-section')
export class HeroSection extends LitElement {
  createRenderRoot() { return this }

  firstUpdated() {
    const badgeSpan = this.querySelector<HTMLSpanElement>('#hero-badge-span')
    if (!badgeSpan) {return}

    badgeSpan.style.width = '0'
    badgeSpan.style.opacity = '0'

    const animate = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          badgeSpan.style.width = `${badgeSpan.scrollWidth}px`
          badgeSpan.style.opacity = '1'
        })
      })
    }

    Promise.race([
      document.fonts.ready,
      new Promise(r => setTimeout(r, 1000)),
    ]).then(animate)
  }

  render() {
    return html`
      <section class="bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col lg:flex-row lg:items-center">
            <div class="flex-1 px-4 sm:px-6 lg:px-8 pt-12 lg:pb-20">
              <div class="inline-flex items-center bg-muted rounded-full px-1 py-1 mb-8 overflow-hidden">
                <span class="bg-accent text-white text-sm font-body px-2 sm:px-4 py-1 rounded-full">Olhar</span>
                <span id="hero-badge-span" class="inline-block whitespace-nowrap overflow-hidden align-middle text-accent text-sm font-body px-1.5 sm:px-3 transition-all duration-[3000ms] ease-in-out">para dentro é o começo da mudança.</span>
              </div>

              <h1 class="font-heading font-bold text-[44px] sm:text-[55px] md:text-[70px] xl:text-[90px] leading-[1.1] text-accent mb-6">
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
                    ${createIconElement(icon, 'w-8 h-8 text-gray-5')}
                    <span class="font-body text-sm sm:text-xl leading-[1.41] text-gray-5">${text}</span>
                  </div>
                `)}
              </div>

              <a href="https://wa.me/5511959525369?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20terapia/análise."
                 target="_blank"
                 class="inline-flex items-center gap-3 bg-accent text-white font-body font-bold text-[22px] px-8 py-5 rounded-feature animate-pulse-ring hover:opacity-90">
                Vamos conversar?
                <i class="bi bi-whatsapp text-2xl"></i>
              </a>
            </div>

            <div class="relative flex-shrink-0 mt-8 lg:mt-0 lg:ml-8 overflow-visible">
              <img src="${heroBgDecoration}" alt="" class="absolute pointer-events-none w-[490px] sm:w-[738px] lg:w-[850px] max-w-none -left-10 sm:left-4 lg:-left-52 lg:-top-8" aria-hidden="true">
              <img src="${fotoCamila}"
                   alt="Camila Melissa de Souza, psicóloga e psicanalista"
                   class="relative w-[519px] max-w-full h-auto object-contain mx-auto">
              <div class="relative -mt-8 mx-auto w-[382px] max-w-[90%] bg-white rounded-input shadow-caption p-4 text-center lg:mb-[-1.5rem] mb-0">
                <p class="font-body font-bold text-[24px] text-[#33475B]">Camila Melissa de Souza</p>
                <p class="font-body font-medium text-[16px] text-[#87898C]">Psicóloga & Psicanalista</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  }
}
