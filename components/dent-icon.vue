<template>
    <div v-html="icon"></div>
</template>

<script>
  import jdenticon from 'jdenticon'
  export default {
    name: "dent-icon",
    props: {
      userId: {
        type: String,
        default: 'rainbow'
      },
      imgSize: {
        type: Number,
        required: false,
        default: 28
      }
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
