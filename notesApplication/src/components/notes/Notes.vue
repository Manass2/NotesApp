<template>
    <div v-if="isLogged" class="notes">
        <app-note 
            v-for="note in notes" 
            :key="note.id"
            :note='note'>
        </app-note>
    </div>
</template>

<script>
    import Note from './Note.vue'

    export default {
        components: {
            appNote: Note
        },
        computed: {
            notes() {
                return this.$store.getters.notes
            },
            isLogged() {
                return this.$store.state.users.isLogged
            }
        }
    }
</script>

<style lang="scss" scoped>
    .notes {
        display: flex;
        flex-wrap: wrap;
    }


</style>