<template lang="pug">
  main
    transition(name="move")
      pm-notification(v-show="showNotification" :color="hasColor")
        p(slot="body" v-if="isTrack") No se encontraron resultados
        p(slot="body" v-else) Se encontró {{ tracks.length }} canciones

    transition(name="move")
      pm-loader(v-show="isLoading")

    section.section(v-show="!isLoading")
      nav.nav
        .container
          .has-addons.field
            .control.is-expanded
              input.input.is-large(
                type="text", 
                placeholder="Buscar canciones",
                v-model="searchQuery",
                @keyup.enter="search")
            .control
              a.button.is-info.is-large(@click="search") Buscar
            .control
              a.button.is-danger.is-large &times;
      
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="(t, index) in tracks" :key="index")
            pm-track(
              v-blur="t.preview_url"
              :class="{'is-active': t.id === selectedTrack}",
              :track="t")
</template>

<script>
import trackService from '../services/track'

import PmTrack from './Track.vue'

import PmLoader from './shared/Loader.vue'
import PmNotification from './shared/Notification.vue'

import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    PmTrack,
    PmLoader,
    PmNotification
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false,
      isTrack: false,
      hasColor: true
    }
  },
  created () {
    this.$bus.$on('select', (track) => {
      console.log(track)
      this.selectedTrack = track.id
    })
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }

      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(res => {
          console.log(res)
          // this.showNotification = res.tracks.total === 0
          if (res.tracks.total === 0) {
            this.isTrack = true
            this.hasColor = true
          } else {
            this.isTrack = false
            this.hasColor = false
          }
          this.showNotification = true
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    }
    // setSelectedTrack (id) {
    //   this.selectedTrack = id
    // }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 5000)
      }
    }
  },
  computed: {
    ...mapState(['track'])
  //   searchMessage: function () {
  //     return `Encontrados: ${this.tracks.length}`
  //   }
  }
}
</script>

<style lang="sass" scoped>  
  .results
    margin-top: 50px
  .is-active
    border: 3px solid #23d160
</style>
