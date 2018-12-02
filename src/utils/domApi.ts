function querySelector (selector: string): HTMLElement {
  return document.querySelector(selector);
}

function createSVG (tag: string) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', tag)
  return element
}

export default {
  querySelector,
  createSVG
}