<template>
  <div>
    <van-nav-bar title="线上点单" fixed border left-text="返回" left-arrow @click-left="onClickLeft"/>
    <div style="margin:60px 10px 20px 10px;">
      <van-card price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
        <div slot="footer">
          <van-stepper v-model="value" button-size="22px" />
        </div>
      </van-card>
      <van-card price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
        <div slot="footer">
          <van-stepper v-model="value" button-size="22px" />
        </div>
      </van-card>
      <van-card price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
        <div slot="footer">
          <van-stepper v-model="value" button-size="22px" />
        </div>
      </van-card>
      <van-card price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
        <div slot="footer">
          <van-stepper v-model="value" button-size="22px" />
        </div>
      </van-card>
      <van-card price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
        <div slot="footer">
          <van-stepper v-model="value" button-size="22px" />
        </div>
      </van-card>
      <van-card price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
        <div slot="footer">
          <van-stepper v-model="value" button-size="22px" />
        </div>
      </van-card>
    </div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>
<script>
  export default {
    name: 'Bought',
    data() {
      return {
        value: 1,
        active: 2
      }
    },
    methods: {
      onSubmit() {
      },
      onClickLeft(){
          this.$router.replace("/");
      }
    }
  }

</script>

<style>

</style>
