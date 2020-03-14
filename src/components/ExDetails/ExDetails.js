import React, { Component } from "react"
import axios from "axios"
import "./ExDetails.css"
import { connect } from 'react-redux'
// import EditEx from "./EditEx"
import AppButton from "./AppButton"
import Inputs from "../Inputs/Inputs";

class ExDetails extends Component {
  constructor(props) {
    super(props)
    const {
      notes,
      modifications,
      reps,
      sets,
      time,
      weight
    } = this.props.location.state.exercise
    this.state = {
      toDisplay: {},
      displayEdit: true,
      userData: {
        notes,
        modifications,
        reps,
        sets,
        time,
        weight
      }
    }
  }
  submitChange = () => {
    axios.put(`/api/exercise/${this.state.toDisplay.id}`, this.state.toDisplay)
    this.toggleEdit()
  }
  componentDidMount() {
    if (!this.props.location.state.exercise) {
      axios
        .get(`/api/exercise/${this.props.match.params.id}`)
        .then(res => {
          this.setState({ toDisplay: res.data[0] })
        })
        .catch(err => console.log(err))
      }
  }
  toggleEdit = () => {
    this.setState({ displayEdit: !this.state.displayEdit })
  }
  handleChange = trg => {
    this.setState({
        userData: {...this.state.userData, [trg.name]: trg.value}
    })
  }
  deleteEx = () => {
    axios
      .delete(`/api/exercise/${this.state.toDisplay.id}`)
      .then(res => this.goBack())
      .catch(err => console.log(err))
  }
  goBack = () => {
    this.props.history.push(`/exlist/${this.state.toDisplay.MajorMuscle}`)
  }
  
  render() {

    const {
      ex_id,
      exercise,
      equipment,
      exercisetype,
      majormuscle,
      minormuscle,
      example,
      notes,
      modifications,
      reps,
      sets,
      time,
      weight
    } = this.props.location.state.exercise ? this.props.location.state.exercise : this.state.toDisplay
    
    return this.state.displayEdit ? (
      <div className='center-it'>
        <div className='header-back'></div>
        <div id={ex_id}>
          <h3 className='ex-title'>{exercise}</h3>
          <dl>
            <p>
              Equipment: <span>{equipment}</span>
            </p>
            <p>
              Exersize Type: <span>{exercisetype}</span>
            </p>
            <p>
              Major Muscle: <span>{majormuscle}</span>
            </p>
            <p>
              Minor Muscle: <span>{minormuscle}</span>
            </p>
            <p>
              Notes: <span>{notes}</span>
            </p>
            <p>
              Modifications: <span>{modifications}</span>
            </p>
            <p>
              Reps: <span>{reps}</span>
            </p>
            <p>
              Sets: <span>{sets}</span>
            </p>
            <p>
              Weight: <span>{weight}</span>
            </p>
          </dl>
        </div>
        <details>
          <img src={example} alt='Exercise example' />
        </details>
        <div className='button-cont'>
          {this.props.userId && <> 
          <AppButton name='Edit' onClick={this.toggleEdit} />
          <AppButton name='Delete' onClick={this.deleteEx} />
          </>}
          <AppButton name='Go Back' onClick={this.goBack} />
        </div>
      </div>
    ) : (
      <div>
        <div className='header-back'></div>
        <Inputs
          toggleEdit={this.toggleEdit}
          submitChange={this.submitChange}
          handleChange={this.handleChange}
          userData={this.state.userData}
          />
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    userId: reduxState.userId,
    username: reduxState.username
  }
}
export default connect(mapStateToProps)(ExDetails)

