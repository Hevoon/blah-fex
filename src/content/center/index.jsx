import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import Find from '../../components/find'
import Add from '../../components/add'
import './index.css'

const Center = () => {
  return (
    // <Router>
      <div className={'router'}>
          <Redirect path="/" to="/find" />
          <Route exact path="/find" component={Find} />
          <Route exact path="/add" component={Add} />
      </div>
    // </Router>
  )
}

export default Center
