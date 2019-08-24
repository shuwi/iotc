<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active" border route>
      <van-tabbar-item icon="comment-o" dot replace
    to="/alert">通知</van-tabbar-item>
      <van-tabbar-item icon="shop-collect-o" replace
    to="/bought">点单</van-tabbar-item>
      <van-tabbar-item icon="todo-list-o" replace
    to="/">预约</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        active:2
      }
    },
    methods: {}
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

</style>
