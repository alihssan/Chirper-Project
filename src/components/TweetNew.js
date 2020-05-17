import React,{Component} from 'react'
import {connect} from 'react-redux'
import {handleAddTweet} from '../actions/tweet.js'
import {Redirect} from 'react-router-dom'
class TweetNew extends Component{
    state={
        text:'',
        toHome:false
    }
    handleChange=(e)=>{
        const val=e.target.value

        this.setState({
            text:val
        })

    }
    handleClick=(e)=>{
        e.preventDefault()
        const {text}=this.state
        const {dispatch,id}=this.props
        dispatch(handleAddTweet(text,id))
        this.setState(()=>({
            text:'',
            toHome: id ? false:true
        }))
    }
    render(){
        const {text,toHome}=this.state
        const tweetLeft=280 - text.length
        if(toHome===true){
            return <Redirect path='/'/>
        }
        return(
            <div className="center">
                <h3 className="center">Compose New Tweet</h3>
                <form className="new-tweet"> 
                    <textarea className="textarea"
                              placeholder="What's Happening?"
                              value={text}
                              maxLength={280}
                              onChange={this.handleChange}
                    />
                    {
                        tweetLeft<=100 && (
                            <div className="tweet-length">
                                {tweetLeft}
                            </div>
                        )
                    }
                    <button className="btn"
                            type='submit'
                            onClick={this.handleClick}
                            disabled={text.length===0}
                            >
                                Submit
                            </button>
                </form>

            </div>

        )
    }
}
export default connect()(TweetNew)