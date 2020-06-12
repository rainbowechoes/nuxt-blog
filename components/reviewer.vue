<template>
  <!-- 评论发表 -->
  <el-card shadow="hover" header="留言" id="postReview">
    <div style="padding: 0">
      <b-row>
        <b-col cols="12">
          <a-textarea placeholder="快来发表你的想法吧" :rows="4" allowClear/>
        </b-col>
      </b-row>
      <b-row>
        <el-button size="small" style="margin: 10px auto auto auto;" type="primary" plain>发表</el-button>
      </b-row>
    </div>
  </el-card>
</template>

<script>
  import {BRow, BCol} from 'bootstrap-vue'
  export default {
    name: 'reviewer',
    data () {
      return {
        data: ''
      }
    },
    components: {
      BRow,
      BCol
    }
  }
</script>

<style scoped>

</style>
