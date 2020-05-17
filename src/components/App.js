import React, { Component,Fragment } from 'react'
import shared_data from '../actions/share.js'
import {connect} from 'react-redux'
import Dashboard from './Dashboard.js'
import LoadingBar from 'react-redux-loading'
import TweetNew from './TweetNew.js'
import TweetPage from './Tweetpage.js'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Nav from './Nav.js'
class App extends Component {
  componentDidMount(){
    this.props.dispatch(shared_data())

  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar/>

          <div className="container">
            <Nav/>

            {
            this.props.loading===true
            ? null 
            : 
            <div>
              <Route path='/' exact component={Dashboard}/>
              <Route path='/new' exact component={TweetNew}/>
              <Route path='/tweet/:id' exact component={TweetPage}/>
            </div>
            }
      </div>
      </Fragment>
      </Router>
      
    )
  }
}
function mapStateToProps({Authen_User}){
  return{
    loading: Authen_User===null
  }
}

export default connect(mapStateToProps)(App)