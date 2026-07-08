import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('quote-section')
export class QuoteSection extends LitElement {
  createRenderRoot() { return this }

  @property()
  text = '"Volte seus olhos para dentro, contemple suas próprias profundezas, aprenda primeiro a conhecer-se."'

  @property()
  author = 'Sigmund Freud'

  render() {
    return html`
      <section class="bg-accent py-16 lg:py-20">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p class="font-heading font-black text-[28px] sm:text-4xl lg:text-heading-lg leading-[1.33] text-white mb-6">
            ${this.text}
          </p>
          <p class="font-label text-base sm:text-lg leading-8 tracking-[0.0278em] text-white/80">
            ${this.author}
          </p>
        </div>
      </section>
    `
  }
}
