<script setup>
import { ref, computed } from 'vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import NotFound from './components/NotFound.vue'

const routes = {
  '/': Home,
  '/about': About,
  '/NotFound' : NotFound
}
const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

</script>

<template>
<div class="link">
  <a class="el-link" href="#/">HomePage</a>
  <a class="el-link" href="#/about">DanhSachLop</a>
  <a class="el-link" href="#/NotFound">DanhSachHocSinh</a>
  
  <component :is="currentView" />
</div>

  

</template>

<style scoped>
.link{
    border-color: transparent;
    border-width: 4px;
    background-color: #dadce0;
    min-height: 700px;
}
.el-link{
    text-align: center;
    text-decoration: underline;
    font-size: 13px;
    color: black;
    font-weight: normal;
    font-size: 13px;
    font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
    margin-top: 50px;
    margin-bottom: 100px;
    margin-right: 150px;
    margin-left: 80px;
  }
</style>
