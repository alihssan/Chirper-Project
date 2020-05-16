export const Receive_tweets='Receive_tweets'

export function receive_tweets(tweets){
    return{
        type:Receive_tweets,
        tweets
    }
}