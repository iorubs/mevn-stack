import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import Home from '@/components/home/home'

import '@/style/main.scss'

import ListObjects from '@/components/list-objects/list-objects.vue'
import CreateObject from '@/components/create-object/create-object'
import ShowObject from '@/components/show-object/show-object'
import UpdateObject from '@/components/update-object/update-object'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'ListObjects',
      component: ListObjects
    },
    {
      path: '/create',
      name: 'CreateObject',
      component: CreateObject
    },
    {
      path: '/show/:id',
      name: 'ShowObject',
      component: ShowObject
    },
    {
      path: '/update/:id',
      name: 'UpdateObject',
      component: UpdateObject
    }
  ]
})
