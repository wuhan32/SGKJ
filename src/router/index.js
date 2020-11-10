import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
Vue.use(VueRouter)

const Login = () =>
  import('@/views/login/login.vue')
const Home = () =>
  import('@/views/tabbar/home.vue')
const ERROR = () =>
  import('@/views/404/404.vue')
const DoctorRecord = () =>
  import('@/views/tabbar/doctorRecord')
const doctorLimit = () =>
  import('@/views/tabbar/doctorLimit')
const ClientRecord = () =>
  import('@/views/tabbar/clientRecord')
const Workbench = () =>
  import('@/views/workbench/workbench.vue')
const WorkbenchRight = () =>
  import('@/views/workbench/workbenchRight.vue')
const NewRecord = () =>
  import('@/views/record/record/newRecord.vue')
const NewAdaptive = () =>
  import('@/views/record/adaptive/newAdaptive.vue')
const NewExamine = () =>
  import('@/views/record/examine/newExamine.vue')
const NewReview = () =>
  import('@/views/record/review/newReview.vue')
const NewFresh = () =>
  import('@/views/record/fresh/newFresh.vue')
const CorneaImages = () =>
  import('@/views/eyeImages/corneaImages.vue')
const FundusImages = () =>
  import('@/views/eyeImages/fundusImages.vue')
const SpacingPiece = () =>
  import('@/views/record/spacingPiece/spacingPiece.vue')
const PayPiece = () =>
  import('@/views/record/payPiece/payPiece.vue')
const FilmTing = () =>
  import('@/views/record/filmTing/filmTing.vue')
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/login/:role?', component: Login },
  //{ path: '*', redirect: '/404' },
  {
    path: '/404',
    name: '404',
    component: ERROR
  },
  {
    path: '/home', redirect: '/clientRecord', name: 'home', component: Home,
    children: [
      // {
      //   path: '/doctorRecord', component: DoctorRecord, meta: [
      //     { title: '就诊档案', },
      //   ],
      // },
      {
        path: '/workbenchRight:id?', component: WorkbenchRight, meta: [
        ],
      },
      {
        path: '/clientRecord', component: ClientRecord, meta: [
          { title: '客户档案' },
        ],
      },
      {
        path: '/workAmount', component: doctorLimit, meta: [
          { title: '医生配额设置' },
        ],
      },
      {
        path: '/newRecord/:id?', component: NewRecord, meta: [
          { title: '保存客户档案' },
        ],
      },
      {
        path: '/newAdaptive', component: NewAdaptive, meta: [
          { title: '编辑适配染色' },
        ],
      },
      {
        path: '/newExamine:id?', component: NewExamine, meta: [
          { title: '编辑检查档案' },
        ],
      },
      {
        path: '/nosepiece:id?', component: NewExamine, meta: [
          { title: '编辑换镜档案' },
        ],
      },
      {
        path: '/optimize:id?', component: NewExamine, meta: [
          { title: '编辑优化档案' },
        ],
      },
      {
        path: '/newReview', component: NewReview, meta: [
          { title: '编辑复查档案' },
        ],
      },
      {
        path: '/newFresh', component: NewFresh, meta: [
          { title: '编辑新镜染色' },
        ],
      },
      {
        path: '/corneaImages', component: CorneaImages, meta: [
          { title: '角膜地形图' },
        ],
      },
      {
        path: '/fundusImages', component: FundusImages, meta: [
          { title: '眼底照片' },
        ],
      },
      {
        path: '/fundusImages', component: FundusImages, meta: [
          { title: '眼底照片' },
        ],
      },
      {
        path: '/spacingPiece', component: SpacingPiece, meta: [
          { title: '定片' },
        ],
      },
      {
        path: '/payPiece', component: PayPiece, meta: [
          { title: '交片记录' }
        ]
      },
      {
        path: '/filmTing', component: FilmTing, meta: [
          { title: '验片记录' }
        ]
      }


    ],

  },

]


const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}


const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取token  
  const token = store.state.token
  if (!token) return next('/login')
  next()
})

export default router
