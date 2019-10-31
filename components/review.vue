<template>
  <div>
    <div class="comment-content">
      <b-row>
        <!-- 评论者的头像 -->
        <b-col cols="2" md="1">
          <!-- 图片大小为120x120 -->
          <!--<el-avatar size="small"-->
                     <!--src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png">-->
          <!--</el-avatar>-->
          <dent-icon userId="rainbow" imgSize="28"></dent-icon>
        </b-col>
        <b-col cols="9" md="11">

          <!-- 评论者信息 -->
          <b-row>
            <!-- 评论者昵称 -->
            <b-col cols="3">
              <span>
                Lorem ipsum.
              </span>
            </b-col>
            <!-- 评论时间 -->
            <b-col cols="3">
              16 hours ago
            </b-col>
            <!-- 回复按钮 -->
            <b-col cols="1" offset="1">
              <el-button type="text" size="small" style="padding-top: 0" @click="toPostReview">
                回复
              </el-button>
            </b-col>
            <!-- 展开回复按钮-->
            <b-col cols="2">
              <el-button type="text" size="small" style="padding-top: 0"
                         v-if="hasChild"
                         v-text="toggleContext"
                         @click="handleToggle">
              </el-button>
            </b-col>
          </b-row>
          <!-- 评论内容 -->
          <b-row>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
          </b-row>
        </b-col>
      </b-row>

    </div>

    <collapse-transition>
      <ul v-show="!isPackUp">
        <li class="sub-comment" v-for="child in childrens">
          <div class="comment-content">
            <b-row>
              <b-col cols="2" md="1">
                <!--<el-avatar size="small"-->
                           <!--:src="child.imgUrl">-->
                <!--</el-avatar>-->
                <dent-icon userId="heqiao" imgSize="28"></dent-icon>
              </b-col>
              <b-col cols="9" md="11">
                <b-row>
                  <b-col cols="4" md="2" v-text="child.author"></b-col>
                  <b-col md="2" cols="4" v-text="child.post"></b-col>
                  <!-- 回复按钮 -->
                  <b-col md="1" offset-md="1" cols="4">
                    <el-button type="text" size="small" style="padding-top: 0" @click="toPostReview">
                      回复
                    </el-button>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col v-text="child.content"></b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>
        </li>
      </ul>
    </collapse-transition>
  </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/base.css';
  import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
  import {BRow, BCol} from 'bootstrap-vue'
  import DentIcon from '~/components/dent-icon'
  export default {
    // 评论的回复
    name: 'review',
    data () {
      return {
        // 子评论是否收起
        isPackUp: true
      }
    },
    components: {
      CollapseTransition,
      BRow,
      BCol,
      DentIcon
    },
    props: {
      childrens: {
        type: Array,
        default: () => [
          {
            imgUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            post: '15 hours ago',
            author: 'rainbow',
            content: 'sdfhkuhjhfsds'
          }
        ],
        required: false
      }
    },
    computed: {
      // 展开、收起时，按钮显示不同文本
      toggleContext () {
        if (this.isPackUp) {
          return '展开回复';
        } else {
          return '收起回复';
        }
      },
      // 评论是否有回复
      hasChild () {
        return this.childrens.length !== 0;
      }
    },
    methods: {
      // 处理按钮点击
      handleToggle: function () {
        this.isPackUp = !this.isPackUp;
      },
      toPostReview: function () {
        const postReview = document.querySelector('#postReview');
        if (!!postReview) {
          postReview.scrollIntoView(true);
        }
      }
    }
  }
</script>

<style scoped>
  ul li {
    list-style: none;
  }
  .comment-content {
    margin-top: 5px;
  }
  .comment-content p {
    padding-left: 20px;
  }
</style>
