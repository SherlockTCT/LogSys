import Vue from 'vue'
import Router from 'vue-router'
import TaskIndex from '@/view/TaskManage/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/TaskManage',
      name: 'TaskManage',
      component: TaskIndex
    }
  ]
})
