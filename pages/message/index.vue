<template>
  <b-row>
    <!-- 桌面设备显示 -->
    <b-col lg="8">
      <board></board>
    </b-col>
    <b-col lg="4" class="d-none d-lg-block d-md-none ">
      <right></right>
    </b-col>
  </b-row>
</template>

<script>
  import Pagination from '~/components/pagination'
  import Reviewer from '~/components/reviewer'
  import {BRow, BCol} from 'bootstrap-vue'
  import Right from '~/components/right-bar'
  import Board from '~/components/message-board'

  export default {
    name: "index",
    components: {
      Pagination,
      Reviewer,
      BRow,
      BCol,
      Right,
      Board
    }
  }
</script>

<style scoped>

</style>
