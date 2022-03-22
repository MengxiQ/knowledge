import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['super','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/competitions',
    component: Layout,
    redirect: '/competitions/list',
    name: 'Competitions',
    meta: { title: '竞赛管理', icon: 'el-icon-s-finance' },
    children: [
      {
        path: 'list',
        name: 'CompetitionList',
        component: () => import('@/views/competitions/competitionsList'),
        meta: { title: '竞赛列表', icon: 'table' }
      },
      {
        path: 'type',
        name: '',
        component: () => import('@/views/competitions/competitionType'),
        meta: { title: '竞赛类别', icon: 'tree' }
      },
      {
        path: 'attend',
        name: 'Attend',
        component: () => import('@/views/competitions/attend'),
        meta: { title: '报名审核', icon: 'el-icon-s-claim' }
      }
    ]
  },

  {
    path: '/users',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '',
        component: () => import('@/views/users/users'),
        meta: { title: '用户列表', icon: 'el-icon-user-solid' }
      }
    ]
  },

  {
    path: '/contents',
    component: Layout,
    redirect: '/contents/home',
    name: 'Contents',
    meta: {
      title: '内容管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'home',
        component: () => import('@/views/contents/home/home'),
        name: 'contentsHome',
        meta: { title: '首页管理' }
      },
      {
        path: 'competitions',
        component: () => import('@/views/contents/competitions/competitions'),
        name: 'contentsCompetitions',
        meta: { title: '竞赛页面' }
      },
      {
        path: 'guides',
        component: () => import('@/views/contents/guides/guides'),
        name: 'contentsGuides',
        meta: { title: '公告列表' }
      }
    ]
  },

  {
    path: '管理员',
    component: Layout,
    children: [
      {
        path: '/super',
        component: () => import('@/views/super/super'),
        meta: { title: '管理员', icon: 'el-icon-s-custom' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
