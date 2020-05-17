import React,{Component} from 'react'
import {connect} from 'react-redux'
import Tweet from './Tweet.js'
import TweetNew from './TweetNew.js'

class TweetPage extends Component {
    render(){
        const {id,replies}=this.props
        return(
            <div>
                <br/>
            <Tweet id={id}/>
            <TweetNew/>
            <ul>
            {replies.length!==0 
            && (
                replies.map((ids)=>(
                <li key={ids}>
                    <Tweet id={ids}/>
                </li>

            ))
            )
            
            
            }
            </ul>
            <div>
               
            </div>
            </div>
            




        );
    }
}

const mapStateToProps=({Tweet_reducer},props)=>{
    const {id}=props.match.params
    return{
        id,
        replies:!Tweet_reducer[id]
        ? [] :
        Tweet_reducer[id].replies.sort((a,b)=> Tweet_reducer[b].timestamp-Tweet_reducer[a].timestamp)
    }
}
export default connect(mapStateToProps)(TweetPage)