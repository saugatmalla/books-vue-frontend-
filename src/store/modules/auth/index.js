import * as ACTIONS from '@/store/types/action-types'
import * as MUTATIONS from '@/store/types/mutation-types'
import Auth from '@/api/auth'

export default {
    namespaced: true,
    state: {
        user: null,
        token: null
    },
    mutations: {
        [MUTATIONS.SET_USER](state, payload) {
            state.user = payload
        }
    },
    actions: {
        async [ACTIONS.REGISTER_USER]({commit}, data = {}) {
            console.log('@authAction-registeruser')
            const response = await Auth.register(data)
            console.log(response)
        }
    }
}