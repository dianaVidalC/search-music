import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    search: 'Search',
    about: 'About',
    title: 'Songs that are Vue-nísimas!'
  },
  es: {
    search: 'Búsqueda',
    about: 'Nosotros',
    title: '¡Canciones que están Vue-nísimas!'
  }
}

const i18n = new VueI18n({
  messages,
  locale: 'es'
})

export default i18n
