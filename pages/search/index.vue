<template>
  <b-row>
    <!-- 桌面设备显示 -->
    <b-col lg="8">
      <search-result></search-result>
    </b-col>
    <b-col lg="4" class="d-none d-lg-block d-md-none ">
      <right></right>
    </b-col>
  </b-row>
</template>

<script>
  import SearchResult from '~/components/search-result'
  import Right from '~/components/right-bar'
  import {BRow,BCol} from 'bootstrap-vue'
  export default {
    name: "index",
    components: {
      Right,
      BRow,
      BCol,
      SearchResult
    }
  }
</script>

<style scoped>

</style>
