import Learnings from '@/components/Learnings.vue'
import About from '@/views/About.vue'
import LearntHome from '@/views/Learning/LearntHome.vue'
import LearntNav from '@/views/Learning/LearntNav.vue'
import LearntCards from '@/views/Learning/LearntCards.vue'
import LearntDashboards from '@/views/Learning/LearntDashboards.vue'
import LearntEmbellishments from '@/views/Learning/LearntEmbellishments.vue'
import LearntForms from '@/views/Learning/LearntForms.vue'
import LearntGenerativeAI from '@/views/Learning/LearntGenerativeAI.vue'
import LearntHero from '@/views/Learning/LearntHero.vue'
import LearntPortfolio from '@/views/Learning/LearntPortfolio.vue'
import LearntPrototyping from '@/views/Learning/LearntPrototyping.vue'
import LearntResponsive from '@/views/Learning/LearntResponsive.vue'
import LearntReviewing from '@/views/Learning/LearntReviewing.vue'
import LearntSubPages from '@/views/Learning/LearntSubPages.vue'
import LearntTools from '@/views/Learning/LearntTools.vue'
import LearntUIMeaning from '@/views/Learning/LearntUIMeaning.vue'

const learningsRoutes: Array<any> = [
  {
    path: '/',
    redirect: '/learnings/learnt-home'
  },
  {
    path: '/learnings/learnt-home',
    component: LearntHome
  },
  {
    path: '/learnings',
    component: Learnings,
    children: [
      {
        path: 'learnt-home',
        component: LearntHome
      },
      {
        path: 'learnt-nav',
        component: LearntNav
      },
      {
        path: 'learnt-cards',
        component: LearntCards
      },
      {
        path: 'learnt-dashboards',
        component: LearntDashboards
      },
      {
        path: 'learnt-embellishments',
        component: LearntEmbellishments
      },
      {
        path: 'learnt-forms',
        component: LearntForms
      },
      {
        path: 'learnt-generative-ai',
        component: LearntGenerativeAI
      },
      {
        path: 'learnt-hero',
        component: LearntHero
      },
      {
        path: 'learnt-portfolio',
        component: LearntPortfolio
      },
      {
        path: 'learnt-prototyping',
        component: LearntPrototyping
      },
      {
        path: 'learnt-responsive',
        component: LearntResponsive
      },
      {
        path: 'learnt-reviewing',
        component: LearntReviewing
      },
      {
        path: 'learnt-sub-pages',
        component: LearntSubPages
      },
      {
        path: 'learnt-tools',
        component: LearntTools
      },
      {
        path: 'learnt-ui-meaning',
        component: LearntUIMeaning
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/learnings/learnt-home'
  },
  {
    path: '/about',
    component: About
  }
]

export default learningsRoutes