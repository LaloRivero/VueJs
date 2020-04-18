<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar-link
        .container
          .nav-left
            .nav-item
              strong Platzi Music
          .nav-right.nav-menu
            router-link.nav-item(to="/")
              Buscar
            router-link.nav-item(to="about")  
              Nosotros
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