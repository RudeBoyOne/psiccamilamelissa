import fotoCamila from '../../assets/images/foto-camila.png'
import heroBgDecoration from '../../assets/images/hero-bg-decoration.svg'
import { UserCheck, Users, BookOpen } from 'lucide'
import { createIconElement } from '../utils/icons'

const createMain = () => {
  const section = document.createElement('section')
  section.className = 'bg-white'
  section.innerHTML = `
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:items-center">
        <div class="flex-1 px-4 sm:px-6 lg:px-8 pt-12 lg:pb-20">
          <div class="inline-flex items-center bg-muted rounded-full px-1 py-1 mb-8 overflow-hidden">
            <span class="bg-accent text-white text-sm font-body px-2 sm:px-4 py-1 rounded-full">Olhar</span>
            <span class="inline-block whitespace-nowrap overflow-hidden align-middle text-accent text-sm font-body px-1.5 sm:px-3 transition-all duration-[3000ms] ease-in-out">para dentro é o começo da mudança.</span>
          </div>

          <h1 class="font-heading font-bold text-[44px] sm:text-[55px] md:text-[70px] xl:text-[90px] leading-[1.1] text-accent mb-6">
            Atendimento clínico
          </h1>

          <p class="font-body text-lg sm:text-2xl leading-[1.58] text-gray-6 max-w-[597px] mb-10">
            focado na abordagem psicanalítica. A psicanálise é uma ferramenta
            poderosa para explorar o inconsciente e entender os fatores que
            influenciam nossos comportamentos e emoções.
          </p>

          <div class="space-y-4 mb-10" id="qualities-list">
          </div>

          <a href="https://wa.me/5511959525369?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20terapia/análise."
             target="_blank"
             class="inline-flex items-center gap-3 bg-accent text-white font-body font-bold text-[22px] px-8 py-5 rounded-feature hover:opacity-90 transition-opacity">
            Vamos conversar?
            <i class="bi bi-whatsapp text-2xl"></i>
          </a>
        </div>

        <div class="relative flex-shrink-0 mt-8 lg:mt-0 lg:ml-8">
          <img src="${heroBgDecoration}" alt="" class="absolute inset-0 w-full h-full object-contain pointer-events-none" aria-hidden="true">
          <img src="${fotoCamila}"
               alt="Camila Melissa de Souza, psicóloga e psicanalista"
               class="relative w-[570px] max-w-full h-auto object-contain mx-auto">
          <div class="relative -mt-8 mx-auto w-[382px] max-w-[90%] bg-white rounded-input shadow-caption p-4 text-center lg:mb-[-1.5rem] mb-0">
            <p class="font-body font-bold text-[24px] text-[#33475B]">Camila Melissa de Souza</p>
            <p class="font-body font-medium text-[16px] text-[#87898C]">Psicóloga & Psicanalista</p>
          </div>
        </div>
      </div>
    </div>
  `

  const secondSpan = section.querySelector<HTMLSpanElement>('.inline-flex.items-center span:last-child')!
  secondSpan.style.width = '0'
  secondSpan.style.opacity = '0'

  const animate = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        secondSpan.style.width = `${secondSpan.scrollWidth}px`
        secondSpan.style.opacity = '1'
      })
    })
  }

  Promise.race([
    document.fonts.ready,
    new Promise(r => setTimeout(r, 1000)),
  ]).then(animate)

  const qualitiesList = section.querySelector('#qualities-list')!

  const qualityItems = [
    { icon: UserCheck, text: '5+ de experiência no atendimento clínico' },
    { icon: Users, text: '+ de 50 pacientes' },
    { icon: BookOpen, text: 'estou em constante aprendizado' },
  ]

  qualityItems.forEach(({ icon, text }) => {
    const div = document.createElement('div')
    div.className = 'flex items-center gap-3'
    div.appendChild(createIconElement(icon, 'w-8 h-8 text-gray-5'))
    const span = document.createElement('span')
    span.className = 'font-body text-sm sm:text-xl leading-[1.41] text-gray-5'
    span.textContent = text
    div.appendChild(span)
    qualitiesList.appendChild(div)
  })

  return section
}

export default createMain
