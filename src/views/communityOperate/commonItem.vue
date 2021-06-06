<template>
  <div class="list">
    <!-- 标题 -->
    <img :src="images" alt="" class="image-title">
    <!-- 统计数据 -->
    <div v-if="detail.statistical" class="statistical-container">
      <div
        v-for="(item, index) in detail.statistical"
        :key="detail.name + index"
        class="statiscal-item"
      >
        <div class="statiscal-key">{{ item.key }}</div>
        <div :class="item.primary ? 'primary' : 'statiscal-value'">
          {{ item.value }}<span class="statiscal-unit">{{ item.unit }}</span>
        </div>
      </div>
    </div>
    <!-- 数据跟记录之间的内容 -->
    <slot />
    <!-- 记录列表 -->
    <div v-if="detail.records && detail.records.title" class="records-title-container">
      <span class="record-title">{{ detail.records.title }}</span>
      <span v-if="detail.records.total" class="record-total">{{
        detail.records.total
      }}</span>
    </div>
    <my-banner v-if="detail.records && detail.records.list" :data="detail.records.list" :number="detail.number || 3" :height="detail.height || 20" />
  </div>
</template>

<script>
import myBanner from './myBanner'

export default {
  components: {
    myBanner
  },
  props: {
    detail: {
      type: Object,
      default: () => {
        return {}
      }
    },
    images: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  .image-title {
    width: 100%;
    height: 26px;
  }
  .statistical-container {
    display: flex;
    justify-content: space-around;
    padding: 10px 12px;
    margin-top: 10px;
    background: #131517;
    font-size: 20px;
    border-radius: 6px;
    .statiscal-key {
      margin-bottom: 9px;
      color: #9fa1a2;
    }
    .statiscal-value {
      color: #e8e8e9;
    }
    .primary {
      color: #ff8736;
    }
    .statiscal-unit {
      font-size: 10px;
      margin-left: 3px;
    }
  }
  .records-title-container {
    height: 22px;
    line-height: 22px;
    padding-left: 10px;
    margin-top: 14px;
    background: #313943;
    font-size: 14px;
  }
  .record-title {
    color: #abb0b7;
  }
  .record-total {
    margin-left: 8px;
    color: #ea7f37;
  }
}
</style>
