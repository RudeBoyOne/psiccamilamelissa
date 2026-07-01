import { getDocument, GlobalWorkerOptions, type PDFDocumentProxy } from 'pdfjs-dist'
import { ChevronLeft, ChevronRight } from 'lucide'
import { createIconElement } from '../utils/icons'

GlobalWorkerOptions.workerSrc = new URL('../../../node_modules/pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString()

const renderPdfViewer = async () => {
  const main = document.getElementById('main')
  if (!main) {return}

  const container = document.createElement('div')
  container.className = 'flex-1 bg-gray-100 py-8'
  container.innerHTML = `
    <div class="max-w-4xl mx-auto px-4">
      <div class="flex items-center justify-center gap-4 mb-6">
        <a id="download-pdf" class="bg-accent text-white px-6 py-2 rounded-[8px] font-body hover:opacity-90 transition-opacity">Baixar PDF</a>
        <a href="/" class="bg-gray-500 text-white px-6 py-2 rounded-[8px] font-body hover:bg-gray-600 transition-colors">Voltar</a>
      </div>
      <div id="pdf-container-canvas" class="flex justify-center">
      </div>
      <nav class="flex justify-center items-center gap-4 mt-6" aria-label="Navegação PDF">
        <button id="prev-page" class="px-4 py-2 bg-white rounded border hover:bg-gray-50 transition-colors"></button>
        <span class="font-body text-sm text-gray-600">
          <span id="page-num">1</span> / <span id="page-count">1</span>
        </span>
        <button id="next-page" class="px-4 py-2 bg-white rounded border hover:bg-gray-50 transition-colors"></button>
      </nav>
    </div>
  `

  main.innerHTML = ''
  main.appendChild(container)

  document.getElementById('prev-page')!.appendChild(createIconElement(ChevronLeft, 'w-5 h-5 text-accent'))
  document.getElementById('next-page')!.appendChild(createIconElement(ChevronRight, 'w-5 h-5 text-accent'))

  const canvas = document.createElement('canvas')
  canvas.id = 'pdf-canvas'
  canvas.className = 'border border-gray-300 rounded shadow-lg w-full max-w-full'
  document.getElementById('pdf-container-canvas')!.appendChild(canvas)

  const ctx = canvas.getContext('2d')!
  const relativePath = localStorage.getItem('pdf')
  if (!relativePath) {
    window.location.href = '/'
    return
  }

  const url = new URL(relativePath, window.location.origin).href

  let pdfDoc: PDFDocumentProxy | null = null
  let pageNum = 1
  let pageRendering = false
  const scale = 1.5

  const renderPage = async (num: number) => {
    pageRendering = true
    try {
      const page = await pdfDoc!.getPage(num)
      const viewport = page.getViewport({ scale })
      canvas.height = viewport.height
      canvas.width = viewport.width
      const renderContext = { canvasContext: ctx, viewport }
      await page.render(renderContext).promise
      pageRendering = false
      document.getElementById('page-num')!.textContent = String(num)
    } catch (error) {
      console.error('Erro ao renderizar página:', error)
      pageRendering = false
    }
  }

  const queueRenderPage = (num: number) => {
    if (pageRendering) {
      setTimeout(() => queueRenderPage(num), 100)
    } else {
      renderPage(num)
    }
  }

  document.getElementById('prev-page')!.addEventListener('click', () => {
    if (!pdfDoc || pageNum <= 1) {return}
    pageNum--
    queueRenderPage(pageNum)
  })

  document.getElementById('next-page')!.addEventListener('click', () => {
    if (!pdfDoc || pageNum >= pdfDoc.numPages) {return}
    pageNum++
    queueRenderPage(pageNum)
  })

  try {
    pdfDoc = await getDocument(url).promise
    document.getElementById('page-count')!.textContent = String(pdfDoc.numPages)
    renderPage(pageNum)
  } catch (error) {
    console.error('Erro ao carregar o PDF:', error)
  }

  const downloadBtn = document.getElementById('download-pdf') as HTMLAnchorElement
  downloadBtn.href = url
}

export default renderPdfViewer
