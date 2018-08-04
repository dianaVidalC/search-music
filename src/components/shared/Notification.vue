<template lang="pug">
    .container
        .columns.is-centered
            .column.is-5
                .notification.has-text-centered(:class= "[color? 'is-danger': 'is-info']")
                    slot(name="body") Algo anduvo mal
</template>
<script>
export default {
  props: ['color']
}
</script>

<style lang="sass" scoped>
    .notification
        margin: 10px
</style>

