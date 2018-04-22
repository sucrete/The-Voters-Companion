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
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/Overview',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/General',
      name: 'General',
      component: General
    },
    {
      path: '/Timeline',
      name: 'Timeline',
      component: Timeline
    }
  ]
})
