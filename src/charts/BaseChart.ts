import api from '../utils/domApi'
import is from '../utils/is'

class BaseChart {
  el: HTMLElement
  width: string
  height: string

  constructor ({
    el,
    width,
    height
  }: {
    el: HTMLElement | string,
    width: string,
    height: string
  }) {
    this.el = is.string(el) ? api.querySelector(el) : el

    if (!is.element(this.el)) {
      throw new Error('el is not a element')
    }

    this.width = width || this.el.clientWidth.toString()
    this.height = height || this.el.clientHeight.toString()
  }

  // async update data
  update (data: object) {}

  render () {}

  // init config, event handler
  init () {
    this.bindEvent()
  }

  bindEvent () {
    window.addEventListener('resize', () => {})
    window.addEventListener('orientationchange', () => {})
  }
  unbindEvent () {
		window.removeEventListener('resize', () => {});
		window.removeEventListener('orientationchange', () => {});
  }
}

export default BaseChart