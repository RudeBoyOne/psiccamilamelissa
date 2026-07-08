import { LitElement, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import logoSrc from '../../assets/images/logo-camila.png'
import logoNameSrc from '../../assets/images/logo-nome.png'
import sendEmail from '../services/emailSendingService'
import 'bootstrap-icons/font/bootstrap-icons.css'

const sanitizeInput = (str: string) => {
  return str.replace(/[<>"]/g, '').trim()
}

@customElement('contact-form')
export class ContactForm extends LitElement {
  createRenderRoot() { return this }

  @state()
  private _submitting = false

  @state()
  private _toastMessage: string | null = null

  @state()
  private _toastType: 'success' | 'error' = 'success'

  private _showToast(msg: string, type: 'success' | 'error') {
    this._toastMessage = msg
    this._toastType = type
    setTimeout(() => { this._toastMessage = null }, 4000)
  }

  private async _handleSubmit(e: SubmitEvent) {
    e.preventDefault()

    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    const name = sanitizeInput(formData.get('name') as string)
    const email = sanitizeInput(formData.get('email') as string)
    const message = sanitizeInput(formData.get('message') as string)

    if (!name || !email || !message) {return}

    this._submitting = true

    try {
      const result = await sendEmail({ name, email, message })
      if (result) {
        form.reset()
        this._showToast('Sua mensagem foi enviada!', 'success')
      }
    } catch {
      this._showToast('Erro ao enviar mensagem. Tente novamente.', 'error')
    } finally {
      this._submitting = false
    }
  }

  render() {
    return html`
      <form @submit=${this._handleSubmit} class="space-y-4">
        <div>
          <label for="contact-name" class="font-body text-white text-base block mb-1">nome</label>
          <input id="contact-name" type="text" name="name" required maxlength="50"
                 class="w-full input rounded-input bg-white text-gray-8 font-body text-sm focus:outline-none focus:ring-2 focus:ring-detail"
                 ?disabled=${this._submitting}>
        </div>
        <div>
          <label for="contact-email" class="font-body text-white text-base block mb-1">email</label>
          <input id="contact-email" type="email" name="email" required maxlength="100"
                 class="w-full input rounded-input bg-white text-gray-8 font-body text-sm focus:outline-none focus:ring-2 focus:ring-detail"
                 ?disabled=${this._submitting}>
        </div>
        <div>
          <label for="contact-message" class="font-body text-white text-base block mb-1">mensagem</label>
          <textarea id="contact-message" name="message" required rows="5"
                    class="w-full textarea rounded-input bg-white text-gray-8 font-body text-sm resize-none focus:outline-none focus:ring-2 focus:ring-detail"
                    ?disabled=${this._submitting}></textarea>
        </div>
        <button type="submit"
                class="w-full h-11 bg-muted/85 text-black font-heading font-medium text-body-lg rounded-input hover:bg-muted motion-reduce:transition-none transition-colors disabled:opacity-50"
                ?disabled=${this._submitting}>
          ${this._submitting ? 'Enviando...' : 'Enviar'}
        </button>

        ${this._toastMessage
          ? html`
            <div class="alert rounded-feature shadow-lg text-white ${this._toastType === 'success' ? 'bg-accent' : 'bg-error'}">
              <span>${this._toastMessage}</span>
            </div>
          `
          : ''}
      </form>
    `
  }
}

@customElement('app-footer')
export class AppFooter extends LitElement {
  createRenderRoot() { return this }

  render() {
    return html`
      <footer id="contato" class="bg-accent">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div class="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <div class="flex-shrink-0">
              <a href="/" class="flex items-center gap-3 mb-8 py-1" aria-label="Página inicial">
                <img src="${logoSrc}" alt="Camila Melissa" class="w-[53px] h-[53px] lg:w-[58px] lg:h-[58px] rounded-full object-cover">
                <img src="${logoNameSrc}" alt="Psicóloga Camila Melissa" class="h-[33px] lg:h-[35px]">
              </a>

              <div class="flex items-center gap-2">
                <a href="https://www.instagram.com/psic.camilamelissa" target="_blank"
                   class="text-white hover:text-white/80 motion-reduce:transition-none transition-colors p-2"
                   aria-label="Instagram"
                   rel="noopener noreferrer">
                  <i class="bi bi-instagram text-3xl block"></i>
                </a>
                <a href="https://www.linkedin.com/in/camila-melissa-de-souza-a91413191" target="_blank"
                   class="text-white hover:text-white/80 motion-reduce:transition-none transition-colors p-2"
                   aria-label="LinkedIn"
                   rel="noopener noreferrer">
                  <i class="bi bi-linkedin text-3xl block"></i>
                </a>
                <a href="https://wa.me/5511959525369?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20terapia/análise." target="_blank"
                   class="text-white hover:text-white/80 motion-reduce:transition-none transition-colors p-2"
                   aria-label="WhatsApp"
                   rel="noopener noreferrer">
                  <i class="bi bi-whatsapp text-3xl block"></i>
                </a>
                <a href="mailto:contato@psiccamilamelissa.com.br"
                   class="text-white hover:text-white/80 motion-reduce:transition-none transition-colors p-2"
                   aria-label="Email">
                  <i class="bi bi-envelope text-3xl block"></i>
                </a>
              </div>
            </div>

            <div class="flex-1 max-w-[531px]">
              <h3 class="font-heading font-bold text-3xl sm:text-4xl leading-[1.2] text-white mb-8">
                Agende um horario!
              </h3>
              <contact-form></contact-form>
            </div>
          </div>

            <div class="text-center mt-16 pt-8 border-t border-white/10">
            <p class="font-body text-body-sm text-white/80">
              psic.camilamelissa &copy; todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    `
  }
}
