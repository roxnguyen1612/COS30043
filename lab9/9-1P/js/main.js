// Creating the VueRouter

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(), 
	routes: [
	{
		path: '/dashboard',
		component: Dashboard,
		name:  'dashboard'
	}
  ]
})

//create new vue instance  
const app = Vue.createApp({

  data: function () {
	  return{
		error:false,
		errorMsg:'',
  }
  },
   mounted() {
    //not implement yet
        this.$router.replace({ name: "dashboard" });
        },
	methods: {
		//,...
	},  
    
});

// app.component('app-readmysql', ReadMysql)
// app.component('app-postdata', PostData)
// app.component('app-deldata', DelData)
// app.component('app-putdata', PutData)


const vuetify = Vuetify.createVuetify( )   
app.use(vuetify)
app.use(router)
app.mount('#app')