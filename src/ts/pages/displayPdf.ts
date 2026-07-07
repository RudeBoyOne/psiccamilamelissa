import { LitElement, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { getDocument, GlobalWorkerOptions, type PDFDocumentProxy } from 'pdfjs-dist'
import { ChevronLeft, ChevronRight } from 'lucide'
import { createIconElement } from '../utils/icons'

GlobalWorkerOptions.workerSrc = new URL('../../../node_modules/pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString()

@customElement('pdf-viewer')
export class PdfViewer extends LitElement {
  createRenderRoot() { return this }

  @state()
  private _pageNum = 1

  @state()
  private _pageCount = 1

  private _pdfDoc: PDFDocumentProxy | null = null
  private _pageRendering = false
  private _canvas!: HTMLCanvasElement
  private _ctx!: CanvasRenderingContext2D
  private _scale = 1.5

  firstUpdated() {
    const relativePath = localStorage.getItem('pdf')
    if (!relativePath) {
      window.location.href = '/'
      return
    }

    const url = new URL(relativePath, window.location.origin).href
    this._loadPdf(url)
  }

  private async _loadPdf(url: string) {
    try {
      this._pdfDoc = await getDocument(url).promise
      if (!this._pdfDoc) {return}
      this._pageCount = this._pdfDoc.numPages
      this._setupCanvas()
      await this._renderPage(this._pageNum)

      const downloadBtn = this.querySelector('#download-pdf') as HTMLAnchorElement
      if (downloadBtn) {downloadBtn.href = url}
    } catch (error) {
      console.error('Erro ao carregar o PDF:', error)
    }
  }

  private _setupCanvas() {
    const container = this.querySelector('#pdf-container-canvas')!
    const canvas = document.createElement('canvas')
    canvas.id = 'pdf-canvas'
    canvas.className = 'border border-gray-300 rounded shadow-lg w-full max-w-full'
    container.appendChild(canvas)

    this._canvas = canvas
    this._ctx = canvas.getContext('2d')!
  }

  private async _renderPage(num: number) {
    if (!this._pdfDoc) {return}
    this._pageRendering = true

    try {
      const page = await this._pdfDoc.getPage(num)
      const viewport = page.getViewport({ scale: this._scale })
      this._canvas.height = viewport.height
      this._canvas.width = viewport.width

      const renderContext = { canvasContext: this._ctx, viewport }
      await page.render(renderContext).promise
      this._pageRendering = false
      this._pageNum = num
    } catch (error) {
      console.error('Erro ao renderizar página:', error)
      this._pageRendering = false
    }
  }

  private _queueRenderPage(num: number) {
    if (this._pageRendering) {
      setTimeout(() => this._queueRenderPage(num), 100)
    } else {
      this._renderPage(num)
    }
  }

  private _prevPage() {
    if (!this._pdfDoc || this._pageNum <= 1) {return}
    this._queueRenderPage(this._pageNum - 1)
  }

  private _nextPage() {
    if (!this._pdfDoc || this._pageNum >= this._pageCount) {return}
    this._queueRenderPage(this._pageNum + 1)
  }

  render() {
    return html`
      <div class="flex-1 bg-gray-100 py-8">
        <div class="max-w-4xl mx-auto px-4">
          <div class="flex items-center justify-center gap-4 mb-6">
            <a id="download-pdf" class="bg-accent text-white px-6 py-2 rounded-[8px] font-body hover:opacity-90 transition-opacity">Baixar PDF</a>
            <a href="/" class="bg-gray-500 text-white px-6 py-2 rounded-[8px] font-body hover:bg-gray-600 transition-colors">Voltar</a>
          </div>
          <div id="pdf-container-canvas" class="flex justify-center"></div>
          <nav class="flex justify-center items-center gap-4 mt-6" aria-label="Navegação PDF">
            <button @click=${this._prevPage} class="px-4 py-2 bg-white rounded border hover:bg-gray-50 transition-colors">
              ${createIconElement(ChevronLeft, 'w-5 h-5 text-accent')}
            </button>
            <span class="font-body text-sm text-gray-600">
              <span id="page-num">${this._pageNum}</span> / <span id="page-count">${this._pageCount}</span>
            </span>
            <button @click=${this._nextPage} class="px-4 py-2 bg-white rounded border hover:bg-gray-50 transition-colors">
              ${createIconElement(ChevronRight, 'w-5 h-5 text-accent')}
            </button>
          </nav>
        </div>
      </div>
    `
  }
}
