<template>
    <HeaderComponent/>
    <h1>Hi {{name}}, Welcome to Home Page</h1>
    <hr>
    <h3>List of all restaurants</h3>
    <table>
        <tr>
            <th>Id</th>
            <th>Name of the Restaurant</th>
            <th>Address</th>
            <th>Contact No.</th>
            <th>Actions</th>
        </tr>
        <tr v-for="item in restaurants" v-bind:key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.address}}</td>
            <td>{{item.contact}}</td>
            <td>
                <router-link :to="'/update-restaurant/'+item.id" class="updateBtn">Update</router-link>
                <button type="button" class="deleteBtn" v-on:click="deleteRestaurant(item.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>
<script>
import HeaderComponent from './HeaderComponent.vue';
import axios from 'axios';
export default {
    name: "HomeComponent",
    components: { HeaderComponent },
    data(){
        return{
            name:'',
            restaurants:[],
        }
    },
    methods:{
        async deleteRestaurant(id){
            // console.log(id);
            let result = await axios.delete('http://localhost:3000/restaurants/'+id);    
            if(result.status == 200)
            {
                this.loadRestaurants();
            }
        },
        async loadRestaurants()
        {   
            // if not logged in do not show redirect to homepage
            // Get user from local storage
            let user = localStorage.getItem("user-info");
            this.name = JSON.parse(user).name;  //Get logged in user's name
            if (!user) {
                this.$router.push({ name: "SignIn" });
            }
            let result = await axios.get('http://localhost:3000/restaurants');
            this.restaurants = result.data;

        }
    },
    async mounted() {
        this.loadRestaurants();
    }
    
}
</script>

<style>
    hr{
        width: 70px;
        border: 1px solid #8b0304;
    }
    table{
        border: 1px solid #8b030332;
        width: 100%;
    }
    table tr th, table tr td{
        border: 1px solid #8b030332;
        padding: 10px;
    }
    table tr:hover{
        background-color: #8b030424;
    }
    button{
        height: 30px;
        margin: 0px 5px;
        padding: 0px 10px;
        cursor: pointer;
    }
    .updateBtn{
        background-color: #026cff;
        color: #fff;
        /* font-weight: 700; */
        border: 2px solid #026cff;
        border-radius: 10px;
        text-decoration: none;
        font-size: 13px;
        padding: 5px;
    }
    .deleteBtn{
        background-color: #eb1219;
        color: #fff;
        font-weight: 700;
        border: 2px solid #eb1219;
        border-radius: 10px;
    }
    .updateBtn:hover{
        background-color: #fff;
        color:  #026cff
    }
    .deleteBtn:hover{
        background-color: #fff;
        color: #eb1219;
    }

</style>