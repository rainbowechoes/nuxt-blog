<template>
  <div class="micro-article">
    <b-row  >
      <!-- micro article cover -->
      <b-col sm="4">
        <el-image
          :src="imgUrl"
          fit="fill">
        </el-image>
      </b-col>
      <!-- micro article info -->
      <b-col sm="8" >
        <!-- title -->
        <b-row >
          <b-col sm="12" class="micro-title" v-text="title">
          </b-col>
        </b-row>
        <!-- link -->
        <b-row  style="margin-top: 5px">
          <b-col sm="4" style="font-size: 10px">
            <nuxt-link :to="linkUrl" class="link">
              More..
            </nuxt-link>
          </b-col>
          <b-col sm="8" style="font-size: 10px">by
            <span v-text="author"></span>.
            <span v-text="postDate"></span>.
            <i class="el-icon-chat-round" v-text="commentCount"></i></b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import {BRow, BCol} from 'bootstrap-vue'
export default {
  name: 'micro-pager',
  data () {
    return {
    }
  },
  components: {
    BRow,
    BCol
  },
  props: {
    imgUrl: {
      type: String,
      default: 'https://tvax1.sinaimg.cn/large/0067iOPdgy1ggbjbyq48sj33402c04qu.jpg'
    },
    title: {
      type: String,
      default: 'JavaScript-性能优化，函数节流（throttle）与函数去抖（debounce）'
    },
    linkUrl: {
      type: String,
      default: '/post/sdfsd'
    },
    author: {
      type: String,
      default: 'rainbow'
    },
    postDate: {
      type: String,
      default: '几分钟前'
    },
    commentCount: {
      type: Number,
      default: 12
    }
  }
}
</script>

<style scoped>
  .micro-title {
    width: 200px;
    font-size: 13px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }

</style>
