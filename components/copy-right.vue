<template>
  <!-- 版权说明 -->
  <el-card shadow="hover" class="info-card">
    <b-row>
      <b-col cols="1">
        <dent-icon imgSize="50"></dent-icon>
        <!-- <el-avatar :src="url" :size="50"></el-avatar> -->
      </b-col>
      <b-col cols="6">
        <div class="instruction" style="margin-bottom: 8px">
          <span class="instruction-title">版权说明：</span>
          <span>
            个人文章，转载文章请联系作者，注明出处
          </span>
        </div>
        <div class="instruction">
          <span class="instruction-title">所属分类：</span>
          <nuxt-link to="/" v-text="category"> </nuxt-link>
        </div>
      </b-col>
      <b-col cols="5">
        <div class="instruction"></div>
      </b-col>
    </b-row>
  </el-card>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";
import DentIcon from "./dent-icon";

export default {
  name: "copy-right",
  components: {
    BRow,
    BCol,
    DentIcon
  },
  props: {
    copyright: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      url:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
    };
  }
};
</script>

<style scoped>
.instruction {
  margin-left: 10px;
  text-align: left;
}
.instruction-title {
  font-weight: bold;
}
</style>
