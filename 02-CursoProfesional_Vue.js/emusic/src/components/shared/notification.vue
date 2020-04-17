<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification.is-danger(v-show='notificationStatus')
          slot(name="body")
        .notification.is-success(v-show='!notificationStatus')
          slot(name="body")
</template>

<script>
export default {
  props: {
    notificationStatus: {
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.notification {
  margin: 10px;
}
</style>
