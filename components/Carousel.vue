<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <b-carousel
      id="carousel"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="300"
      style="text-shadow: 1px 1px 2px #333;"
      class="carousel-container"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-slot:img class="carousel-container" caption="caption">
        <el-image
          style="width:100%;"
          class="carousel-container"
          :src="url"
          :fit="fit"></el-image>
      </b-carousel-slide>
      <b-carousel-slide v-slot:img class="carousel-container">
        <el-image
          style="width:100%;"
          class="carousel-container"
          :src="url"
          :fit="fit"></el-image>
      </b-carousel-slide>
      <b-carousel-slide v-slot:img class="carousel-container">
        <el-image
          style="width:100%;"
          class="carousel-container"
          :src="url"
          :fit="fit"></el-image>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import {BCarousel, BCarouselSlide, BImg} from 'bootstrap-vue'
export default {
name: "Carousel",
components: {
  BCarousel,
  BCarouselSlide,
  BImg
},
data() {
  return {
    slide: 0,
    sliding: null,
    fit: 'cover',
    url: 'https://picsum.photos/1024/480/?image=54'
  }
},
methods: {
  onSlideStart(slide) {
    this.sliding = true
  },
  onSlideEnd(slide) {
    this.sliding = false
  }
}
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
