function isString (input) {
  return typeof input === 'string'
}

function isFunction (input) {
  return typeof input === 'function'
}

function isElement (input) {
  return input instanceof HTMLElement
}

export default {
  string: isString,
  function: isFunction,
  element: isElement
}