import HomeComponent from './components/HomeComponent.vue'
import SignUpComponent from './components/SignUpComponent.vue'
import SignInComponent from './components/SignInComponent.vue'
import AddComponent from './components/AddComponent.vue'
import UpdateComponent from './components/UpdateComponent.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {name:'Home',component:HomeComponent,path:'/'},
    {name:'SignUp',component:SignUpComponent,path:'/sign-up'},
    {name:'SignIn',component:SignInComponent,path:'/sign-in'},
    {name:'Add',component:AddComponent,path:'/add-restaurant'},
    {name:'Update',component:UpdateComponent,path:'/update-restaurant'},
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router