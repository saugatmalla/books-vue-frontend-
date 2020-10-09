import auth from '@/api/auth'
import {MutationTypes} from '@/store/types/mutation-types'

export default {
    namespaced: true,
    state: {
        user: {}
    },
    actions: {
        async register({ commit }: any, data:any) {
            const payload = await auth.register(data)
            commit(MutationTypes.SET_USER, payload)
            return payload
        }
    },
    mutations: {
        [MutationTypes.SET_USER](state:any, payload:any) {
            state.user = payload
        }
    }
}