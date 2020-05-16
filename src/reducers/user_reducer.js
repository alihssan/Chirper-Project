import {Receive_users} from '../actions/user.js'



export function User_reducer(state={},actions){
    switch(actions.type){
        case Receive_users:
            return {
                ...state,
                ...actions.users
            }
        default:
            return state
    }   

}