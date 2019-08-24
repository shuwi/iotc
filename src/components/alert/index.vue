<template>
  <div>
    <van-nav-bar title="消息通知" fixed border left-text="返回" left-arrow @click-left="onClickLeft" />
    <div style="margin:60px 10px 20px 10px;">
      <van-panel title="标题" desc="描述信息" status="状态">
        <div>内容</div>
        <div slot="footer">
          <van-button size="small">按钮</van-button>
          <van-button size="small" type="danger">按钮</van-button>
        </div>
      </van-panel>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Alert',
    data() {
      return {
        value: 1,
        active: 2
      }
    },
    methods: {
      onSubmit() {},
      onClickLeft() {
        this.$router.replace("/");
      }
    }
  }

</script>

<style>

</style>
