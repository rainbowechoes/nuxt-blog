<template>
  <!-- 评论发表 -->
  <el-card shadow="hover" header="留言" id="postReview">
    <div style="padding: 0">
      <b-row>
        <b-col cols="12">
          <textarea style="width: 100%;height: 150px" placeholder="评论内容" id="comment-text" autocomplete="off"></textarea>
        </b-col>
      </b-row>
      <b-row>
        <el-button size="small" style="margin: 10px auto auto auto;" type="primary" plain>发表</el-button>
      </b-row>
    </div>
  </el-card>
</template>

<script>
  // import Tinymce from 'vue-tinymce-editor'
  // import '../../static/tinymce/zh_CN'
  export default {
    name: 'reviewer',
    data () {
      return {
        data: ''
      }
    },
    components: {
      // Tinymce
    }
  }
</script>

<style scoped>

</style>
