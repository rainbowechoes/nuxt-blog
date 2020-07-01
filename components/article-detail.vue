<template>
  <!-- 帖子具体内容 -->
  <el-card shadow="hover" class="info-card">
    <div >
      <h3>{{post.title}}</h3>

      <div>
        <div class="meta pull-left">
          <b-row>
            <b-col sm="1">
              <span>
                <dent-icon :user-id="post.author"></dent-icon>
              </span>
            </b-col>
            <b-col sm="4">
              <a-tooltip placement="bottom">
                <template slot="title">
                  最后更新：{{post.updateDate}} <br>
                  首发：{{post.createDate}}
                </template>
                <!-- TODO 使用moment来修改时间展示 -->
                by&nbsp;<span>{{post.author}}</span>.&nbsp;<span class="date" >{{post.date}}</span>
              </a-tooltip>
            </b-col>
            <b-col sm="7">
              <span class="comment" ><i class="el-icon-chat-round"></i> {{post.comment}} 评论</span>
              <span class="views">&nbsp;<i class="el-icon-view"></i> {{post.view}} 阅读</span>
            </b-col>
          </b-row>
        </div>
      </div>

      <div >
        <show-more style="margin-top: 20px" :show-height="showHeight" :content="post.content"></show-more>
      </div>

    </div>
  </el-card>
</template>

<script>
  import ShowMore from './show-more'
  import {BCol, BRow, BIconHammer} from 'bootstrap-vue'
  import DentIcon from '~/components/dent-icon'

  export default {
    name: 'article-detail',
    data () {
      return {
        showHeight: 295
      }
    },
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    components: {
      ShowMore,
      BRow,
      BCol,
      DentIcon,
      BIconHammer
    }
  }
</script>

<style scoped>

</style>
