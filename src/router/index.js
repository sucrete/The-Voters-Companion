import Vue from 'vue'
import Router from 'vue-router'
// import Overview from '@/components/Overview'
// import General from '@/components/General'
// import Timeline from '@/components/Timeline'
// import Landing from '@/components/Landing'

const Overview = () => import('@/components/Overview')
const Toolkit = () => import('@/components/Toolkit')
const Timeline = () => import('@/components/Timeline')
const Landing = () => import('@/components/Landing')

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
      name: 'landing',
      component: Landing
    },
    {
      path: '/overview',
      name: 'overview',
      component: Overview
    },
    {
      path: '/toolkit',
      name: 'toolkit',
      component: Toolkit
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline
    },
    {
      path: '*',
      redirect: '/'
    } // catch all use case
  ]
})
