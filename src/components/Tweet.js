import React,{Component} from 'react'
import {formatTweet,formatDate} from '../utils/helpers.js'
import {connect} from 'react-redux'
import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline} from 'react-icons/ti/index'

class Tweet extends Component{
    handlelike(e){
        e.preventDefault()
        /*to be filled in */
    }
    toParent(e){
                /*to be filled in */

    }
    render(){
        console.log('Tweet props',this.props.tweet)
        const {tweet}=this.props
        const {avatar,hasLiked,id,likes,name,parent,replies,text,timestamp}=tweet
        if(tweet===null){
            return <p>Doesnot Exist</p>
        }
        return(
            
                <div className="tweet">
                    <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                    
                    />
                    <div className="tweet-info">
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                        {
                            parent && (
                                <button className="replying-to" onClick={(e)=>this.toParent(e)}>
                                    {`Replying to @${parent.author}`}
                                </button>
                            )
                        }
                        <p>{text}</p>
                    
                        <div className="tweet-icons">
                            <TiArrowBackOutline className="tweet-icon"/>
                            <span>{replies!==0 && replies}</span>
                            <button className="heart-button" onClick={this.handlelike}>
                                {hasLiked===true ? <TiHeartFullOutline color='#e0245e' className='tweet-icon'/>
                                : <TiHeartOutline className='tweet-icon'/>    
                            }
                            </button>
                            <span>{likes!==0 && likes}</span>
                        </div>
                        </div>
                </div>

        );
    }
}
const mapStateToProps=({Authen_User,Tweet_reducer,User_reducer},{id})=>{
    const tweet=Tweet_reducer[id]
    const parentTweet=tweet ? Tweet_reducer[tweet.replyingTo] : null
    return{
        Authen_User,
        tweet: tweet ? formatTweet(tweet,User_reducer[tweet.author],Authen_User,parentTweet) :null
    }
}

export default connect(mapStateToProps)(Tweet)