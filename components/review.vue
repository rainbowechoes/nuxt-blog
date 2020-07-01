<template>
  <div>
    <div class="comment-content">
      <b-row>
        <!-- 评论者的头像 -->
        <b-col cols="2" md="1">
          <dent-icon :userId="comment.userId"></dent-icon>
        </b-col>
        <b-col cols="9" md="11">
          <!-- 评论者信息 -->
          <b-row>
            <!-- 评论者昵称 -->
            <b-col cols="3">
              <span v-text="comment.username"></span>
            </b-col>
            <!-- 评论时间 -->
            <b-col cols="3">
              <a-tooltip placement="top">
                <template slot="title">
                  发表时间：{{comment.formatDate}}
                  <br />
                </template>
                {{comment.date}}
              </a-tooltip>
            </b-col>
            <!-- 回复按钮 -->
            <b-col cols="1" offset="1">
              <el-button type="text" size="small" style="padding-top: 0" @click="toPostReview">回复</el-button>
            </b-col>
            <!-- 展开回复按钮-->
            <b-col cols="2">
              <el-button
                type="text"
                size="small"
                style="padding-top: 0"
                v-if="hasChild"
                v-text="toggleContext"
                @click="handleToggle"
              ></el-button>
            </b-col>
          </b-row>
          <!-- 评论内容 -->
          <b-row v-text="comment.content"></b-row>
        </b-col>
      </b-row>
    </div>

    <!-- 回复内容 -->
    <collapse-transition>
      <ul v-show="!isPackUp">
        <!-- 显示某条评论的回复 -->
        <li class="sub-comment" v-for="review in comment.reviews" :key="review.id">
          <div class="comment-content">
            <b-row>
              <b-col cols="2" md="1">
                <dent-icon :userId="review.userId"></dent-icon>
              </b-col>
              <b-col cols="9" md="11">
                <b-row>
                  <b-col cols="4" md="2" v-text="review.username"></b-col>
                  <b-col md="2" cols="4">
                    <a-tooltip placement="top">
                      <template slot="title">
                        发表时间：{{review.formatDate}}
                        <br />
                      </template>
                      {{review.date}}
                    </a-tooltip>
                  </b-col>
                  <!-- 回复按钮 -->
                  <b-col md="1" offset-md="1" cols="4">
                    <el-button
                      type="text"
                      size="small"
                      style="padding-top: 0"
                      @click="toPostReview"
                    >回复</el-button>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col v-text="review.content"></b-col>
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
import "element-ui/lib/theme-chalk/base.css";
import CollapseTransition from "element-ui/lib/transitions/collapse-transition";
import { BRow, BCol } from "bootstrap-vue";
import DentIcon from "~/components/dent-icon";

/**
 * 用户的回复组件
 */
export default {
  // 评论的回复
  name: "review",
  data() {
    return {
      // 子评论是否收起
      isPackUp: true
    };
  },
  components: {
    CollapseTransition,
    BRow,
    BCol,
    DentIcon
  },
  props: {
    children: {
      type: Array,
      default: () => [
        {
          imgUrl:
            "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
          post: "15 hours ago",
          author: "rainbow",
          content: "sdfhkuhjhfsds"
        }
      ],
      required: false
    },
    comment: {
      type: Object,
      required: true
    }
  },
  computed: {
    // 展开、收起时，按钮显示不同文本
    toggleContext() {
      if (this.isPackUp) {
        return "展开回复";
      } else {
        return "收起回复";
      }
    },
    // 评论是否有回复
    hasChild() {
      return this.children.length !== 0;
    }
  },
  methods: {
    // 处理按钮点击
    handleToggle: function() {
      this.isPackUp = !this.isPackUp;
    },
    // 跳转到回复框
    toPostReview: function() {
      const postReview = document.querySelector("#postReview");
      if (!!postReview) {
        postReview.scrollIntoView(true);
      }
    }
  }
};
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
