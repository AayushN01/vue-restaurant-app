<template>
    <HeaderComponent/>
    <h1>Update Restaurant</h1>
    <div class="error">
    </div>
    <form class="add-restro-form">
        <input type="text" name="name" placeholder="Enter restaurant's name" v-model="restaurant.name">
        <input type="text" name="address" placeholder="Enter restaurant's address" v-model="restaurant.address">
        <input type="tel" name="contact" placeholder="Enter restaurant's contact" v-model="restaurant.contact">
        <button v-on:click="updateRestaurant">Update</button>
    </form>
</template>
<script>
import HeaderComponent from './HeaderComponent.vue';
import axios from 'axios';
export default {
    name: "UpdateComponent",
    components: { HeaderComponent },
    data(){
        return{
            restaurant:[],
            errors:[]
        }
    },
    methods:{
        async updateRestaurant(e){
            e.preventDefault();
            // console.log(this.restaurant);
            const result = await axios.put('http://localhost:3000/restaurants/'+this.$route.params.id,{"name":this.restaurant.name,"address":this.restaurant.address,"contact":this.restaurant.contact});
            if(result.status == 200){
                this.$router.push({name:"Home"});
            }
        }
    },
    async mounted() {
        // if not logged in do not show redirect to homepage
        // Get user from local storage
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignIn" });
        }
        // Prefill form
        // console.log(this.$route.params.id)
        let restro_id = this.$route.params.id
        let result = await axios.get('http://localhost:3000/restaurants/'+restro_id);
        // console.log(result);
        this.restaurant = result.data;
    }
}
</script>