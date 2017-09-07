import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Timeline from '@/components/Timeline'
import District from '@/components/District'

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
      path: '/hello',
      name: 'Hello',
      component: Hello
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
