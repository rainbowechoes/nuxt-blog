<template>
    <div v-html="icon"></div>
</template>

<script>
  import jdenticon from 'jdenticon'
  export default {
    name: "dent-icon",
    props: {
      userId: String,
      imgSize: Number
    },
    computed: {
      icon: function () {
        return jdenticon.toSvg(this.userId, this.imgSize)
      }
    }
  }
</script>

<style scoped>

</style>
