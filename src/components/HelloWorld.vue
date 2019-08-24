<template>
  <div>
    <van-nav-bar title="访客预约" right-text="去预约"  @click-right="onClickRight('Order')" />
    <van-nav-bar title="会议室预约" right-text="去预约" @click-right="onClickRight('Metting')" />
    <van-nav-bar title="冥想室预约" right-text="去预约" @click-right="onClickRight('Meditation')" />
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        active: 2
      }
    },
    methods: {
      onClickRight(name) {
        this.$router.replace(name);
      }
    }
  }

</script>

<style scope>
</style>
