import Vue from 'vue'
import Router from 'vue-router'

import Officials from '@/components/Officials'
import Resources from '@/components/Resources'
import Timeline from '@/components/Timeline'
import Landing from '@/components/Landing'
import Main from '@/components/Main'
Vue.use(Router)

// standard route configuration:
// {
//       path: '/',
//       name: 'Hello',
//       component: Hello
//     }
export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/Main',
      name: 'main',
      component: Main
    },
    {
      path: '',
      name: 'landing',
      component: Landing
    },
    {
      path: '/Officials',
      name: 'officials',
      component: Officials
    },
    {
      path: '/Resources',
      name: 'resources',
      component: Resources
    },
    {
      path: '/Timeline',
      name: 'timeline',
      component: Timeline
    },
    {
      path: '*',
      redirect: '/'
    } // catch all use case
  ]
})
