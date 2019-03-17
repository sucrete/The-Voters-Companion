import Vue from 'vue'
import Router from 'vue-router'
// import Overview from '@/components/Overview'
// import General from '@/components/General'
// import Timeline from '@/components/Timeline'
// import Landing from '@/components/Landing'

const Officials = () => import('@/components/Officials')
const Toolkit = () => import('@/components/Toolkit')
const Timeline = () => import('@/components/Timeline')
const Landing = () => import('@/components/Landing')
const Main = () => import('@/components/Main')

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
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '',
      name: 'landing',
      component: Landing
    },
    {
      path: '/officials',
      name: 'officials',
      component: Officials
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
