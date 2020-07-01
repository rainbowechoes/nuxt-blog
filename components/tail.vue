<template>
  <div class="blog-footer">
    <b-container fluid>
      <div class="blog-container-fluid">
        <b-row style="padding-top: 20px">
          <b-col cols="2">
            <nuxt-link to="/" class="blog-brand">Echo</nuxt-link>
          </b-col>
          <b-col cols="5" class="blog-info">
            在变幻的生命里，时间才是最大的小偷
          </b-col>
          <b-col cols="5">
            <el-input
              placeholder="查找文章"
              v-model="input"
              clearable>
            </el-input>
          </b-col>
        </b-row>
        <el-divider></el-divider>
        <b-row >
          <b-col sm="4">
            <b-row class="footer-title">
              <b-col cols="12">座右铭</b-col>
            </b-row>
            <b-row class="footer-content">
              <b-col cols="12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque, commodi consectetur consequatur ducimus eius explicabo libero molestiae qui voluptatibus.
              </b-col>
            </b-row>
          </b-col>
          <b-col sm="4">
            <b-row class="footer-title">
              <b-col cols="12">个人简介</b-col>
            </b-row>
            <b-row class="footer-content">
              <b-col cols="12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque, commodi consectetur consequatur ducimus eius explicabo libero molestiae qui voluptatibus.
              </b-col>
            </b-row>
          </b-col>
          <b-col sm="4">
            <b-row  class="footer-title">
              <b-col cols="12">联系博主</b-col>
            </b-row>
            <b-row class="footer-content">
              <b-col cols="6">
                网站维护不易，如果觉得博客内容不错，愿意请博主喝杯咖啡，可以扫描旁边二维码。有问题也可以联系博主，QQ：2714972882
              </b-col>
              <b-col cols="6">
                <el-image :src="src" :fit="fit" style="width: 80px; height: 80px"></el-image>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <el-divider></el-divider>
        <b-row style="height: 60px;margin-top: 35px;font-size: 12px">
          <b-col sm="6" offset-sm="4">
            Copyright&nbsp;&copy;&nbsp;2018-2019&nbsp;Echo&nbsp;Blog.&nbsp;All&nbsp;rights&nbsp;reserved.&nbsp;蜀ICP备19007116号-1
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>

</template>

<script>
  import {BContainer, BCol, BRow} from 'bootstrap-vue'
  export default {
    name: "tail",
    components: {
      BCol,
      BContainer,
      BRow
    },
    data() {
      return {
        input: '',
        src: 'https://tva3.sinaimg.cn/large/0067iOPdgy1ggbjdvyztbj33402c0qvb.jpg',
        fit: 'cover'
      }
    }
  }
</script>

<style scoped>
  .blog-footer {
    background-color: #1e2022;
    color: #707070;
  }
  .footer-title {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .footer-content {
    font-size: 12px;
  }
  .blog-info {
    line-height: 40px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }

  .blog-brand {
    color: #707070;
    font-size: 26px;
    font-weight: bold;
  }

  .blog-brand:hover {
    color: white;
  }
</style>
