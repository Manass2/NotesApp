<template>
    <div>
        <h3>Add New Note</h3>
        <form @submit.prevent="newNote">
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" v-model="title" required> 
            </div>
            <div class="mb-3">
                  <label for="text" class="form-label">Text</label>
                  <textarea class="form-control" id="text" rows="3" v-model="text" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" @click="newNote">Add note</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                text: ''
            }
        },
        computed: {            
            userLogged() {
                return this.$store.state.users.currentUser
            },
            notes() {
                return this.$store.state.notes.notes
            }
        },
        methods: {
            newNote() {
               this.$store.dispatch('addNote', {
                    title: this.title,
                    text: this.text, 
                    userId: this.userLogged.userId,
                    noteId: this.notes.length   
                }) 
                this.$router.push('notes')
            }
        }
    }
</script>