<template>
  <div>
    <article-detail></article-detail>
    <copy-right></copy-right>
    <related></related>
    <comment :article="articleId"></comment>
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
      articleId: ''
    }
  },
  /**
   * 对路由参数进行校验
   *
   * @param params
   * @returns {boolean}
   */
  validate({params}) {
    let valid = !(typeof (params.id) == "undefined");
    if (valid) {
      this.articleId = params.id;
    }
    return valid;
  }
}
</script>

<style scoped>

</style>
