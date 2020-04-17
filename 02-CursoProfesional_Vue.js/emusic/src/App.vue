<template lang="pug">
  #app
    px-header
    px-notification(v-show="showNotification", :notificationStatus='notificationStatus')
      p(slot="body") No se encontraron resultados
    px-notification(v-show="!showNotification", :notificationStatus='notificationStatus')
      p(slot="body") Se encontraron {{ searchMessage }} resultados
    px-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav.has-shadow
        .container.flexbox
          input.input.is-large(
            type="text"
            placeholder= "Buscar cancion"
            v-model="searchQuery" )
          a.button.is-info.is-large(@click='search') Buscar
          a.button.is-danger.is-large &times;
      .container
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            px-track(
              :class="{'is-active':t.id===selectedTrack}"
              :track="t",
              @select="setSelectedTrack") //<- componente hijo - importante poner v-bind
            //- | {{ t.name }} - {{ t.artists[0].name }}
    px-footer
</template>

<script>
import pxHeader from '@/components/layout/pxHeader'
import pxFooter from '@/components/layout/pxFooter'
import trackService from '@/services/track'
import pxTrack from '@/components/layout/Track'
import pxLoader from '@/components/shared/loader'
import pxNotification from '@/components/shared/notification'
export default {
  name: 'App',
  components: { pxHeader, pxFooter, pxTrack, pxLoader, pxNotification },
  data() {
    return {
      tracks: [],
      searchQuery: '',
      isLoading: false,
      selectedTrack: '',
      showNotification: false
    }
  },
  methods: {
    search() {
      if (!this.searchQuery) {
        //Evitar errores en consola valores truly or falsy
        return
      }
      this.isLoading = true
      trackService.search(this.searchQuery).then(res => {
        this.showNotification = res.tracks.total === 0
        this.tracks = res.tracks.items
        this.isLoading = false
      })
    },
    setSelectedTrack(id) {
      this.selectedTrack = id
    }
  },
  computed: {
    searchMessage() {
      return `${this.tracks.length}`
    },
    notificationStatus() {
      if (this.showNotification) {
        return true
      } else {
        return false
      }
    }
  },
  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
.results {
  margin-top: 50px;
}
.flexbox {
  display: flex;
}
.is-active {
  border: 3px solid #23d160;
}
</style>
