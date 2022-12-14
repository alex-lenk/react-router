import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import Stats from './stats'
import Edit from './edit'

const Dashboard = () => {
  return <>
    <ul>
      <li><Link to='/dashboard/edit'>Edit</Link></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
    </ul>
    <Switch>
      <Route exact path='/dashboard/' component={Stats}/>
      <Route path='/dashboard/edit' component={Edit}/>
    </Switch>
  </>
}

//<h1>Dashboard</h1>

export default Dashboard
