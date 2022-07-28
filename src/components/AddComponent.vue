<template>
    <HeaderComponent/>
    <h1>Add New Restaurant</h1>
    <div class="error" v-if="errors">
        <ul>
            <li v-for="e in errors" v-bind:key="e">{{e}}</li>
        </ul>
    </div>
    <form class="add-restro-form" @submit="addRestaurant">
        <input type="text" name="name" placeholder="Enter restaurant's name" v-model="restaurant.name">
        <input type="text" name="address" placeholder="Enter restaurant's address" v-model="restaurant.address">
        <input type="tel" name="contact" placeholder="Enter restaurant's contact" v-model="restaurant.contact">
        <button>Add</button>
    </form>
</template>
<script>
import HeaderComponent from './HeaderComponent.vue';
import axios from 'axios';
export default {
    name: "AddComponent",
    components: { HeaderComponent },
    data(){
        return{
            restaurant:[],
            errors:[]
        }
    },methods:{
        async addRestaurant(e){
            e.preventDefault();
            this.errors = [];
            if(this.restaurant.name && this.restaurant.address && this.restaurant.contact)
            {
                // console.log(this.restaurant.name,this.restaurant.address,this.restaurant.contact);
                let result = await axios.post('http://localhost:3000/restaurants',{"name":this.restaurant.name,"address":this.restaurant.address,"contact":this.restaurant.contact});
                console.log(result);
                this.$router.push({name:"Home"})
            }
            if(!this.restaurant.name){
                this.errors.push('Enter Name');
            }
            if(!this.restaurant.address)
            {
                this.errors.push('Enter address');
            }
            if(!this.restaurant.contact)
            {
                this.errors.push('Enter contact');
            }
        }
    }
    ,mounted() {
        // if not logged in do not show redirect to homepage
        // Get user from local storage
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignIn" });
        }
    }
}
</script>