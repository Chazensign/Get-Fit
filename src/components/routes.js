import React from 'react'
import AddEx from './AddEx/AddEx'
import Landing from './Landing'
// import ExList from './ExList/ExList'
import ExDetails from './ExDetails/ExDetails'
import UserProfile from './UserProfile'
import {Switch, Route} from 'react-router-dom'
import UserExList from './UserExList'
import AddFood from './AddFood'
import FoodDetails from './FoodDetails'

export default (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/user/exlist' component={UserExList} />
    {/* <Route path='/detview/:id' component={ExDetails} /> */}
    <Route path='/exercise/details' component={ExDetails} />
    <Route path='/addex' component={AddEx} />
    <Route path='/profile' component={UserProfile} />
    <Route path='/user/exercises/:group' component={UserExList} />
    <Route path='/user/addfood' component={AddFood} />
    <Route path='/food/details/:foodId' component={FoodDetails} />
  </Switch>
)