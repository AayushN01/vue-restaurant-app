<template>
    <HeaderComponent/>
    <h1>Hi, Welcome to Home Page</h1>
</template>
<script>
import HeaderComponent from './HeaderComponent.vue';
export default {
    name: "HomeComponent",
    mounted() {
        // if not logged in do not show redirect to homepage
        // Get user from local storage
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignIn" });
        }
    },
    components: { HeaderComponent }
}
</script>