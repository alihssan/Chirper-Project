import {Receive_tweets,Toggle_tweets,Add_Tweet} from '../actions/tweet.js'



export function Tweet_reducer(state={},actions){
    switch(actions.type){
        case Receive_tweets:
            return {
                ...state,
                ...actions.tweets
            }
        case Toggle_tweets:
            return{
                ...state,
                [actions.id]:{
                    ...state[actions.id],
                    likes: actions.hasLiked===true ?
                    state[actions.id].likes.filter((uid)=>
                        uid!==actions.Authen_User
                    )
                    : state[actions.id].likes.concat([actions.Authen_User])
                }
            }
        case Add_Tweet:
            
                const { tweet } = actions

            let replyTo = {}
            if (tweet.replyingTo !== null) {
                replyTo = {
                [tweet.replyingTo]: {
                    ...state[tweet.replyingTo],
                    replies: state[tweet.replyingTo].replies.concat([tweet.id])
                }
                }
                
            }
            return {
                ...state,
                [tweet.id]: tweet,
                ...replyTo
            };

            
        default:
            return state
    }   

}