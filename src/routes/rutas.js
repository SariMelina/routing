import HomeComponent from '../components/Home.component.vue'
import UsersComponent from '../components/Users.component.vue'
import InfoUser from '../components/InfoUser.component.vue'

export const rutas = [
    { path: '', component: HomeComponent },
    { path: '/users', component: UsersComponent},
    { path: '/users/:id', component: InfoUser , name: 'infoUser' },    
    { path: '/usuarios', redirect:'/users' },    
    { path: '*', redirect:'/' }    
]