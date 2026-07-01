const createQuote = () => {
  const section = document.createElement('section')
  section.className = 'bg-accent py-16 lg:py-20'
  section.innerHTML = `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <p class="font-heading font-black text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.33] text-white mb-6">
        "Volte seus olhos para dentro, contemple suas próprias profundezas, aprenda primeiro a conhecer-se."
      </p>
      <p class="font-label text-[16px] sm:text-[18px] leading-[32px] tracking-[0.0278em] text-white/80">
        Sigmund Freud
      </p>
    </div>
  `

  return section
}

export default createQuote
