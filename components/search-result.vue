<template>
  <el-card class="box-card" header="Result" shadow="hover">
    <div v-for="it in result" :key="it" class="text item">
      <b-row>
        <b-col cols="8" style="text-align: left;">
          <nuxt-link :to="it.url">
            <el-link :underline="false" v-text="it.title">
            </el-link>
          </nuxt-link>
        </b-col>
        <b-col cols="4" style="text-align: right;" v-text="it.date"></b-col>
      </b-row>
      <el-divider class="search-line"></el-divider>
    </div>
    <pagination></pagination>
  </el-card>
</template>

<script>
  import Pagination from '~/components/pagination'
  import {BRow, BCol} from 'bootstrap-vue'

  export default {
    name: 'search-result',
    components: {
      Pagination,
      BRow,
      BCol
    },
    data () {
      return {
        result: [
          {
            url: '/',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, magni.',
            date: '2018年9月5日'
          },
          {
            url: '/',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, magni.',
            date: '2018年9月5日'
          },
          {
            url: '/',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, magni.',
            date: '2018年9月5日'
          },
          {
            url: '/',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, magni.',
            date: '2018年9月5日'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .text {
    font-size: 14px;
  }

  /deep/.search-line {
    margin: 10px 0;
  }
</style>
