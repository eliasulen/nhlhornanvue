import Vue from 'vue'
import Router from 'vue-router'
import Odds from '../components/Odds'
import Recent from '../components/Recent'
import TeamOdds from '../components/TeamOdds'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Recent
    },
    {
        path: '/odds',
        component: Odds
    },
    {
        path: '/teamodds',
        component: TeamOdds
    }
  ]
})