<template>
  <div>
    <a-row :gutter="24">
      <a-col :span="12">
        <a-statistic title="文章数" :value="3423">
          <template #suffix>
            <a-icon type="highlight"></a-icon>
          </template>
        </a-statistic>
      </a-col>
      <a-col :span="12">
        <a-statistic title="评论数" :value="2342">
          <template #suffix>
            <a-icon type="message"></a-icon>
          </template>
        </a-statistic>
      </a-col>
      <a-col :span="12">
        <a-statistic title="访问数" :value="32">
          <template #suffix>
            <a-icon type="team"></a-icon>
          </template>
        </a-statistic>
      </a-col>
      <a-col :span="12">
        <a-statistic title="标签数" :value="23">
          <template #prefix>
            <a-icon type="tags"></a-icon>
          </template>
        </a-statistic>
      </a-col>
    </a-row>

  </div>
</template>

<script>
export default {
  name: 'statistic'
}
</script>

<style scoped>
  .statistic-title {
    color: #1482f0;
  }
  .info-col {
    margin: 2px 0;
    font-size: 13px;
  }
</style>
