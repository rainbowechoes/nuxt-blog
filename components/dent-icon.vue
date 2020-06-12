<template>
  <div>
    <el-avatar :src="url" :size="imgSize" v-if="userId === ''"></el-avatar>
    <div v-html="icon" v-if="userId !== ''"></div>
  </div>
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
      },
      url: String
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
