<template>
  <div>
    <!--头部导航条-->
    <header>
      <navigation></navigation>
    </header>

    <div class="blog-container">
      <!-- carousel -->
      <carousel></carousel>
    </div>

    <!-- content row -->
    <div>
      <b-container>
        <b-row>
          <b-col md="8">
            <nuxt />
          </b-col>
          <b-col md="4">
            right
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- footer -->
    <footer>
      footer
    </footer>
  </div>
</template>
<script>
  import Navigation from '~/components/Navigation'
  import Carousel from '~/components/Carousel'
  export default {
    components: {
      Navigation,
      Carousel
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
@media (min-width: 1200px) {
  .blog-container {
    width: 1200px;
    margin: 100px auto auto auto;
  }
  .blog-carousel {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .blog-container {
    margin: 100px auto auto auto;
  }
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
