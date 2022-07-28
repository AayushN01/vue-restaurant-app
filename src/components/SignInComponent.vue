<template>
    <img src="../assets/restaurant-logo.png" alt="logo" class="logo">
    <h1>Sign In</h1>
    <div class="error" v-if="error">
        <ul>
            <li v-for="e in error" v-bind:key="e">{{e}}</li>
        </ul>
    </div>
    <form class="login-form" @submit="signIn">
        <input type="email" placeholder="Enter Email" name="email" v-model="email">
        <input type="password" placeholder="Enter Password" name="password" v-model="password">
        <button>Sign In</button>
        <p>Don't have account? <router-link to="/sign-up">Sign Up</router-link></p>
    </form>
</template>

<script>

import axios from 'axios'
export default {
    name:'SignUpComponent',
    data(){
        return{
            error:[],
            email:'',
            password:''
        }
    },methods:{
        signIn(e){
            e.preventDefault();
            if(this.email && this.password){
                // console.log(this.email, this.password);
                axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`).then((result) => {
                    // console.log(result);
                    if(result.status == 200 & result.data.length>0){
                        // store result in local storage
                        localStorage.setItem("user-info",JSON.stringify(result.data[0]));
                        // Redirect to homepage
                        this.$router.push({name:'Home'});  
                    } else {
                        this.error.push('Invalid email or password. Please try again');
                    }
                });

             }
            if(!this.email){
                this.error.push('Email is required *');
            }
            if(!this.password){
                this.error.push('Password is required *')
            }
        }
    },mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'Home'})
        }
    }
}
</script>
