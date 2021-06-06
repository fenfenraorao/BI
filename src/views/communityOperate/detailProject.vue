<template>
  <div class="detail-project">
    <div v-for="(item, index) in records" :key="index" class="detail-project-container">
      <div class="project-title" :class="{'no-background': item.noBackground}">
        <span class="fl title-name">{{ item.key }}</span>
        <span class="fr title-number">{{ item.value }}</span>
      </div>
      <div v-if="item.list" class="child-container">
        <div v-for="(child, childIndex) in item.list" :key="'child' + childIndex" class="project-content">
          <span class="fl child-name">{{ child.key }}</span>
          <span class="fr child-number" :class="{'primary' : child.primary}">{{ child.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    records: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.detail-project{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
  .detail-project-container{
    width: 29%;
    margin-right: 38px;
    margin-bottom: 5px;
    &:nth-child(3n){
      margin-right: 0;
    }
  }
  .project-title{
    height: 23px;
    line-height: 23px;
    padding-left: 18px;
    padding-right: 14px;
    overflow: hidden;
    background: url('../../assets/images/communityOperate/bg_project.png') no-repeat;
    background-size: 100% 100%;
    font-size: 14px;
  }
  .no-background{
    background: none;
  }
  .title-name{
    color: #969A9E;
  }
  .title-number{
    color: #DBDDDE;
  }
  .child-container{
    padding-left: 16px;
    padding-right: 14px;
    margin-top: 8px;
    margin-bottom: 16px;
  }
  .project-content{
    overflow: hidden;
    font-size: 11px;
    & + .project-content{
      margin-top: 9px;
    }
  }
  .child-name{
    color: #92979D;
  }
  .child-number{
    color: #D1D3D4;
  }
  .primary{
    color: #FF8736;
  }
}
</style>
