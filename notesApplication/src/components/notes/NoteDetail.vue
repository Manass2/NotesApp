<template>
    <div class="note-detail">
        <h3 class="details">Note Details</h3>
        <!-- <p>This note ID: {{id}}</p> -->
        <p>{{note.title}}</p>
        <p>{{note.text}}</p>
        <b-button variant="info" @click="editNote">Update</b-button>
        <b-button variant="danger" @click="deleteNote">Delete</b-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               id: this.$route.params.id 
            }
        },  
        computed: {
            note() {
                return this.$store.state.notes.note
            }
        },
        methods: {
            deleteNote() {
                this.$store.dispatch('removeNote', this.note)
                this.$router.push({path: '/dashboard/notes'})
            },
            editNote() {
                this.$router.push({path: '/dashboard/editNote/'})
            }
        },
        created() {
            this.$store.dispatch('getNote', {
                    id: this.id  
            }) 
         }   
    }
</script>

<style lang="scss" scoped>

</style>