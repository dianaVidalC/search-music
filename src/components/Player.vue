<template lang="pug">
    .content(v-if="track && track.album")
        p
            img(:src="track.album.images[0].url")
        p
            strong {{ track.name }}
            small [{{ track.duration_ms | ms-to-mm }}]
        p
            audio(controls, :src="track.preview_url")
</template>
<script>
import { mapState } from 'vuex'
export default {
  // created () {
  //     this.$bus.$on("set-track", (track) => {
  //         // console.log(track)
  //         this.track = track;
  //     })
  // }
  computed: {
    ...mapState(['track'])
  }
}
</script>
<style lang="sass" scoped>
    img
        width: 124px
        border-radius: 50%
    audio
        margin-bottom: 3rem
</style>

