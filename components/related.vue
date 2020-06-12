<template>
  <!-- 相关及最新 -->
  <el-row :gutter="24">
    <el-col :span="12">
      <el-card shadow="hover" class="info-card article-link-card" header="相关文章">
        <a-list :data-source="relate">
          <a-list-item slot="renderItem" slot-scope="item, index">
            <nuxt-link :to="'/post/' + item.id" v-text="item.title" class="simple-title"></nuxt-link>
          </a-list-item>
        </a-list>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card shadow="hover" class="info-card article-link-card" header="最新文章">
        <a-list :data-source="latest">
          <a-list-item slot="renderItem" slot-scope="item, index" class="simple-title">
            <nuxt-link :to="'/post/' + item.id" v-html="item.title"></nuxt-link>
          </a-list-item>
        </a-list>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  /**
   * 文章的一些关联文章以及推荐文章
   */
  export default {
    name: 'related',
    props: {
      relate: {
        type: Array,
        required: true
      },
      latest: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>

  .article-link-card {
    padding-bottom: 20px;
  }

  .simple-title {
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
  }
</style>
