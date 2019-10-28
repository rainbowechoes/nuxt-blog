<template>
  <div>
    <!--头部导航条-->
    <header>
      <navigation></navigation>
    </header>

    <div class="blog-container-fluid carousel-container">
      <!-- carousel -->
      <carousel></carousel>
    </div>

    <!-- content row -->
    <div class="blog-container">
        <b-row>
          <!-- 桌面设备显示 -->
          <b-col lg="8">
            <nuxt />
          </b-col>
          <b-col lg="4" class="d-none d-lg-block d-md-none ">
            <right></right>
          </b-col>
        </b-row>
    </div>
    <!-- footer -->
    <footer style="margin-top: 30px">
      <tail></tail>
    </footer>
  </div>
</template>
<script>
  import Navigation from '~/components/Navigation'
  import Carousel from '~/components/Carousel'
  import {BContainer, BRow, BCol} from 'bootstrap-vue'
  import Right from '~/components/right-bar'
  import Tail from '~/components/tail'

  export default {
    components: {
      Navigation,
      Carousel,
      BContainer,
      BRow,
      BCol,
      Right,
      Tail
    }
  }
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}


.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
