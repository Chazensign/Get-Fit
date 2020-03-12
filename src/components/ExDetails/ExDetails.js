import React, { Component } from "react"
import axios from "axios"
import "./ExDetails.css"
// import EditEx from "./EditEx"
import AppButton from "./AppButton"
import Inputs from "../Inputs/Inputs";

class ExDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toDisplay: {},
      displayEdit: true
      
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
  handleChange = e => {
    this.setState({
      toDisplay: {
        ...this.state.toDisplay,
        [e.target.name]: e.target.value
      }
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
    console.log(this.props.location.state)
    
    return this.state.displayEdit ? (
      <div className="center-it">
        <div className="header-back"></div>
        <div id={ex_id}>
          <h3 className="ex-title">{exercise}</h3>
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
        <details><img src={example} alt="Exercise example" /></details>
        <div className="button-cont">
          <AppButton name="Edit" onClick={this.toggleEdit} />
          <AppButton name="Delete" onClick={this.deleteEx} />
          <AppButton name="Go Back" onClick={this.goBack} />
        </div>
      </div>
    ) : (
      <div>
        <div className="header-back"></div>
        <Inputs
          whenClicked={this.submitChange}
          handleChange={this.handleChange}
          exercise={this.state.toDisplay}
        >
        </Inputs>
      </div>
    )
  }
}

export default ExDetails
