import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/page1',
      component: () => import('../components/page1'),
      name: 'page1'
    }, {
      path: '/page2',
      name: 'page2',
      component: () => import('../components/page2')

    }, {
      path: '/page3',
      name: 'page3',
      component: () => import('../components/page3')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login/login')
    },
    {
      path:'/home',
      name:'home',
      component:()=>import ('../components/home/home'),
      children:[{
        path:'/',
        redirect:'recommend'
      },{
        path:'recommend',
        name:'recommend',
        component:()=>import ('../components/home/recommend/recommend')
      },{
        path:'search',
        name:'search',
        component:()=>import ('../components/home/search/search')
      },{
        path:'singer',
        name:'singer',
        component:()=>import ('../components/home/singer/singer')
      },{
        path:'seniorty',
        name:'seniorty',
        component:()=>import ('../components/home/seniorty/seniorty')
      }
    ]
    },
    {
      path:'/regist',
      name:'regist',
      component:()=>import ('../components/regist/regist')
    },
    {
      path:'/user',
      name:'user',
      component:()=>import ('../components/user/user')
    }
  ]
})
