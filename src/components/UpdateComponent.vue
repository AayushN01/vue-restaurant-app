<template>
    <HeaderComponent/>
    <h1>Update Restaurant</h1>
</template>
<script>
import HeaderComponent from './HeaderComponent.vue';
export default {
    name: "UpdateComponent",
    components: { HeaderComponent },
    mounted() {
        // if not logged in do not show redirect to homepage
        // Get user from local storage
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignIn" });
        }
    }
}
</script>