import React from 'react'
import Landing from './Landing'
import ExDetails from './ExDetails'
import UserProfile from './UserProfile'
import {Switch, Route} from 'react-router-dom'
import UserExList from './UserExList'
import AddFood from './AddFood'
import FoodDetails from './FoodDetails'
import Inputs from './Inputs'

export default (
  <Switch>
    <Route path='/user/exlist' component={UserExList} />
    <Route path='/add/exercise' component={Inputs} />
    <Route path='/exercise/details' component={ExDetails} />
    <Route path='/profile' component={UserProfile} />
    <Route path='/user/exercises/:group' component={UserExList} />
    <Route path='/user/addfood' component={AddFood} />
    <Route path='/food/details/:foodId' component={FoodDetails} />
    <Route path='/' component={Landing} />
  </Switch>
)