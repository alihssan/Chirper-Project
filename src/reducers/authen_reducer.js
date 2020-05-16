
import {Authen} from '../actions/authenuser.js'



export function Authen_User(state= null,actions){
    switch(actions.type){
        case Authen:
            return actions.id
        default:
            return state
    }   

}