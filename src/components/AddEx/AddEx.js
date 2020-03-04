import React, { Component } from 'react';
import axios from 'axios'
import Inputs from '../Inputs/Inputs';

class AddEx extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      Exercise: '',
      Equipment: '',
      ExerciseType: '',
      MajorMuscle: '',
      MinorMuscle: '',
      Example: '',
      Notes: '',
      Modifications: '',
      Reps: null,
      Sets: null,
      Weight: null
     }
  }
  addExIn = () => {
    if (this.state.Exercise && this.state.MajorMuscle) {
    axios
      .post("/api/exercise", this.state)
      .then(this.props.history.push("/"))
      .catch(error => console.log(error))
  }else {alert('Exercise and Main Muscle Worked are required.')}
}
handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}
render() { 
  
    return (
      <div className="add-box">
        <Inputs
          whenClicked={this.addExIn}
          exercise={this.state}
          handleChange={this.handleChange}
        >
        </Inputs>
      </div>
    )
  }
}
 
export default AddEx;