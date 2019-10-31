<template>
  <!-- 帖子具体内容 -->
  <el-card shadow="hover" class="info-card">
    <div >
      <h3>Twitter Stock Surges On Disney Takeover Rumor</h3>

      <div>
        <div class="meta pull-left">
          <b-row>
            <b-col cols="1">
              <!-- 图片大小为120x120 -->
              <el-avatar size="small"
                         src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png">
              </el-avatar>
            </b-col>
            <b-col cols="11">
              by
              <span>
                Babs C
              </span>.
              <span class="date" >on Sep 22,2016</span>
              <span class="comment" ><i class="el-icon-chat-round"></i> 5</span>
              <span class="views"><i class="el-icon-view"></i> 682 views</span>
            </b-col>
          </b-row>
        </div>

      </div>

      <div >
        <show-more style="margin-top: 20px" v-bind:show-height="showHeight" :content="contentTxt"></show-more>
      </div>

    </div>
  </el-card>
</template>

<script>
  import ShowMore from './show-more'
  import {BRow, BCol} from 'bootstrap-vue'
  export default {
    name: 'article-detail',
    data () {
      return {
        showHeight: 295,
        contentTxt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi consectetur distinctio, eaque error eveniet exercitationem hic magni maiores nobis nostrum odio officia porro possimus quae qui quo reprehenderit sed sunt veritatis. Autem dolores labore mollitia natus tempora vel voluptas? Accusantium beatae dolorum explicabo laboriosam, rerum sit. Accusamus distinctio error facere facilis fugiat id impedit ipsa ipsam iure, maxime mollitia necessitatibus nulla obcaecati officia placeat provident quos, saepe sapiente similique, suscipit. Ab delectus dolorem incidunt officia rerum. Accusantium aperiam aspernatur consectetur corporis cupiditate debitis delectus dolores dolorum enim eveniet expedita impedit ipsum labore modi nihil nisi nulla officiis, placeat, quis quisquam reiciendis rem repudiandae ut velit veniam. Ab ad aperiam aut beatae blanditiis deleniti dignissimos dolorem doloribus eligendi enim error est fuga fugiat fugit iusto maxime modi nobis officiis porro quam quasi quia quod repellat, sapiente sint sit suscipit voluptatem? Assumenda culpa, cupiditate deleniti dignissimos illo ipsa mollitia nam omnis, perspiciatis quam quidem quo suscipit tempore? Beatae commodi deleniti dignissimos ea minima modi quidem tenetur, vero? Amet expedita fuga fugiat labore laudantium modi nihil veritatis, voluptatem? Accusamus aliquam animi, aperiam blanditiis commodi consectetur cum deserunt dolor dolore doloremque et exercitationem harum impedit in ipsum iusto laborum magni maiores maxime minus nam necessitatibus nostrum officiis pariatur perferendis placeat provident quasi quisquam, reprehenderit rerum saepe temporibus ullam vel. Aperiam aspernatur commodi consectetur distinctio ducimus ipsa itaque minus nesciunt, officia, veritatis vitae voluptatem. Animi cupiditate dolor et fugiat minima optio perferendis vitae. Blanditiis consequuntur dicta dolore dolorum eligendi eos facere harum id ipsa iusto laboriosam modi odio odit officia optio, praesentium quasi sapiente sequi similique sunt tempore temporibus unde. A aut autem, consectetur eos fuga hic id magni molestias mollitia necessitatibus praesentium quibusdam quos recusandae sint suscipit ut velit veniam? Architecto consequuntur ea eveniet provident quibusdam voluptates. Aut corporis, doloribus eveniet exercitationem expedita, laborum molestiae, necessitatibus perferendis possimus quia quis quisquam quos recusandae similique voluptate. Accusantium ad amet aperiam asperiores corporis deserunt dolor ducimus ea, eius excepturi facilis fuga id in inventore iure labore laboriosam molestiae nobis non obcaecati odit pariatur porro provident quaerat quo quos repellendus sit tempore velit vitae? Ad excepturi minus mollitia nam nulla. Incidunt ipsa maiores quod reiciendis. Accusamus ad alias aliquam autem dicta earum esse exercitationem harum illum in, laborum officiis porro quasi, qui sunt! Quasi quia quis sit tenetur. Cumque expedita facere in sunt. Ad animi asperiores consectetur cupiditate, deserunt dolor ea enim libero natus neque pariatur quos, totam. Animi aperiam aut consectetur consequuntur culpa cumque esse fugit hic incidunt ipsam ipsum labore magnam minima molestias necessitatibus nesciunt nobis non obcaecati optio perferendis quae quis quod repudiandae, saepe sint sit soluta sunt tempora temporibus tenetur ullam unde veniam vero? Dolorem est itaque non nostrum quas. Adipisci atque aut, ea eius eum ex facere fugiat illum modi nihil nostrum perferendis quasi quo reiciendis repudiandae rerum sed sunt tempora vero voluptatem? Impedit optio recusandae unde velit! A adipisci aspernatur assumenda autem deleniti doloribus ea earum eum harum ipsam laborum minus odio optio reiciendis sit, tempora tenetur unde vel velit.\n'
      }
    },
    components: {
      ShowMore,
      BRow,
      BCol,
    },
    methods: {
      loadIdentityAvatar(userId) {

      }
    }
  }
</script>

<style scoped>
</style>
