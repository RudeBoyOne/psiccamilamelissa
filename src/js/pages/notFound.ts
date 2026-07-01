const renderNotFound = () => {
  const main = document.getElementById('main')
  if (!main) {return}

  main.innerHTML = `
    <div class="flex-1 flex items-center justify-center bg-white">
      <div class="text-center px-4">
        <h1 class="font-heading font-bold text-6xl text-accent mb-4">404</h1>
        <p class="font-body text-xl text-gray-6 mb-8">Página Não Encontrada</p>
        <p class="font-body text-gray-5 mb-8 max-w-md mx-auto">
          A página que você está tentando acessar não existe. Verifique a URL ou volte para a página inicial.
        </p>
        <a href="/" class="inline-block bg-accent text-white font-body font-bold text-lg px-8 py-4 rounded-[8px] hover:opacity-90 transition-opacity">
          Voltar para o Início
        </a>
      </div>
    </div>
  `
}

export default renderNotFound
