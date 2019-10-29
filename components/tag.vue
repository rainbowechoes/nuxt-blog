<template>
  <nuxt-link :to="url">
    <b-button :variant="color" size="sm" v-text="text" style="margin-top: 5px"></b-button>
  </nuxt-link>
</template>

<script>
  import {BButton} from 'bootstrap-vue'
  export default {
    name: "tag",
    props: {
      color: {
        type: String,
        default: 'primary'
      },
      url: {
        type: String,
        default: '/'
      },
      text: String
    },
    components: {
      BButton
    }
  }
</script>

<style scoped>

</style>
