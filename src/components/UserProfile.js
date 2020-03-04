import React, { Component } from 'react'

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      workouts: [],
      meals: []
     }
  }
  render() { 
    return ( <div>
      UserProfile
    </div> )
  }
}
 
export default UserProfile