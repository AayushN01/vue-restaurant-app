<template>
    <h1>Hi, Welcome to Home Page</h1>
</template>
<script>
export default {
    name:'HomeComponent',
    mounted(){
        // if not logged in do not show redirect to homepage
        // Get user from local storage
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'SignUp'});
        }
    }
}
</script>