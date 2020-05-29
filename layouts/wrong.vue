<template>
  <div id="app">
    <!-- 手动结合backTop源码与导航条fix功能 -->
    <transition name="el-fade-in">
      <div
        v-if="visible"
        @click.stop="handleClick"
        :style="{
        'right': styleRight,
        'bottom': styleBottom
      }"
        class="el-backtop">
        <slot>
          <el-icon name="caret-top"></el-icon>
        </slot>
      </div>
    </transition>

    <!--头部导航条-->
    <header>
      <navigation :style="headerStyle"></navigation>
    </header>

    <!-- content row -->
    <div class="blog-container" style="margin-top: 120px">
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
  import Carousel from '~/components/Carousel'
  import {BContainer, BRow, BCol} from 'bootstrap-vue'
  import Tail from '~/components/tail'
  import throttle from 'element-ui/node_modules/throttle-debounce/throttle';
  import Page404 from '~/components/404'

  export default {
    name: 'wrong',
    props: {
      visibilityHeight: {
        type: Number,
        default: 200
      },
      // 跳转的锚点dom对象
      target: '#app',
      right: {
        type: Number,
        default: 40
      },
      bottom: {
        type: Number,
        default: 40
      }
    },
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input: '',
        fixStyle: {
          boxShadow: '0 10px 60px -5px #c1c1c5',
        },
        normalStyle: {
        },
        headerStyle: {
        },
        el: null,
        container: null,
        visible: false
      }
    },
    mounted() {
      // window.addEventListener('scroll', this.scrollHandler);
      this.init();
      this.throttledScrollHandler = throttle(300, this.onScroll);
      this.container.addEventListener('scroll', this.throttledScrollHandler);
    },
    components: {
      Navigation,
      Carousel,
      BContainer,
      BRow,
      BCol,
      Tail,
      throttle,
      Page404
    },
    methods: {
      init() {
        this.container = document;
        this.el = document.documentElement;
        if (this.target) {
          this.el = document.querySelector(this.target);
          if (!this.el) {
            throw new Error(`target is not existed: ${this.target}`);
          }
          this.container = this.el;
        }
      },
      onScroll() {
        // 处理回到顶部按钮是否可见
        const scrollTop = this.el.scrollTop;
        this.visible = scrollTop >= this.visibilityHeight;

        // 处理导航条fix定位并绑定样式
        let scrollDistance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollDistance >= 380) {
          this.headerStyle = this.fixStyle;
        } else {
          this.headerStyle = this.normalStyle;
        }
      },
      handleClick(e) {
        this.scrollToTop();
        this.$emit('click', e);
      },
      scrollToTop() {
        let el = this.el;
        let step = 0;
        let interval = setInterval(() => {
          if (el.scrollTop <= 0) {
            clearInterval(interval);
            return;
          }
          step += 10;
          el.scrollTop -= step;
        }, 20);
      }
    },
    computed: {
      invalidRoute () {
        return !this.$route.matched || this.$route.matched.length === 0;
      },
      styleBottom() {
        return `${this.bottom}px`;
      },
      styleRight() {
        return `${this.right}px`;
      }
    },
    beforeDestroy() {
      this.container.removeEventListener('scroll', this.throttledScrollHandler);
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
  body,html, #app {
    background-color: #f5f8f9;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
