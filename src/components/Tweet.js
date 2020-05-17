import React,{Component} from 'react'
import {formatTweet,formatDate} from '../utils/helpers.js'
import {connect} from 'react-redux'
import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline} from 'react-icons/ti/index'
import {handletoggletweet} from '../actions/tweet.js'
import {Link,withRouter} from 'react-router-dom'


class Tweet extends Component{
    handlelike=(e)=>{
        e.preventDefault()
        const {dispatch,tweet,Authen_User}=this.props
        dispatch(handletoggletweet({
            id: tweet.id,
            Authen_User,
            hasLiked:tweet.hasLiked,
            
        }))
        console.log('Tweet props',this.props.tweet.hasLiked)

    }
    toParent(e,id){
        e.preventDefault()
        this.props.history.push(`/tweet/${id}`)

    }
    render(){

        const {tweet}=this.props
        const {avatar,hasLiked,id,likes,name,parent,replies,text,timestamp}=tweet
        if(tweet===null){
            return <p>Doesnot Exist</p>
        }
        return(
            <Link to={`/tweet/${id}`}  className="tweet">
                
                    <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                    
                    />
                    <div className='tweet-info'>
                        <div>
                            <span>{name}</span>
                            <div>{formatDate(timestamp)}</div>
                            {
                                parent && (
                                    <button className="replying-to" onClick={(e) => this.toParent(e,parent.id)}>
                                        Replying to @{parent.author}
                                    </button>
                                )
                            }
                            <p>{text}</p>
                        </div>
                        <div className="tweet-icons">
                            <TiArrowBackOutline className="tweet-icon"/>
                            <span>{replies !== 0 && replies}</span>
                            <button className="heart-button" onClick={this.handleLike}>
                                {hasLiked === true ?
                                <TiHeartFullOutline color="#e0245e" className="tweet-icon"/>
                                : <TiHeartOutline className="tweet-icon" />
                                }
                            </button>
                            <span>{likes !== 0 && likes}</span>
                        </div>      
                        </div>
                </Link>

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

export default withRouter(connect(mapStateToProps)(Tweet))