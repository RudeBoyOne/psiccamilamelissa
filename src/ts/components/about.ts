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
  logoUrl = ''

  @property()
  alt = ''

  @property()
  title = ''

  @property()
  body = ''

  render() {
    return html`
      <div class="bg-white rounded-feature p-6 shadow-card">
        <img src="${this.logoUrl}" alt="${this.alt}" class="h-[53px] object-contain mb-4">
        <h3 class="font-heading font-bold text-[22px] leading-[22px] text-text-gray mb-3">
          ${this.title}
        </h3>
        <p class="font-body text-[14px] leading-[24px] tracking-[0.0214em] text-gray-6">
          ${this.body}
        </p>
      </div>
    `
  }
}

@customElement('about-section')
export class AboutSection extends LitElement {
  createRenderRoot() { return this }

  render() {
    return html`
      <section id="sobre" class="bg-muted py-16 lg:py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div class="lg:w-[421px] flex-shrink-0">
              <h2 class="font-heading font-bold text-[36px] sm:text-[48px] leading-[1.2] text-gray-7 mb-6">
                Olá, eu sou<br>a Camila
              </h2>
              <p class="font-label font-medium text-[18px] sm:text-[20px] leading-[36px] tracking-[0.025em] text-gray-7">
                psicóloga formada pela Universidade Cruzeiro do Sul desde 2019. Trabalho como psicóloga clínica desde a minha formação e sou completamente encantada pela minha profissão. Adoro a escolha que fiz de diariamente escutar pessoas contando suas histórias, ressignificando suas dores e compartilhando suas alegrias.
              </p>
            </div>

            <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <about-card
                logoUrl="${logoAbrasme}"
                alt="ABRASME"
                title="Congresso ABRASME – Associação Brasileira de Saúde Mental"
                body="2022\nApresentação e debate do artigo &quot;O Enclausuramento da palavra&quot;">
              </about-card>

              <about-card
                logoUrl="${logoSedes}"
                alt="Instituto Sedes Sapientiae"
                title="Clínica Psicanalítica\nConflito e Sintoma"
                body="Instituto Sedes Sapientiae\n2022 à 2024\nEstudo aprofundado nas obras completas de Freud e estudos de caso.">
              </about-card>

              <about-card
                logoUrl="${logoCprj}"
                alt="CPRJ"
                title="Publicação do artigo"
                body="Revista Circulo Psicanalítico do Rio de Janeiro - 2024\nO enclausuramento da palavra. Cadernos de Psicanálise | CPRJ, v. 46, n. 51, p. 87-102, 5 nov. 2024.">
              </about-card>

              <about-card
                logoUrl="${logoGerar}"
                alt="Instituto Gerar"
                title="Curso Psicanálise,\nParentalidade &\nPerinatalidade"
                body="Instituto Gerar de Psicanálise\n2025 / até momento">
              </about-card>
            </div>
          </div>
        </div>
      </section>
    `
  }
}
