import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/Overview'
import General from '@/components/General'
import Timeline from '@/components/Timeline'
import Landing from '@/components/Landing'

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
      path: '',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/overview',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/general',
      name: 'General',
      component: General
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: Timeline
    },
    {
      path: '*',
      redirect: '/'
    } // catch all use case
  ]
})
