<template>
  <div>
    <van-nav-bar title="访客预约" left-text="返回" left-arrow @click-left="onClickLeft" fixed border/>
    <van-cell-group>
      <van-popup v-model="show" position='bottom'>
        <!--弹出层-->
        <van-datetime-picker v-model="currentDate" type="date" :min-date="minDate" :max-date="maxDate"
          @confirm="confirm" @cancel="cancel" />
      </van-popup>

      <van-field left-icon="notes-o" v-model="duedate" disabled label="预约日期" placeholder="请选择日期" required @click="dete" />
      <van-field left-icon="contact" v-model="username" required clearable label="用户名" right-icon="question-o" placeholder="请输入用户名"
        @click-right-icon="$toast('question')" />
      <van-field left-icon="phone-o" v-model="phone" label="联系电话" placeholder="请输入密码" required />
    </van-cell-group>
  </div>
</template>
<script>
  export default {
    name: 'Order',
    data() {
      return {
        show: false,
        duedate: '',
        username: 2,
        phone: 123,
        minHour: 10,
        maxHour: 20,
        minDate: new Date(),
        maxDate: new Date(2039, 10, 1),
        currentDate: new Date()
      }
    },
    methods: {
      onClickLeft() {
        this.$router.replace("/");
      },
      confirm() {
        this.show = false;
        var moment = require('moment');
        this.duedate = moment(this.currentDate).format('YYYY-MM-DD');
        console.log(moment(this.currentDate).format('YYYY-MM-DD'))
      },
      cancel() {
        this.show = false;
      },
      dete() {
        this.show = true;
      }
    }
  }

</script>
<style>

</style>
