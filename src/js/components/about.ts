import logoAbrasme from '../../assets/images/logo-abrasme.png'
import logoSedes from '../../assets/images/logo-sedes.png'
import logoCprj from '../../assets/images/logo-cprj.png'
import logoGerar from '../../assets/images/logo-gerar.png'

const createAbout = () => {
  const section = document.createElement('section')
  section.id = 'sobre'
  section.className = 'bg-muted py-16 lg:py-20'
  section.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div class="lg:w-[421px] flex-shrink-0">
          <h2 class="font-heading font-bold text-[36px] sm:text-[48px] leading-[1.2] text-gray-7 mb-6">
            Olá, eu sou<br>a Camila
          </h2>
          <p class="font-label font-medium text-[18px] sm:text-[20px] leading-[36px] tracking-[0.025em] text-white">
            psicóloga formada pela Universidade Cruzeiro do Sul desde 2019. Trabalho como psicóloga clínica desde a minha formação e sou completamente encantada pela minha profissão. Adoro a escolha que fiz de diariamente escutar pessoas contando suas histórias, ressignificando suas dores e compartilhando suas alegrias.
          </p>
        </div>

        <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="bg-white rounded-feature p-6 shadow-card">
            <img src="${logoAbrasme}" alt="ABRASME" class="h-[53px] object-contain mb-4">
            <h3 class="font-heading font-bold text-[22px] leading-[22px] text-text-gray mb-3">
              Congresso ABRASME – Associação Brasileira de Saúde Mental
            </h3>
            <p class="font-body text-[14px] leading-[24px] tracking-[0.0214em] text-gray-5">
              2022<br>
              Apresentação e debate do artigo "O Enclausuramento da palavra"
            </p>
          </div>

          <div class="bg-white rounded-feature p-6 shadow-card">
            <img src="${logoSedes}" alt="Instituto Sedes Sapientiae" class="h-[76px] object-contain mb-4">
            <h3 class="font-heading font-bold text-[22px] leading-[22px] text-text-gray mb-3">
              Clínica Psicanalítica<br>Conflito e Sintoma
            </h3>
            <p class="font-body text-[14px] leading-[24px] tracking-[0.0214em] text-gray-5">
              Instituto Sedes Sapientiae<br>
              2022 à 2024<br>
              Estudo aprofundado nas obras completas de Freud e estudos de caso.
            </p>
          </div>

          <div class="bg-white rounded-feature p-6 shadow-card">
            <img src="${logoCprj}" alt="CPRJ" class="h-[66px] object-contain mb-4">
            <h3 class="font-heading font-bold text-[22px] leading-[22px] text-text-gray mb-3">
              Publicação do artigo
            </h3>
            <p class="font-body text-[14px] leading-[24px] tracking-[0.0214em] text-gray-5">
              Revista Circulo Psicanalítico do Rio de Janeiro - 2024<br>
              O enclausuramento da palavra. Cadernos de Psicanálise | CPRJ, v. 46, n. 51, p. 87-102, 5 nov. 2024.
            </p>
          </div>

          <div class="bg-white rounded-feature p-6 shadow-card">
            <img src="${logoGerar}" alt="Instituto Gerar" class="h-[35px] object-contain mb-4">
            <h3 class="font-heading font-bold text-[22px] leading-[22px] text-text-gray mb-3">
              Curso Psicanálise,<br>Parentalidade &<br>Perinatalidade
            </h3>
            <p class="font-body text-[14px] leading-[24px] tracking-[0.0214em] text-gray-5">
              Instituto Gerar de Psicanálise<br>
              2025 / até momento
            </p>
          </div>
        </div>
      </div>
    </div>
  `

  return section
}

export default createAbout
