<template>
  <div id="app">
    <!--头部导航条-->
    <header>
      <navigation></navigation>
    </header>

    <div class="blog-container-fluid register-container" style="margin-top: 100px">
      <nuxt />
    </div>

    <!-- footer -->
    <footer style="margin-top: 30px">
      <tail></tail>
    </footer>
  </div>
</template>

<script>
  import Navigation from '~/components/Navigation'
  import Tail from '~/components/tail'

  export default {
    name: "register",
    components: {
      Navigation,
      Tail
    }
  }
</script>

<style scoped>
  .register-container {
    background: url('https://tva3.sinaimg.cn/large/0067iOPdgy1ggbjdvyztbj33402c0qvb.jpg') bottom center no-repeat;
    background-size: 100% 100%;
    height: 600px;
  }
</style>
