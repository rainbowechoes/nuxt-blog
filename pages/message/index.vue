<template>
  <b-row>
    <!-- 桌面设备显示 -->
    <b-col lg="8">
      <el-card class="box-card info-card" header="留言板" shadow="hover">
        <div v-for="comment in comments" :key="comment" class="text item">
          <el-row :gutter="24">
            <el-col :span="12" style="text-align: left;" v-text="comment.commentContent">
            </el-col>
            <el-col :span="12" style="text-align: right;" v-text="comment.postDate"></el-col>
          </el-row>
          <el-divider class="message-line"></el-divider>
        </div>
        <pagination></pagination>
      </el-card>
      <reviewer></reviewer>
    </b-col>
    <b-col lg="4" class="d-none d-lg-block d-md-none ">
      <right></right>
    </b-col>
  </b-row>
</template>

<script>
  import Pagination from '~/components/pagination'
  import Reviewer from '~/components/reviewer'
  import {BRow, BCol} from 'bootstrap-vue'
  import Right from '~/components/right-bar'
  export default {
    name: "index",
    components: {
      Pagination,
      Reviewer,
      BRow,
      BCol,
      Right
    }
  }
</script>

<style scoped>

</style>
