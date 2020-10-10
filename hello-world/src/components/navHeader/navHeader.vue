<template>
  <div class="navHeader">
    <div class="left">
      <span class="headImg"><img src="../../assets/pagoda.png"></span>
    </div>
    <div class="middle">
      <span
        v-for="item in tabLists" :key="item.id"
        :class="item.active ? 'active' : ''"
        @click="handlerClick($event, item.id)"
      >{{ item.title }}</span>
    </div>
    <div class="right">
      <span class="userIcon">Miracle</span>
    </div>
  </div>
</template>

<script>
import { tabLists } from '../../defaultConfig/header'
export default {
  name: 'NavHeader',
  data () {
    return {
      tabLists
    }
  },
  methods: {
    handlerClick (evt, index) {
      this.tabLists.forEach(item => {
        item.active = false
      })
      this.tabLists[index]['active'] = true
    }
  }
}
</script>

<style>
.navHeader{
  display: flex;
  flex-direction: row;
  line-height: 50px;
  height: 100%;
}
.navHeader .left{
  width: 300px;
  height: 100%;
}
.navHeader .left .headImg{
  width: 100%;
  margin: 10px 0px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  display: inline-block;
  border-right: 1px solid #bbb;
}
.navHeader .left .headImg img{
  height: 30px;
}
.navHeader .middle{
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.navHeader .middle span{
  font-weight: 300;
  cursor: pointer;
}
.navHeader .middle span:hover{
  color: #0ec289;
}
.navHeader .middle span::after {
  display: block;
  content: "";
  margin-top: -2px;
  height: 2px;
  background: #0ec289;
  width: 0%;
  transition: all linear 0.2s;
}
.navHeader .middle span:hover:after{
  width: 100%;
}
.navHeader .middle span.active{
  color: #0ec289;
  border-bottom: 2px solid #0ec289;
}

.navHeader .right{
  width: 200px;
  height: 100%;
}
.navHeader .right .userIcon{
  width: 100%;
  margin: 10px 0px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  display: inline-block;
  border-left: 1px solid #bbb;
}
</style>