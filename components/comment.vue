<template>
  <!-- 评论内容 -->
  <el-card class="info-card" shadow="hover" header="热门评论">
    <div class="comments">
      <ul id="comments">
        <li v-for="item in comments">
          <review :comment="item"></review>
        </li>
      </ul>
    </div>
    <!-- 分页 -->
    <pagination class="info-card" style="margin-bottom: 0"></pagination>
  </el-card>
</template>

<script>
  import Pagination from '~/components/pagination'
  import Review from './review'
  export default {
    // 评论
    name: 'comment',
    components: {
      Pagination,
      Review
    },
    data() {
      return {
        comments: [
          {
            userId: 'rainbow',
            username: 'rainbow',
            date: '5分钟前',
            formatDate: '2019年5月5日 14:23',
            content: '评论内容',
            reviews: [
              {
                userId: 'heqiaoying',
                username: 'heqiao',
                date: '3分钟前',
                formatDate: '2019年5月5日 14:25',
                content: '回复内容1'
              },
              {
                userId: 'heqiaoying',
                username: 'heqiao',
                date: '2分钟前',
                formatDate: '2019年5月5日 14:26',
                content: '回复内容2'
              },
              {
                userId: 'heqiaoying',
                username: 'heqiao',
                date: '1分钟前',
                formatDate: '2019年5月5日 14:26',
                content: '回复内容3'
              }
            ]
          }
        ]
      }
    },
    mounted() {
      this.obtainComment();
    },
    methods: {
      /**
       * 根据文章id获取文章评论，获取当前页以及左右各一页，一共三页的数据
       */
      obtainComment() {

      }
    },
    props: {
      /**
       * 文章id，用于查找文章的评论数据
       */
      article: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

  ul {
    padding-left: 0;
  }

  ul li {
    list-style: none;
  }
  .comments,
  .comments span,
  .comments p {
    font-size: 10px;
  }
  .comments p {
    line-height: 13px;
  }
</style>
