<template>
  <div>
    <el-card class="box-card info-card" header="留言板" shadow="hover">
      <div v-for="comment in comments" :key="comment.commentContent" class="text item">
        <b-row>
          <b-col cols="6" md="8" style="text-align: left;" v-text="comment.commentContent">
          </b-col>
          <b-col cols="6" md="4" style="text-align: right;" v-text="comment.postDate"></b-col>
        </b-row>
        <el-divider class="message-line"></el-divider>
      </div>
      <pagination></pagination>
    </el-card>
    <reviewer></reviewer>
  </div>
</template>

<script>
  import Pagination from '~/components/pagination'
  import Reviewer from '~/components/reviewer'
  import {BRow, BCol} from 'bootstrap-vue'
  export default {
    name: 'message-board',
    components: {
      Pagination,
      Reviewer,
      BRow,
      BCol
    },
    props: {
      comments: {
        type: Array,
        default: () => [
          {
            commentContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt esse iure molestias quasi recusandae tempora velit, voluptate?',
            postDate: '2018年5月3日 10:26'
          },
          {
            commentContent: 'sdfgdsjhkfsdfsdf',
            postDate: '2018年5月3日 10:26'
          },
          {
            commentContent: 'sdfgdsjhkfsdfsdf',
            postDate: '2018年5月3日 10:26'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .text {
    font-size: 14px;
  }

  /deep/.message-line {
    margin: 10px 0;
  }
</style>
