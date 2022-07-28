import HomeComponent from './components/HomeComponent.vue'
import SignUpComponent from './components/SignUpComponent.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {name:'Home',component:HomeComponent,path:'/'},
    {name:'SignUp',component:SignUpComponent,path:'/sign-up'},
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router