<template>
  <div>
    <article-detail></article-detail>
    <copy-right category="Spring"></copy-right>
    <related></related>
    <comment :article="article.id"></comment>
    <reviewer></reviewer>
  </div>
</template>

<script>
  import ArticleDetail from '~/components/article-detail'
  import CopyRight from '~/components/copy-right'
  import Related from '~/components/related'
  import Comment from '~/components/comment'
  import Reviewer from '~/components/reviewer'

  export default {
  name: "id",
  components: {
    ArticleDetail,
    CopyRight,
    Related,
    Comment,
    Reviewer
  },
  data() {
    return {
      article: {
        id: '',
        title: '',
        author: '',
        date: '',
        content: '',
        comment: 0,
        view: 0,
        like: 0,
        // 该用户是否点赞过
        likeVal: 1,
        category: 'Spring',
        copyright: '个人原创文章，转载请联系作者，注明出处'
      }
    }
  },
  mounted() {
    this.article.id = this.$route.params.id;
  },
  /**
   * 对路由参数进行校验
   *
   * @param params
   * @returns {boolean}
   */
  validate({params}) {
    return !(typeof (params.id) == "undefined");
  }
}
</script>

<style scoped>

</style>
