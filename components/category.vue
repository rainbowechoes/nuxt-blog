<template>
<!--    <el-badge :value="count" class="item" :type="badgeColor">-->
    <nuxt-link :to="url">
      <!--<el-button size="small" v-text="text" :variant="categoryColor">-->
      <!--</el-button>-->
      {{text}}
    </nuxt-link>
<!--    </el-badge>-->
</template>

<script>
  export default {
    name: "category",
    props: {
      // 跳转url，必须
      url: {
        type: String,
        default: '/'
      },
      // 分类文本，必须
      text: String,
      // 分类的文章的数量，必须
      count: {
        type: Number,
        default: 0
      },
      // badge的颜色，可选
      badgeColor: {
        type: String,
        default: 'primary'
      },
      // 分类按钮的颜色，可选
      categoryColor: {
        type: String,
        default: 'primary'
      }
    }
  }
</script>

<style scoped>
  .item {
    margin-top: 10px;
    margin-right: 20px;
  }
</style>
