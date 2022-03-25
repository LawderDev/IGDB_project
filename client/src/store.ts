import { createStore } from 'vuex'
import {User} from '@/types/UserType'

export const store = createStore({
    state: {
        user: {_id: -1, name:"anonyme"} as User,
    },
})