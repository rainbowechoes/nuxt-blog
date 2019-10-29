<template>
  <div>
    <el-card class="box-card" shadow="hover" header="最新文章">
      <div class="articles">
        <paper></paper>
        <paper></paper>
        <paper></paper>
        <paper></paper>
        <paper></paper>
        <paper></paper>
        <paper></paper>
      </div>
    </el-card>
    <pagination></pagination>
  </div>
</template>

<script>
import Paper from './paper'
import Micro from './micro-pager'
import Pagination from './pagination'

export default {
  name: 'left-bar',
  components: {
    Paper,
    Micro,
    Pagination
  }
}
</script>

<style scoped>

</style>
