import notes from '../../data/notes'

// const state = {
//     notes: []
// }

// const mutations = {
//     'SET_NOTES' (state, notes) {
//         state.notes = notes;
//     } 
// }

// const actions = {
//     loadNotes: ({commit}) => {
//         commit('SET_NOTES', notes)
//     }
// }

// const getters = {
//     notes: state => {
//         return state.notes;
//     }
// }

// export default {
//     state,
//     mutations,
//     actions,
//     getters
// }

export default {
    state: {
        notes: notes,
        note: null
    },
    getters: {
        notes: (state, getters) => {
            return state.notes.filter(note => note.userId === getters.isUserLogged.userId)
        }
    },
    mutations: {
        setNotes (state, notes) {
            state.notes = notes;
        },
        setNewNote (state, payload) {
            state.notes.push(payload);
            console.log(payload);
            console.log(state.notes)
        },
        detailNote(state, payload) {
            state.note = payload
            console.log(payload)
            console.log(state.note)
        },
        deleteNote(state, payload) {
            state.notes = payload
        },
        updateNotes(state, payload) {
            state.notes = payload
        }
    },
    actions: {
        loadNotes: ({commit}) => {
            commit('setNotes', notes)
        },
        addNote: (context, payload) => {
            let newNote = {
                title : payload.title,
                text : payload.text,
                noteId: payload.noteId + 1,
                userId: payload.userId

            }
            console.log(newNote)
            context.commit('setNewNote', newNote);
        },
        getNote: (context, payload) => {
            // console.log(payload);
            // console.log(notes)
            let paramId = Number(Object.values(payload))
            let noteDetail = notes.filter(note => note.noteId === paramId)[0]
            // console.log(payload.value);
            // console.log(paramId)
            console.log(noteDetail)
            context.commit('detailNote', noteDetail);
        },
        removeNote: (context, payload) => {
            let newNotes = notes.filter(note => note.noteId !== payload.noteId);
            console.log(newNotes)
            context.commit('deleteNote', newNotes);
        },
        noteEdit: (context, payload) => {
            const noteIndex = notes.findIndex(x => x.noteId === payload.noteId)
            let newNotes = [...notes]
            newNotes[noteIndex] = {
                title: payload.title,
                text: payload.text,
                noteId: payload.noteId,
                userId: payload.userId
            }
            console.log(payload.noteId)
            console.log(noteIndex)
            console.log(newNotes[noteIndex])
            console.log(newNotes)
            context.commit('updateNotes', newNotes);
        }
    }

}