<template>
  <div v-for="item in data" class="name" ::key="item.key">
    {{ item.key }}
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.name{
  // background: url('../../assets/images/communityOperate/bg_subtitle.png');
}
</style>
