<template lang="pug">
  #pxPlatziMusic
    section.section
      nav.has-shadow
        .container
          input.input.is-large(
            type="text"
            placeholder= "Buscar cancion"
            v-model="searchQuery" )
          a.button.is-info.is-large(@click='search') Buscar
          a.button.is-danger.is-large &times;
      .container
        p
          small {{ searchMessage }}
      .container.results
        .columns
          .column(v-for="t in tracks")
            | {{ t.name }} - {{ t.artists[0].name }}
</template>

<script>
import trackService from '../services/track'

export default {
  name: 'pxPlatziMusic',
  data() {
    return {
      tracks: [],
      searchQuery: ''
    }
  },
  methods: {
    search() {
      if (!this.searchQuery) {
        //Evitar errores en consola valores truly or falsy
        return
      }
      trackService.search(this.searchQuery).then(res => {
        this.tracks = res.tracks.items
      })
    }
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length} `
    }
  }
}
</script>

<style lang="scss">
.results {
  margin-top: 50px;
}
</style>
