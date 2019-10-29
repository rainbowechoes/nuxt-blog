<template>
  <div>
    <el-card class="info-card" shadow="hover" header="最热文章">
      <div class="micro-articles">
        <micro></micro>
        <micro></micro>
        <micro></micro>
      </div>
    </el-card>
    <el-card class="info-card" shadow="hover" header="排行">
      <el-tabs v-model="listActiveName" type="card">
        <el-tab-pane label="最受欢迎" name="first">
          <div class="micro-articles">
            <micro></micro>
            <micro></micro>
            <micro></micro>
          </div>
        </el-tab-pane>
        <el-tab-pane label="最多评论" name="second">
          <div class="micro-articles">
            <micro></micro>
            <micro></micro>
            <micro></micro>
          </div>
        </el-tab-pane>
        <el-tab-pane label="最多阅读" name="third">
          <div class="micro-articles">
            <micro></micro>
            <micro></micro>
            <micro></micro>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <el-card class="info-card" shadow="hover" header="标签">
      <tag url="/post/sdfsd" color="primary" text="demo"></tag>
      <tag url="/post/sdfsd" color="secondary" text="demo"></tag>
      <tag url="/post/sdfsd" color="success" text="demo"></tag>
      <tag url="/post/sdfsd" color="danger" text="demo"></tag>
      <tag url="/post/sdfsd" color="info" text="demo"></tag>
      <tag url="/post/sdfsd" color="light" text="demo"></tag>
      <tag url="/post/sdfsd" color="dark" text="demo"></tag>
    </el-card>
    <el-card class="info-card" shadow="hover" header="分类">
      <category v-bind:count="12" text="category" category-color="primary"  url="/post/?c=category"></category>
      <category v-bind:count="12" text="demo" category-color="primary"  url="/post/?c=category"></category>
      <category v-bind:count="12" text="category" category-color="primary" url="/post/?c=category"></category>
      <category v-bind:count="12" text="category" category-color="primary" url="/post/?c=category"></category>
      <category v-bind:count="12" text="category" category-color="primary" url="/post/?c=category"></category>
    </el-card>
    <el-card shadow="hover" header="网站概况">
      <statistic></statistic>
    </el-card>
  </div>
</template>

<script>
  import Micro from './micro-pager'
  import Statistic from './statistic'
  import {BButton} from 'bootstrap-vue'
  import Tag from './tag'
  import Category from './category'

  export default {
    name: 'right-bar',
    data () {
      return {
        listActiveName: 'first'
      }
    },
    methods: {
    },
    components: {
      Micro,
      Statistic,
      BButton,
      Tag,
      Category
    }
  }
</script>

<style scoped>
</style>
