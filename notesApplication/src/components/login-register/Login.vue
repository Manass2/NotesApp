<template>
    <div>
        <!-- <h1>Login</h1> -->
         <b-navbar toggleable="lg" type="dark" variant="info">
             <router-link to="/"><b-icon-arrow-left font-scale="3" style="color: white"></b-icon-arrow-left></router-link>
             <div class="col s12 login-container">
                 <h3> Login </h3>
             </div>
        </b-navbar>
        <form @submit.prevent="logIn" class="form">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                v-model="email">
                <br>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
            </div>
            <br>
            <button type="submit" class="btn btn-primary" @click="logIn">Log in</button>
            <!-- <v-alert color="error" :value="error" icon="close">
                Invalid Login
            </v-alert> -->
        </form>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                email: '',
                password: '',
            }
        },
        computed: {
            isUserLogged() {
                return this.$store.state.users.isLogged
            }
        },   
        methods: {
            logIn() {
                this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password,     
                })
                console.log(this.isUserLogged)
                if(this.isUserLogged) {
                    this.$router.push('dashboard/notes')
                } else {
                    alert("User not found")
                }
            }
        },
        updated() {
            console.log(this.isUserLogged)
        }
    }
</script>

<style lang="scss">
    .login-container {
        width: 100%;
        display: flex;
        justify-content: center;

        h3 {
            color: white;
            font-size: 36px;
        }
    }

    .form {
        margin-top: 180px;
    }
</style>