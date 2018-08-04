const blur = {}

function setBlur (el, binding) {
  el.style.filter = !binding.value ? 'blur(2px)' : 'none'
  el.style.cursor = !binding.value ? 'not-allowed' : 'inherit'

  el.querySelectorAll('button').forEach(e => {
    if (!binding.value) {
      e.setAttribute('disabled', true)
    } else {
      e.removeAttribute('disabled')
    }
  })
}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding) {
      setBlur(el, binding)
    }
  })
}
export default blur
