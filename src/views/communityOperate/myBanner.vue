<template>
  <div class="banner-container" :style="{ height: height * number + 'px' }">
    <ul
      :class="marginTop !== 0 && 'my-banner'"
      :style="{ 'margin-top': marginTop + 'px' }"
    >
      <li
        v-for="(item, index) in bannerData"
        :key="index"
        class="message"
        :style="{ height: height + 'px', 'line-height': height + 'px' }"
      >
        <span>{{ item.content }}</span>
        <span class="fr">{{ item.time }}</span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    number: {
      type: Number,
      default: 3
    },
    height: {
      type: Number,
      default: 20
    }
  },
  data () {
    return {
      marginTop: 0
    }
  },
  computed: {
    bannerData () {
      const data = this.data
      return data.concat(data.slice(0, this.number))
    }
  },
  created () {
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    init () {
      this.timer = setInterval(() => {
        this.marginTop -= 4
        if (this.marginTop <= -(this.data.length + 1) * this.height) {
          this.marginTop = 0
        }
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-container {
  margin-top: 11px;
  padding-left: 11px;
  padding-right: 18px;
  font-size: 13px;
  color: #92979d;
  overflow: hidden;
  .my-banner {
    transition: all 1s;
  }
  .message {
    list-style: square inside;
  }
}
</style>
