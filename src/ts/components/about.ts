import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import logoAbrasme from '../../assets/images/logo-abrasme.png'
import logoSedes from '../../assets/images/logo-sedes.png'
import logoCprj from '../../assets/images/logo-cprj.png'
import logoGerar from '../../assets/images/logo-gerar.png'

@customElement('about-card')
export class AboutCard extends LitElement {
  createRenderRoot() { return this }

  @property()
  logourl = ''

  @property()
  alt = ''

  @property()
  title = ''

  @property()
  body = ''

  @property({ type: Boolean })
  expanded = false

  render() {
    return html`
      <div class="card-brand p-6 min-h-48">
        <img src="${this.logourl}" alt="${this.alt}" class="h-[53px] object-contain mb-4">
        <h3 class="card-title mb-3 line-clamp-2 max-sm:line-clamp-none">${this.title}</h3>
        <div class="motion-reduce:transition-none transition-[grid-template-rows] duration-[1500ms] ease-in-out grid max-sm:grid-rows-[1fr] ${this.expanded ? 'sm:grid-rows-[1fr]' : 'sm:grid-rows-[0fr]'}">
          <div class="overflow-hidden min-h-0 ${this.expanded ? 'sm:pb-8' : ''}">
            <p class="card-body tracking-[0.0214em]">${this.body}</p>
          </div>
        </div>
      </div>
    `
  }
}

@customElement('about-section')
export class AboutSection extends LitElement {
  createRenderRoot() { return this }

  private _observer: IntersectionObserver | null = null

  firstUpdated() {
    const section = this.querySelector('#sobre')
    if (!section) { return }

    this._observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) { return }
        const cards = Array.from(this.querySelectorAll('about-card'))
        cards.forEach(card => { (card as AboutCard).expanded = true })
        this._observer?.disconnect()
        this._observer = null
      },
      { threshold: 0.1 },
    )
    this._observer.observe(section)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this._observer?.disconnect()
    this._observer = null
  }

  render() {
    return html`
      <section id="sobre" class="bg-muted py-16 lg:py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div class="lg:w-[421px] flex-shrink-0">
              <h2 class="font-heading font-bold text-4xl sm:text-heading-lg leading-[1.2] text-gray-7 mb-6">
                Olá, eu sou<br>a Camila
              </h2>
              <p class="font-label font-medium text-lg sm:text-xl leading-9 tracking-wide text-gray-7">
                psicóloga formada pela Universidade Cruzeiro do Sul desde 2019. Trabalho como psicóloga clínica desde a minha formação e sou completamente encantada pela minha profissão. Adoro a escolha que fiz de diariamente escutar pessoas contando suas histórias, ressignificando suas dores e compartilhando suas alegrias.
              </p>
            </div>

            <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-[1.2rem] items-start">
              <about-card
                logourl=${logoAbrasme}
                alt="ABRASME"
                title="Congresso ABRASME &ndash; Associação Brasileira de Saúde Mental"
                body=${'2022\nApresentação e debate do artigo "O Enclausuramento da palavra"'}>
              </about-card>

              <about-card
                logourl=${logoSedes}
                alt="Instituto Sedes Sapientiae"
                title=${'Clínica Psicanalítica\nConflito e Sintoma'}
                body=${'Instituto Sedes Sapientiae\n2022 à 2024\nEstudo aprofundado nas obras completas de Freud e estudos de caso.'}>
              </about-card>

              <about-card
                logourl=${logoCprj}
                alt="CPRJ"
                title="Publicação do artigo"
                body=${"Revista Círculo Psicanalítico do Rio de Janeiro - 2024\nO enclausuramento da palavra. Cadernos de Psicanálise | CPRJ, v. 46, n. 51, p. 87-102, 5 nov. 2024."}>
              </about-card>

              <about-card class="self-end"
                logourl=${logoGerar}
                alt="Instituto Gerar"
                title=${'Curso Psicanálise,\nParentalidade &\nPerinatalidade'}
                body=${'Instituto Gerar de Psicanálise\n2025 / até momento'}>
              </about-card>
            </div>
          </div>
        </div>
      </section>
    `
  }
}
