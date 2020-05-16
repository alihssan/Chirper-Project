import React, { Component } from 'react'
import shared_data from '../actions/share.js'
import {connect} from 'react-redux'
import Dashboard from './Dashboard.js'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(shared_data())

  }
  render() {
    return (
      <div>
        <LoadingBar/>
        <Dashboard/>
      </div>
    )
  }
}

export default connect()(App)