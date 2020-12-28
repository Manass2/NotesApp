<template>
    <div>
        <h1 v-if="isLogged">Welcome {{userLogged.username}}</h1>
        <app-header></app-header>
  
        <router-view class="content"></router-view>
    </div>
</template>

<script>
    import Header from './Header.vue'

    export default {
        components: {
            appHeader: Header
        },
        computed: {
            userLogged() {
                return this.$store.state.users.currentUser
            },
            isLogged() {
                return this.$store.state.users.isLogged
            }
        },
        created() {
            // this.$store.dispatch('loadNotes')
            // return this.$store.state.notes.notes
        }
    }
</script>

<style lang="scss">
    .content {
        margin-top: 100px;
    }

</style>