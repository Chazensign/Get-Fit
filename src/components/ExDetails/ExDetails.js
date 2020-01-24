import React, { Component } from "react"
import axios from "axios"
import "./ExDetails.css"
// import EditEx from "./EditEx"
import Button from "./Button"
import Header from "../Header/Header"
import Inputs from "../Inputs/Inputs";

class ExDetails extends Component {
  constructor() {
    super()
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
    axios.get(`/api/exercise/${this.props.match.params.id}`)
    .then(res => {
      this.setState({ toDisplay: res.data[0] })
    })
    .catch(err => console.log(err))
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
      id,
      Exercise,
      Equipment,
      ExersizeType,
      MajorMuscle,
      MinorMuscle,
      Example,
      Notes,
      Modifications,
      Reps,
      Sets,
      Weight
    } = this.state.toDisplay
    return this.state.displayEdit ? (
      <div className="center-it">
        <Header />
        <div className="header-back"></div>
        <div id={id}>
          <h3 className="ex-title">{Exercise}</h3>
          <dl>
            <p>
              Equipment: <span>{Equipment}</span>
            </p>
            <p>
              Exersize Type: <span>{ExersizeType}</span>
            </p>
            <p>
              Major Muscle: <span>{MajorMuscle}</span>
            </p>
            <p>
              Minor Muscle: <span>{MinorMuscle}</span>
            </p>
            <p>
              Notes: <span>{Notes}</span>
            </p>
            <p>
              Modifications: <span>{Modifications}</span>
            </p>
            <p>
              Reps: <span>{Reps}</span>
            </p>
            <p>
              Sets: <span>{Sets}</span>
            </p>
            <p>
              Weight: <span>{Weight}</span>
            </p>
          </dl>
        </div>
        <details><img src={Example} alt="Exercise example" /></details>
        <div className="button-cont">
          <Button name="Edit" onClick={this.toggleEdit} />
          <Button name="Delete" onClick={this.deleteEx} />
          <Button name="Go Back" onClick={this.goBack} />
        </div>
      </div>
    ) : (
      <div>
        <Header />
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
