<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        px-track(:track='track')
</template>

<script>
import trackService from '@/services/track.js'
import pxTrack from '@/components/layout/Track'
export default {
  components: { pxTrack },
  data() {
    return {
      track: {}
    }
  },
  created() {
    const id = this.$route.params.id
    trackService.getbyrId(id).then(res => {
      this.track = res
    })
  }
}
</script>

<style lang='scss' scoped>
.columns {
  margin: 20px;
}
</style>
