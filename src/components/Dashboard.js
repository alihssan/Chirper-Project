import React,{Component} from 'react'
import {connect} from 'react-redux'
import Tweet from './Tweet.js'
class Dashboard extends Component{
    render(){
        return(

           <div>
            <h3 className="center">Your Timeline</h3>

            <ul className="dashboard-list">
                {
                    this.props.tweetIds.map((id)=>(
                    <li key={id}>
                    <Tweet id={id}/>
                    </li>
                    ))
                }
            </ul>
           </div> 

        );
    }
}
const mapStateToProps=({Tweet_reducer} )=> {
    return { tweetIds: Object.keys(Tweet_reducer)
    .sort((a,b)=>Tweet_reducer[b].timestamp-Tweet_reducer[a].timestamp)
    };
  }
  

export default connect(mapStateToProps)(Dashboard)