<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar-link
        .container
          .navbar-start
            .navbar-item
              strong Platzi Music
          .navbar-end.navbar-menu
    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que están Vue-nisimas
        px-player
</template>

<script>
import pxPlayer from '@/components/pxPlayer'
export default {
  components: { pxPlayer }
}
</script>