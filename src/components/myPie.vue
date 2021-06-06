<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>
<script>
// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts')

require('echarts/lib/chart/pie')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/toolbox')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
export default {
  name: 'Pie',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    },
    color: {
      type: Array,
      default: function () {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    },
    legend: {
      type: Array,
      default: function () {
        return []
      }
    },
    serieDatas: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      chart: null
    }
  },
  watch: {
    serieDatas () {
      this.initChart()
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      if (!this.chart) {
        this.chart = echarts.init(document.getElementById(this.id))
      }
      this.chart.setOption({
        title: {
          text: this.title
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        toolbox: {
          show: true,
          left: '50%'
        },
        legend: {
          x: 'left',
          width: '50px',
          bottom: 0,
          left: '80%',
          orient: 'vertical',
          itemHeight: 10,
          lineStyle: {
            width: 2
          },
          textStyle: {

          },
          data: ['Apple', 'Grapes', 'Pineapples']
        },
        color: this.color,
        textStyle: {
          fontFamily: 'PangMenZhengDao',
          fontSize: 10,
          fontWeight: 'normal'
        },
        stateAnimation: {
          duration: 300
        },
        series: [
          {
            type: 'pie',
            // radius: ['60%', '70%'],
            // avoidLabelOverlap: false,
            // 'emphasis.scale': false,
            // roseType: 'radius',
            // label: {

            // },
            // labelLine: {

            // },
            // data: this.serieDatas
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: '搜索引擎' },
              { value: 735, name: '直接访问' },
              { value: 580, name: '邮件营销' }
            ]
          }
        ]
      })
    }
  }
}
</script>
