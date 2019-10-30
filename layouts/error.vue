<template>
  <page404></page404>
</template>

<script>
  import page404 from '~/components/404'
    export default {
      name: "error",
      props: ['error'],
      components: {
        page404
      },
      layout: 'wrong'
    }
</script>

<style scoped>

</style>
