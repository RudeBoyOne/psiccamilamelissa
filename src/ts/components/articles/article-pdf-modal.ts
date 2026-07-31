import { LitElement, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide'
import { createIconElement } from '../../utils/icons'
import '../../../css/pdf-viewer.css'

@customElement('article-pdf-modal')
export class ArticlePdfModal extends LitElement {
  createRenderRoot() { return this }

  @state()
  private _isOpen = false

  @state()
  private _title = ''

  @state()
  private _currentPage = 1

  @state()
  private _totalPages = 0

  @state()
  private _scale = 1.0

  private _pdfjs: any = null
  private _pdfDoc: any = null
  private _renderTask: any = null

  private _handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this._isOpen) {
      this.close()
    }
  }

  connectedCallback() {
    super.connectedCallback()
    document.addEventListener('keydown', this._handleKeyDown)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    document.removeEventListener('keydown', this._handleKeyDown)
  }

  static open(title: string, pdfUrl: string) {
    const modal = document.querySelector('article-pdf-modal') as ArticlePdfModal
    if (modal) {
      modal._title = title
      modal._isOpen = true
      modal._currentPage = 1
      modal._scale = 1.0
      document.body.style.overflow = 'hidden'
      modal._loadPdf(pdfUrl)
    }
  }

  close() {
    this._cancelRender()

    if (this._pdfDoc) {
      this._pdfDoc.destroy?.()
      this._pdfDoc = null
    }

    this._currentPage = 1
    this._totalPages = 0
    this._scale = 1.0
    this._isOpen = false
    document.body.style.overflow = ''
  }

  private _onOverlayClick(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      this.close()
    }
  }

  private async _ensurePdfjs() {
    if (!this._pdfjs) {
      this._pdfjs = await import('pdfjs-dist/build/pdf.mjs')
      const pdfjsVersion = this._pdfjs.version
      this._pdfjs.GlobalWorkerOptions.workerSrc =
        `https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.mjs`
    }
    return this._pdfjs
  }

  private async _loadPdf(url: string) {
    try {
      const pdfjs = await this._ensurePdfjs()
      this._pdfDoc = await pdfjs.getDocument({ url }).promise
      this._totalPages = this._pdfDoc.numPages
      await this._renderPage(1)
    } catch {
      // PDF failed to load
    }
  }

  private async _renderPage(pageNum: number) {
    if (!this._pdfDoc) { return }

    this._cancelRender()
    this._currentPage = pageNum
    await this.updateComplete

    const page = await this._pdfDoc.getPage(pageNum)
    const viewport = page.getViewport({ scale: this._scale })

    const pageDiv = this.querySelector('.pdf-page') as HTMLDivElement
    if (!pageDiv) { return }
    pageDiv.innerHTML = ''

    const canvasWrapper = document.createElement('div')
    canvasWrapper.className = 'canvasWrapper'
    pageDiv.appendChild(canvasWrapper)

    const canvas = document.createElement('canvas')
    const dpr = window.devicePixelRatio || 1
    canvas.width = Math.floor(viewport.width * dpr)
    canvas.height = Math.floor(viewport.height * dpr)
    canvas.style.width = `${Math.floor(viewport.width)}px`
    canvas.style.height = `${Math.floor(viewport.height)}px`
    canvasWrapper.appendChild(canvas)

    const ctx = canvas.getContext('2d')!
    ctx.scale(dpr, dpr)
    this._renderTask = page.render({ canvasContext: ctx, viewport })
    await this._renderTask.promise
  }

  private _cancelRender() {
    if (this._renderTask) {
      this._renderTask.cancel()
      this._renderTask = null
    }
  }

  private async _prevPage() {
    if (this._currentPage <= 1) { return }
    await this._renderPage(this._currentPage - 1)
  }

  private async _nextPage() {
    if (this._currentPage >= this._totalPages) { return }
    await this._renderPage(this._currentPage + 1)
  }

  private async _zoomIn() {
    this._scale = Math.min(this._scale + 0.25, 3.0)
    await this._renderPage(this._currentPage)
  }

  private async _zoomOut() {
    this._scale = Math.max(this._scale - 0.25, 0.5)
    await this._renderPage(this._currentPage)
  }

  render() {
    if (!this._isOpen) {
      return html``
    }

    const zoomPercent = Math.round(this._scale * 100)

    return html`
      <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-2 sm:p-4 lg:p-8"
        @click=${this._onOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-label=${this._title}
      >
        <div class="relative flex flex-col w-full h-full max-w-6xl bg-white rounded-feature overflow-hidden motion-reduce:transition-none transition-[opacity,transform] duration-300 ease-in-out opacity-100 scale-100">

          <div class="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-gray-1 shrink-0">
            <h2 class="font-heading font-bold text-lg sm:text-heading-md text-text-gray truncate pr-4">
              ${this._title}
            </h2>
            <button
              @click=${() => this.close()}
              class="flex items-center justify-center w-10 h-10 rounded-full text-gray-6 hover:bg-muted transition-colors shrink-0"
              aria-label="Fechar leitor"
            >
              ${createIconElement(X, 'w-6 h-6')}
            </button>
          </div>

          <div class="flex-1 min-h-0 overflow-auto flex justify-center bg-gray-500/5">
            <div class="pdf-page relative" style="min-height: 100%;">
            </div>
          </div>

          <div class="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-t border-gray-1 shrink-0">
            <div class="flex items-center gap-2">
              <button
                @click=${() => this._prevPage()}
                ?disabled=${this._currentPage <= 1}
                class="flex items-center justify-center w-8 h-8 rounded text-gray-6 hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Página anterior"
              >
                ${createIconElement(ChevronLeft, 'w-5 h-5')}
              </button>
              <span class="font-body text-sm text-gray-6 tabular-nums">
                ${this._currentPage} / ${this._totalPages}
              </span>
              <button
                @click=${() => this._nextPage()}
                ?disabled=${this._currentPage >= this._totalPages}
                class="flex items-center justify-center w-8 h-8 rounded text-gray-6 hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Próxima página"
              >
                ${createIconElement(ChevronRight, 'w-5 h-5')}
              </button>
            </div>

            <div class="flex items-center gap-2">
              <button
                @click=${() => this._zoomOut()}
                ?disabled=${this._scale <= 0.5}
                class="flex items-center justify-center w-8 h-8 rounded text-gray-6 hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Diminuir zoom"
              >
                ${createIconElement(ZoomOut, 'w-5 h-5')}
              </button>
              <span class="font-body text-sm text-gray-6 tabular-nums min-w-[3rem] text-center">
                ${zoomPercent}%
              </span>
              <button
                @click=${() => this._zoomIn()}
                ?disabled=${this._scale >= 3.0}
                class="flex items-center justify-center w-8 h-8 rounded text-gray-6 hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Aumentar zoom"
              >
                ${createIconElement(ZoomIn, 'w-5 h-5')}
              </button>
            </div>
          </div>

        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'article-pdf-modal': ArticlePdfModal
  }
}
