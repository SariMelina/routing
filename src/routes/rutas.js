import HomeComponent from '../components/Home.component.vue'
import UsersComponent from '../components/Users.component.vue'

export const rutas = [
    { path: '', component: HomeComponent },
    { path: '/users', component: UsersComponent },
    { path: '/users/:id', component: UsersComponent }
]