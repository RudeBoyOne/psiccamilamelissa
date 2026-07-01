import logoSrc from '../../assets/images/logo-camila.png'
import logoNameSrc from '../../assets/images/logo-nome.png'
import sendEmail from '../services/emailSendingService'
import 'bootstrap-icons/font/bootstrap-icons.css'

const toast = (message: string) => {
  const existing = document.getElementById('toast')
  if (existing) {existing.remove()}

  const toastEl = document.createElement('div')
  toastEl.id = 'toast'
  toastEl.className = 'fixed top-10 left-1/2 -translate-x-1/2 bg-accent/90 text-white px-6 py-4 rounded-feature shadow-lg z-[100] transition-opacity duration-300'
  toastEl.textContent = message

  document.body.appendChild(toastEl)

  setTimeout(() => {
    toastEl.style.opacity = '0'
    setTimeout(() => toastEl.remove(), 300)
  }, 4000)
}

const sanitizeInput = (str: string) => {
  return str.replace(/[<>"]/g, '').trim()
}

const createFooter = () => {
  const footer = document.createElement('footer')
  footer.id = 'contato'
  footer.className = 'bg-accent'
  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-24">
        <div class="flex-shrink-0">
          <a href="/" class="flex items-center gap-3 mb-8">
            <img src="${logoSrc}" alt="Camila Melissa" class="w-[58px] h-[58px] rounded-full object-cover">
            <img src="${logoNameSrc}" alt="Psicóloga Camila Melissa" class="h-[35px]">
          </a>

          <div class="flex items-center gap-4">
            <a href="https://www.instagram.com/psic.camilamelissa" target="_blank"
               class="text-white hover:text-white/80 transition-colors"
               aria-label="Instagram">
              <i class="bi bi-instagram text-3xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/camila-melissa-de-souza-a91413191" target="_blank"
               class="text-white hover:text-white/80 transition-colors"
               aria-label="LinkedIn">
              <i class="bi bi-linkedin text-3xl"></i>
            </a>
            <a href="https://wa.me/5511959525369?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20terapia/análise." target="_blank"
               class="text-white hover:text-white/80 transition-colors"
               aria-label="WhatsApp">
              <i class="bi bi-whatsapp text-3xl"></i>
            </a>
            <a href="mailto:contato@psiccamilamelissa.com.br"
               class="text-white hover:text-white/80 transition-colors"
               aria-label="Email">
              <i class="bi bi-envelope text-3xl"></i>
            </a>
          </div>
        </div>

        <div class="flex-1 max-w-[531px]">
          <h3 class="font-heading font-bold text-[32px] sm:text-[36px] leading-[1.2] text-white mb-8">
            Agende um horario!
          </h3>
          <form id="footer-contact-form" class="space-y-4">
            <div>
              <label class="font-body text-white text-[16px] block mb-1">nome</label>
              <input type="text" name="name" required maxlength="50"
                     class="w-full h-10 px-4 rounded-input bg-white text-gray-8 font-body text-sm focus:outline-none focus:ring-2 focus:ring-detail">
            </div>
            <div>
              <label class="font-body text-white text-[16px] block mb-1">email</label>
              <input type="email" name="email" required maxlength="100"
                     class="w-full h-10 px-4 rounded-input bg-white text-gray-8 font-body text-sm focus:outline-none focus:ring-2 focus:ring-detail">
            </div>
            <div>
              <label class="font-body text-white text-[16px] block mb-1">mensagem</label>
              <textarea name="message" required rows="5"
                        class="w-full px-4 py-3 rounded-input bg-white text-gray-8 font-body text-sm resize-none focus:outline-none focus:ring-2 focus:ring-detail"></textarea>
            </div>
            <button type="submit"
                    class="w-full h-10 bg-muted/85 text-black font-heading font-medium text-[22px] rounded-input hover:bg-muted transition-colors disabled:opacity-50">
              Enviar
            </button>
          </form>
        </div>
      </div>

      <div class="text-center mt-16 pt-8 border-t border-white/10">
        <p class="font-body text-[14px] text-[#D9DBE1]">
          psic.camilamelissa &copy; todos os direitos reservados
        </p>
      </div>
    </div>
  `

  const form = footer.querySelector<HTMLFormElement>('#footer-contact-form')!
  const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]')!

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const name = sanitizeInput(formData.get('name') as string)
    const email = sanitizeInput(formData.get('email') as string)
    const message = sanitizeInput(formData.get('message') as string)

    const messageToSend = { name, email, message }

    form.querySelectorAll('input, textarea, button').forEach(el => (el as HTMLInputElement).disabled = true)
    submitBtn.textContent = 'Enviando...'

    try {
      const result = await sendEmail(messageToSend)
      if (result) {
        form.reset()
        toast('Sua mensagem foi enviada!')
      }
    } catch {
      toast('Erro ao enviar mensagem. Tente novamente.')
    } finally {
      form.querySelectorAll('input, textarea, button').forEach(el => (el as HTMLInputElement).disabled = false)
      submitBtn.textContent = 'Enviar'
    }
  })

  return footer
}

export default createFooter
