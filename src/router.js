import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Cars from './views/Cars.vue'
import Create from './components/CreateCarForm.vue'
import Store from './store'

Vue.use(Router)


let router = new Router({
  routes: [
    {
      path: '/cars',
      name: 'cars',
      component: Cars,
      children: [
        {
          //this path is /cars/create
          path: 'create',
          name: 'create',
          component: Create
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      },
      children: [
        {
          //this path is /cars/create
          path: 'create',
          name: 'create',
          component: Create
        }
      ]
    },
    {
      path: '/cars/:carId',
      name: 'car',
      component: function () {
        return import(/* webpackChunkName: "car" */ './views/Car.vue')
      },
      beforeEnter(to, from, next){
        if(!Store.state.user._id){
          next({name: 'login'});
        }
        next(); 
      }
    },
    {
      path: '*',
      redirect: '/cars'
    }
  ]
})


router.beforeEach((to, from, next)=>{
  switch(to.name){
    case 'car':
    case 'house':
    case 'property':
      if(!Store.state.user._id){
          next({name: 'login'});
      }
      break;
  }
  switch(from.name){
     case 'create':
      let answer = window.confirm('Are you sure? you have unsaved changes?')
        next(answer)
        break;
  }
  next();
})

export default router