<template>
  <div class="layout-container">
    <section class="nav-header">
      <nav-header></nav-header>
    </section>

    <section class="background-container">
      <background-img></background-img>
    </section>

    <section class="content-container">
      <div class="left-side"></div>
      <div class="right-side"></div>
    </section>
  </div>
</template>

<script>
import navHeader from './components/navHeader/navHeader'
import backgroundImg from './components/background/background'
export default {
  name: 'Layout',
  components: {
    navHeader,
    backgroundImg
  }
}
</script>

<style>
.layout-container{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-family: Apple Braille;
}
.layout-container .nav-header {
  width: 100%;
  height: 50px;
}
.layout-container .content-container{
  width: 100%;
  flex-grow: 1;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: row;
}
.layout-container .content-container .left-side{
  width: 300px;
  height: 100%;
}
.layout-container .content-container .right-side{
  height: 100%;
  flex-grow: 1;
  background-color: #eeeeee;
}
</style>