<template>
  <div class="background-container">
    <div class="title-container">
      <span class="title1">{{ titleList['title1'] }}</span>
      <span class="title2">{{ titleList['title2'] }}</span>
      <span class="title3" v-for="(item, index) in titleList['moduleList']" :key="index">{{ item }}</span>
      <div class="btn-group">
        <span class="btn start">开始阅览</span>
        <span class="btn check">查看demo实例</span>
      </div>
    </div>
    <img class="backgroundImg" src="../../assets/background.png">
  </div>
</template>

<script>
import { titleList } from '../../defaultConfig/background';
export default {
  name: 'backgroundContainer',
  data () {
    return {
      titleList
    }
  }
}
</script>

<style>
.background-container{
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  background-color: #f8f8f8;
  padding: 50px 0px 100px 100px;
}
.background-container .title-container{
  display: flex;
  flex-direction: column;
  margin: 100px 100px 0 200px;
}
.background-container .title-container .title1 {
  font-size: 40px;
  line-height: 56px;
}
.background-container .title-container .title2 {
  font-size: 30px;
  line-height: 56px;
}
.background-container .title-container .title3 {
  font-size: 14px;
  color: #999;
  margin-bottom: 5px;
}
.background-container .backgroundImg{
  width: 812px;
  height: 533px;
  transition: all linear .3s;
  transform: scale(1);
}
.background-container .backgroundImg:hover{
  transition: all linear .3s;
  transform: scale(1.07);
}
.btn-group{
  margin-top: 30px;
}
.btn-group .btn{
  display: inline-block;
  width: 120px;
  height: 36px;
  line-height: 40px;
  text-align: center;
  border-radius: 25px;
  border: none;
  font-size: 14px;
  cursor: pointer;
}
.btn-group .btn.start{
  background-color: #0ec289;
  color: #fff;
  margin-right: 40px;
}
.btn-group .btn.check{
  color: #00c587;
  border: 1px solid #00c587;
}
</style>