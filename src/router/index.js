import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/Overview'
import Timeline from '@/components/Timeline'
import District from '@/components/District'
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
      path: '/overview',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: Timeline
    },
    {
      path: '/district',
      name: 'District',
      component: District
    }
  ]
})
