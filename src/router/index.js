import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Order from '@/components/order/index'
import Meditation from '@/components/meditation/index'
import Bought from '@/components/bought/index'
import Alert from '@/components/alert/index'
import Metting from '@/components/metting/index'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/meditation',
      name: 'Meditation',
      component: Meditation
    },
    {
      path: '/bought',
      name: 'Bought',
      component: Bought
    },
    {
      path: '/alert',
      name: 'Alert',
      component: Alert
    },
    {
      path: '/metting',
      name: 'Metting',
      component: Metting
    }
  ]
})
