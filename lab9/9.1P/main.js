const routes = [
  { path: '/', component: NameTest },
  { path: '/two', component: PostApp },
  { path: '/three', component: StudentMarks },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

const app = Vue.createApp({})
app.use(router)
app.mount('#app')

