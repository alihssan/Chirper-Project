import {Receive_tweets} from '../actions/tweet.js'



export function Tweet_reducer(state={},actions){
    switch(actions.type){
        case Receive_tweets:
            return {
                ...state,
                ...actions.tweets
            }
        default:
            return state
    }   

}