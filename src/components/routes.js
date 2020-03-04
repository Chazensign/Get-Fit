import React from 'react'
import AddEx from './AddEx/AddEx'
import Landing from './Landing/Landing'
import ExList from './ExList/ExList'
import ExDetails from './ExDetails/ExDetails'
import UserProfile from './UserProfile'
import {Switch, Route} from 'react-router-dom'

export default (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/exlist/:muscle' component={ExList} />
    <Route path='/detview/:id' component={ExDetails} />
    <Route path='/addex' component={AddEx} />
    <Route path='/profile' component={UserProfile} />
  </Switch>
)