<template>
  <div class="overflow-auto" style="margin-top: 10px">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination>
  </div>
</template>

<script>
  import {BPagination} from 'bootstrap-vue'
  export default {
    name: "pagination",
    data() {
      return {
        // 总记录数
        rows: 100,
        perPage: 10,
        currentPage: 1
      }
    },
    components: {
      BPagination
    }
  }
</script>

<style scoped>

</style>
