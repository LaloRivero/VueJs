<template lang="pug">
  #app
    px-header
    router-view
    px-footer
</template>

<script>
import pxHeader from '@/components/layout/pxHeader'
import pxFooter from '@/components/layout/pxFooter'

export default {
  name: 'App',
  components: { pxHeader, pxFooter }
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
