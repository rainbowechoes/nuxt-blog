<template>
  <!-- 相关及最新 -->
  <el-row :gutter="24">
    <el-col :span="12">
      <el-card shadow="hover" class="info-card article-link-card" header="相关文章">
        <!--<div v-for="i in 4" :key="i">-->
        <!--  <nuxt-link to="/" class="article-route">-->
            <!--<el-link icon="el-icon-arrow-right" :underline="false" class="article-link">-->
            <!--    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, nihil!-->
            <!--</el-link>-->
        <!--  </nuxt-link>-->
        <!--</div>-->
        <a-list :data-source="urlData">
          <a-list-item slot="renderItem" slot-scope="item, index">
            <nuxt-link to="/" v-html="item"></nuxt-link>
          </a-list-item>
        </a-list>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card shadow="hover" class="info-card article-link-card" header="最新文章">
        <div v-for="i in 4" :key="i">
          <!--<nuxt-link to="/" class="article-route">-->
          <!--  <el-link icon="el-icon-arrow-right" :underline="false" class="article-link article-route">-->
          <!--    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi illo in odit placeat quae quasi quis quos rerum similique tempore.-->
          <!--  </el-link>-->
          <!--</nuxt-link>-->
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  const urlData = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  export default {
    name: 'related',
    data() {
      return {
        urlData
      }
    }
  }
</script>

<style scoped>
  .article-route {
    float: left;
  }

  .article-route .article-link {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }

  .article-link-card {
    padding-bottom: 20px;
  }
</style>
