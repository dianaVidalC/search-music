<template lang="pug">
    section.hero.is-primary.is-bold.is-medium
        .hero-head
            header.navbar
                .container
                    .navbar-brand
                        .navbar-item
                            .nav-item
                                strong 📻 Search Music
                        .navbar-item
                            a.nav-item(@click="selectLang('en')") EN
                            a.nav-item(@click="selectLang('es')") ES

        .hero-body
            .container.has-text-centered.is-fullwidth
                h1.title Search Music
                h2.subtitle {{ $t('title') }}
                pm-player
        .hero-foot
            nav.tabs.is-boxed
                .container
                    ul
                        li(@click="clicked(1)" :class="{'is-active': isActive==1}")
                            router-link.nav-item(to="/") {{ $t('search') }}
                        li(@click="clicked(2)" :class="{'is-active': isActive==2}")
                            router-link.nav-item(to="/about") {{ $t('about') }} 
</template> 

<script>
import PmPlayer from '../../components/Player.vue'

export default {
  components: {
    PmPlayer
  },
  data () {
    return {
      isActive: 1
    }
  },
  methods: {
    clicked (e) {
      this.isActive = e
    },
    selectLang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style lang="sass" scoped>
ul
    li
        margin-bottom: -2px
a
    margin-right: 10px   
</style>