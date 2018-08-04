<template lang="pug">
    .container(v-if="track && track.id")
        .columns
            .column.is-4.has-text-centered
                pm-loader(v-show="isLoading")
                // pm-track(:track='track')
                figure.media-left
                    p.image
                        img(:src="track.album.images[0].url")
                    p.button-bar
                        a.button.is-primary.is-large
                            span.icon(@click="selectTrack") ▶
            .column.is-8
                .panel
                    .panel-heading
                        h1.title {{ trackTitle }}
                    .panel-block
                        article.media
                            .media-content
                                .content
                                    ul(v-for="(v, k) in track")
                                        li 
                                            strong {{ k }} :&nbsp;
                                            span {{ v }}
                            nav.level
                                .level-left
                                    a.level-item

</template>

<script>
// import trackService from '../services/track'
import trackMixins from './mixins/track'
import PmLoader from './shared/Loader.vue'

import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  mixins: [ trackMixins ],
  components: { PmLoader },
  data () {
    return {
      isLoading: true
    }
  },
  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },
  created () {
    const id = this.$route.params.id

    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({ id })
        .then(() => {
          console.log('Track loaded ...')
          this.isLoading = false
        })
    }
    // trackService.getById(id)
    //     .then(res => {
    //         this.track = res
    //         this.isLoading = false
    //         //console.log(res)
    //     })
  },
  methods: {
    ...mapActions(['getTrackById'])
  }
}
</script>

 <style lang="sass" scoped>
    .columns
        margin: 2rem 0
    .button-bar
        margin-top: 20px
 </style>
 