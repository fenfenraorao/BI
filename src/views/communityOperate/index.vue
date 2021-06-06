<template>
  <div class="community-operate">
    <div class="fl community-left">
      <div class="clear-both">
        <div class="fl top-left">
          <common-item
            v-for="(item, index) in allData.topLeft"
            :key="'top-left' + index"
            :detail="item"
            :images="topLeftTitle[index]"
          >
            <div v-if="index === 0" class="house-container">
              <detail-project :records="item.dataDetail" class="house-project" />
              <div class="house-pie">
                <my-pie id="housePie" :serie-datas="item.pieData" :color="item.pieColor" />
              </div>
            </div>
          </common-item>
        </div>
        <div class="fl top-center">
          <div class="header">
            <div class="header-title">顺美华庭-社区运营数据大屏</div>
            <div class="header-time">14:25:38 2021/06/08</div>
          </div>
          <div class="center-sum">
            <div
              v-for="(item, index) in allData.sum"
              :key="'sum' + index"
              class="accounting-sum"
            >
              <div class="sum-key">{{ item.key }}</div>
              <div :class="item.primary ? 'primary' : 'sum-value'">
                {{ item.value }}
              </div>
            </div>
          </div>
          <div class="center-project">
            <div class="project-container">
              <div
                v-for="(item, index) in allData.project"
                :key="'project' + index"
                class="project"
              >
                <img :src="projectImages[index]" alt="" class="project-image">
                <div>
                  <div class="project-key">{{ item.key }}</div>
                  <div class="project-value">{{ item.value }}</div>
                </div>
              </div>
            </div>
            <div class="owner-tenant">
              <div
                class="bar-container"
              >
                <div class="bar-key">业主/人</div>
                <div class="bar-value bar-owner">
                  <el-progress :percentage="70" color="#FF8736" />
                </div>
              </div>
              <div
                class="bar-container"
              >
                <div class="bar-key">租户/人</div>
                <div class="bar-value bar-rent">
                  <el-progress :percentage="35" color="#EDEBEC" />
                </div>
              </div>
            </div>
          </div>
          <common-item
            v-for="(item, index) in [allData.parking]"
            :key="'parking' + index"
            :detail="item"
            :images="parkingImage"
            class="parking-container"
          >
            <div class="parking-sum">
              <div class="parking-sum-container">
                <div
                  v-for="(park, parkIndex) in allData.parking.sum"
                  :key="'parking' + parkIndex"
                  class="parking-item"
                >
                  <div class="parking-key">{{ park.key }}</div>
                  <div :class="park.primary ? 'primary' : 'parking-value'">
                    {{ park.value }}<span class="parking-unit">{{ park.unit }}</span>
                  </div>
                </div>
              </div>
              <div class="some-parking">
                <div class="parking-item">
                  <div class="parking-key">合计停车</div>
                  <div class="parking-value">{{ allData.parking.totalParking }}</div>
                </div>
                <div class="parking-item">
                  <div class="parking-center">
                    <div class="parking-key">今日停车</div>
                    <div class="parking-value">{{ allData.parking.todayParking }}</div>
                  </div>
                  <div class="parking-center">
                    <div class="parking-key">本周停车</div>
                    <div class="parking-value">{{ allData.parking.weekParking }}</div>
                  </div>
                </div>
              </div>
            </div>
          </common-item>
        </div>
      </div>
      <div class="clear-both bottom-left">
        <div class="fl law-container">
          <common-item
            v-for="(item, index) in [allData.law]"
            :key="'law' + index"
            :detail="item"
            :images="lawImage"
          >
            <detail-project :records="allData.law.dataDetail" class="law-project" />
          </common-item>
        </div>
        <div class="fl financial-container">
          <common-item
            v-for="(item, index) in [allData.financial]"
            :key="'financial' + index"
            :detail="item"
            :images="financialImage"
          >
            <div class="company-container">
              <div v-for="(bank, bankIndex) in bankImages" :key="'bank' + bankIndex" class="bank-container">
                <img :src="bank" alt="" class="bank-image">
              </div>
            </div>
          </common-item>
        </div>
      </div>
    </div>
    <div class="fr community-right">
      <common-item
        v-for="(item, index) in [allData.housekeeping]"
        :key="'top-right' + index"
        :detail="item"
        :images="topLeftTitle[index]"
      >
        <detail-project :records="allData.housekeeping.dataDetail" class="housekeeping-project" />
      </common-item>
      <common-item
        v-for="(item, index) in allData.bottomRight"
        :key="'bottom-right' + index"
        :detail="item"
        :images="bottomRightTitle[index]"
      >
        <div class="device-container">
          <div class="device">
            <img :src="deviceImages[index]" alt="" class="device-image">
            <div class="device-status">设备在线</div>
          </div>
          <detail-project :records="item.dataDetail" class="device-project" />
        </div>
      </common-item>
    </div>
  </div>
</template>

<script>
import CommonItem from './commonItem.vue'
import allData from './data.json'
import DetailProject from './detailProject.vue'
import myPie from '@/components/myPie.vue'

export default {
  components: {
    CommonItem,
    DetailProject,
    myPie
  },
  props: {},
  data () {
    return {
      allData,
      topLeftTitle: [
        require('../../assets/images/communityOperate/title_house.png'),
        require('../../assets/images/communityOperate/title_community.png'),
        require('../../assets/images/communityOperate/title_auction.png')
      ],
      projectImages: [
        require('../../assets/images/communityOperate/project_building.png'),
        require('../../assets/images/communityOperate/project_unit.png'),
        require('../../assets/images/communityOperate/project_door.png'),
        require('../../assets/images/communityOperate/project_people.png'),
        require('../../assets/images/communityOperate/project_car.png'),
        require('../../assets/images/communityOperate/project_wheels.png')
      ],
      parkingImage: require('../../assets/images/communityOperate/title_parking.png'),
      lawImage: require('../../assets/images/communityOperate/title_law.png'),
      financialImage: require('../../assets/images/communityOperate/title_financial.png'),
      bankImages: [
        require('../../assets/images/communityOperate/bank1.png'),
        require('../../assets/images/communityOperate/bank2.png'),
        require('../../assets/images/communityOperate/bank3.png'),
        require('../../assets/images/communityOperate/bank4.png'),
        require('../../assets/images/communityOperate/bank5.png'),
        require('../../assets/images/communityOperate/bank6.png')
      ],
      bottomRightTitle: [
        require('../../assets/images/communityOperate/title_water.png'),
        require('../../assets/images/communityOperate/title_electric.png')
      ],
      deviceImages: [
        require('../../assets/images/communityOperate/water.png'),
        require('../../assets/images/communityOperate/electric.png')
      ]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.community-operate {
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  background: linear-gradient(151deg, #26313b 0%, #12151c 100%);
  font-family: PangMenZhengDao;
  .top-left {
    width: 449px;
    margin-top: 20px;
  }
  .bottom-left{
    margin-top: 26px;
  }
  .list {
    & + .list {
      margin-top: 30px;
    }
  }
  .top-center {
    width: 930px;
    margin-left: 20px;
    margin-top: 13px;
    overflow: hidden;
  }
  .header {
    height: 63px;
    text-align: center;
    color: #fff;
    background: url('../../assets/images/communityOperate/bg_header.png');
    background-size: 100% 100%;
  }
  .header-title {
    height: 38px;
    line-height: 38px;
    font-size: 38px;
  }
  .header-time {
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
  }
  .center-sum {
    margin-top: 16px;
    background: #131517;
    border-radius: 14px;
  }
  .center-sum {
    display: flex;
    justify-content: space-around;
    height: 122px;
    padding-top: 27px;
    margin-top: 10px;
    background: #131517;
    font-size: 20px;
    border-radius: 6px;
    text-align: center;
    .sum-key {
      color: #898a8b;
      font-size: 20px;
    }
    .sum-value {
      color: #e8e8e9;
      font-size: 53px;
    }
    .primary {
      color: #ff8736;
      font-size: 53px;
    }
  }
  .center-project {
    padding: 65px 35px 25px 40px;
    margin-top: 3px;
    background: #131517;
    border-radius: 14px;
    .project-container {
      display: flex;
      flex-wrap: wrap;
    }
    .project-image {
      width: 76px;
      margin-right: 10px;
    }
    .project {
      width: 33%;
      display: flex;
      margin-bottom: 24px;
    }
    .project-key {
      margin-top: 5px;
      color: #e7e8e8;
      font-size: 20px;
      line-height: 24px;
    }
    .project-value {
      color: #d7d6d7;
      font-size: 34px;
      line-height: 42px;
    }
  }
  .bar-container{
    display: flex;
    & + .bar-container{
      margin-top: 8px;
    }
  }
  .bar-key{
    font-size: 20px;
    color: #FFF;
    line-height: 24px;
    margin-right: 20px;
  }
  .bar-value{
    flex: 1;
    height: 6px;
  }
  .el-progress,
  /deep/ .el-progress-bar,
  /deep/ .el-progress-bar__outer{
    height: 6px!important;
  }
  .bar-owner{
    /deep/ .el-progress-bar__outer{
      background: #3D291C;
    }
  }
  .bar-rent{
    /deep/ .el-progress-bar__outer{
      background: #3D3F40;
    }
  }
  .parking-container{
    margin-top: 32px;
    overflow: hidden;
    /deep/ .banner-container{
      width: 436px;
      float: right;
    }
  }
  .parking-sum{
    float: left;
    display: flex;
    justify-content: space-between;
    width: 468px;
    padding: 22px;
    margin-top: 10px;
    background: #131517;
  }
  .parking-sum-container {
    font-size: 20px;
    border-radius: 6px;
    .parking-item{
      & + .parking-item{
        margin-top: 34px;
      }
    }
    .parking-key {
      margin-bottom: 9px;
      color: #9fa1a2;
    }
    .parking-value {
      color: #e8e8e9;
    }
    .primary {
      color: #ff8736;
    }
    .parking-unit {
      font-size: 10px;
      margin-left: 3px;
    }
  }
  .some-parking{
    display: flex;
    width: 265px;
    background: #202224;
    border-radius: 4px;
  }
  .parking-item,
  .parking-center{
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .parking-key{
    color: #8F9091;
    font-size: 14px;
  }
  .parking-value{
    color: #E9E9E9;
    font-size: 25px;
  }
  .parking-item:first-child{
    border-right: 1px solid #2D2F30;
  }
  .parking-center + .parking-center{
    border-top: 1px solid #2D2F30;
  }
  .law-container{
    width: 688px;
  }
  .law-project{
    /deep/ .detail-project-container{
      width: 204px;
    }
  }
  .financial-container{
    width: 686px;
    margin-left: 28px;
    .company-container{
      margin-top: 14px;
      display: flex;
      flex-wrap: wrap;
    }
    .bank-container{
      width: 164px;
      margin-bottom: 10px;
      margin-right: 10px;
      &:nth-child(4n){
        margin-right: 0;
      }
    }
  }
  .community-right{
    width: 449px;
    margin-top: 23px;
  }
  .housekeeping-project{
    /deep/ .detail-project-container{
      width: 136px;
      margin-right: 20px;
      &:nth-child(3n){
        margin-right: 0;
      }
    }
  }
  .device-container{
    overflow: hidden;
    margin-top: 15px;
    .device{
      float: left;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 25px;
      margin-right: 40px;
    }
    .device-image{
      width: 36px;
      margin-top: 8px;
      margin-bottom: 12px;
    }
    .device-status{
      font-size: 11px;
      color: #4B4F57;
    }
    .device-project{
      float: right;
      width: 326px;
      margin-top: 0;
      /deep/ .detail-project-container{
        width: 158px;
        margin-right: 10px;
        &:nth-child(2n){
          margin-right: 0;
        }
      }
      /deep/ .project-title{
        height: 30px;
        line-height: 30px;
      }
    }
  }
  .house-container{
    overflow: hidden;
    padding-right: 30px;
    .house-project{
      float: left;
      flex-direction: column;
      width: 140px;
      margin-left: 8px;
    }
    /deep/ .detail-project-container{
      width: 140px;
      margin-right: 0px;
    }
    /deep/ .project-title{
      padding-left: 0;
      padding-right: 0;
    }
  }
  .house-pie{
    float: right;
  }
}
</style>
