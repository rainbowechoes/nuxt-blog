<template>
  <b-row>
    <!-- 桌面设备显示 -->
    <b-col lg="8">
      <left></left>
    </b-col>
    <b-col lg="4" class="d-none d-lg-block d-md-none ">
      <right></right>
    </b-col>
  </b-row>
</template>

<script>

  import Left from '~/components/left-bar'
  import Right from '~/components/right-bar'
  import {BRow,BCol} from 'bootstrap-vue'
  export default {
    components: {
      Left,
      Right,
      BRow,
      BCol
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
