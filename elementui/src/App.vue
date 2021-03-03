<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<style>
</style>

<script>
export default {
  name: 'App',
  data() {
    return {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
  }
};
</script>