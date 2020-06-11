<template>
  <div>
    <article-detail></article-detail>
    <copy-right></copy-right>
    <related></related>
    <comment></comment>
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
  validate({params}) {
    return !(typeof (params.id) == "undefined");
  }
}
</script>

<style scoped>

</style>
