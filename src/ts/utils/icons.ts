import { createElement } from 'lucide'

export const createIconElement = (icon: object, className = ''): SVGElement => {
  const el = createElement(icon as never)
  if (className) {
    className.split(' ').forEach(c => el.classList.add(c))
  }
  el.setAttribute('aria-hidden', 'true')
  return el
}
