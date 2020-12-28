import users from '../../data/users';

// const state = {
//     users: users,
//     loggedUser: null,
//     isLogged: false
// }


// const mutations = {
//     'setLoggedUser' (state, payload) {
//         // state.loggedUser = state.users.filter(user => {
//         //     return user.email === payload.email && user.password === payload.password
//         // })
//         // state.loggedUser = state.users.filter(user => user.email === payload.email && user.password === payload.password)
//         // if(state.loggedUser.length !== 0) {
//         //     payload.logged = true
//         // }
//         state.isLogged = payload.isLogged
//         state.currentUser = payload.currentUser

//         // console.log(state.loggedUser)
//         // console.log(payload.logged)
//         // console.log(state.isLogged)
//         // console.log(payload);
//         // console.log(state.users[1])
        
//     } 
// }

// const actions = {
//     'login': (context, payload) => {
//         // console.log(this.users)
//         let currentUser = this.state.users.filter(user => user.email === payload.email && user.password === payload.password)[0]

//         console.log(this.currentUser)
//         if(currentUser !== null) {
//             context.commit('setLoggedUser', { isLogged: true, currentUser: currentUser})
//         }


//         // commit('GET_LOGGED_USER', payload)
//         //  commit(state.loggedUser = state.users.filter(user => user.email === payload.email && user.password === payload.password), payload)
        
//     }
// }

// const getters = {
//     isUserLogged: state => {
//         return state.loggedUser;
//     }
// }


export default {
    state: {
        users : users,
        currentUser: null,
        isLogged: false
    },
    getters: {
        isUserLogged: state => state.currentUser,
    },
    mutations: {
        setLoggedUser(state, payload) {
            state.isLogged = payload.isLogged
            state.currentUser = payload.currentUser
            // state.loggedUser = payload.currentUser
            // console.log(state.loggedUser)
        },
        addUser (state, payload) {
            state.users.push(payload);
            // console.log(payload);
            // console.log(state.notes)
        },
        resetUser(state) {
            state.currentUser = null
            state.isLogged = false
        }
    },
    actions: {
        login: (context, payload) => {
            console.log(users)
            console.log(payload.email)
            let currentUser = users.filter(user => user.email === payload.email && user.password === payload.password)[0]
    
            console.log(currentUser)
            if(currentUser) {
                context.commit('setLoggedUser', 
                { 
                    isLogged: true, 
                    currentUser: currentUser
                })
            }
    
    
            // commit('GET_LOGGED_USER', payload)
            //  commit(state.loggedUser = state.users.filter(user => user.email === payload.email && user.password === payload.password), payload)
            
        },
        register: (context, payload) => {
            let newUser = {
                email: payload.email,
                username: payload.username,
                password: payload.password,
                userId: payload.userId + 1
            }
            context.commit('addUser', newUser)
        },
        logOut: (context) => {
            context.commit('resetUser')
        }
    },
}