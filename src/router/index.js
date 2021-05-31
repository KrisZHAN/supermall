import Vue from "vue"
import vueRouter from "vue-router"

// 懒加载
const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Categroy = () => import('../views/categroy/Categroy.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import('../views/detail/Detali.vue')

Vue.use(vueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/categroy',
    component: Categroy
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
]

const VueRouterPush = vueRouter.prototype.push
// --2. 修改原型对象中的push方法
vueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

const router = new vueRouter({
  routes,
  mode: "history",
})

export default router