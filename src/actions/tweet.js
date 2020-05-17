import {saveLikeToggle,saveTweet } from '../utils/api.js'
import {showLoading,hideLoading} from 'react-redux-loading'
export const Receive_tweets='Receive_tweets'
export const Toggle_tweets='Toggle_tweets'
export const Add_Tweet='Add_Tweet'


export function receive_tweets(tweets){
    return{
        type:Receive_tweets,
        tweets
    }
}
function toggle_tweet({id,Authen_User,hasLiked}){
    return{
        type:Toggle_tweets,
        id,
        Authen_User,
        hasLiked
    }
}
export function handletoggletweet({id,Authen_User,hasLiked}){
    return (dispatch)=>{
        dispatch(toggle_tweet({id,Authen_User,hasLiked}))
        return saveLikeToggle({id,Authen_User,hasLiked})
        .catch(
            (e)=>{
                console.warn('There is an Error')
                dispatch(toggle_tweet({id,Authen_User,hasLiked}))
                alert('There is an error liking the tweet')
            }
        )
    }
}
function add_Tweet(tweet){
    return {
        type:Add_Tweet,
        tweet
    }
}


export function handleAddTweet(text,replyingTo){
    return (dispatch,getState)=>{
        const { Authen_User } = getState()
        dispatch(showLoading())
        return saveTweet({
            text,
            author:Authen_User,
            replyingTo
        })
        .then((tweet)=>dispatch(add_Tweet(tweet)))
        .then(()=>dispatch(hideLoading()))


    }

}