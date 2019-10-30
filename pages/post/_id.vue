<template>
  <b-row>
    <!-- 桌面设备显示 -->
    <b-col lg="8">
      <article-detail></article-detail>
      <copy-right></copy-right>
      <related></related>
      <comment></comment>
      <reviewer></reviewer>
    </b-col>
    <b-col lg="4" class="d-none d-lg-block d-md-none ">
      <right></right>
    </b-col>
  </b-row>
</template>

<script>
import Right from '~/components/right-bar'
import {BRow,BCol} from 'bootstrap-vue'
import ArticleDetail from '~/components/article-detail'
import CopyRight from '~/components/copy-right'
import Related from '~/components/related'
import Comment from '~/components/comment'
import Reviewer from '~/components/reviewer'

export default {
  name: "id",
  components: {
    Right,
    BRow,
    BCol,
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
