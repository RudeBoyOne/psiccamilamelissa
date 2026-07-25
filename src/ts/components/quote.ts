import bgSvg from '../../assets/images/quote-bg.svg';

export class QuoteSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="bg-accent py-16 lg:py-20 relative overflow-hidden">
        <img src="${bgSvg}" class="absolute inset-0 w-full h-full pointer-events-none z-0 object-cover" alt="" aria-hidden="true" loading="lazy">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <p class="font-heading font-black text-[28px] sm:text-4xl lg:text-heading-lg leading-[1.33] text-white mb-6">
            "Volte seus olhos para dentro, contemple suas próprias profundezas, aprenda primeiro a conhecer-se."
          </p>
          <p class="font-label text-base sm:text-lg leading-8 tracking-[0.0278em] text-white/80">
            Sigmund Freud
          </p>
        </div>
      </section>
    `
  }
}

customElements.define('quote-section', QuoteSection)
