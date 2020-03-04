import React, { Component } from "react"
import axios from 'axios'
import {withRouter} from "react-router-dom"
import Select from 'react-select'
import './Landing.css'

class Landing extends Component {
  constructor() {
    super()
    this.state = {
      exercises: [],
      filterBy: "",
      toList: []
    }
  }
  componentDidMount() {
    axios
    .get('/api/all').then(res => {
      this.setState({
        exercises: res.data
        }, () => this.exToDisp())
      })
  }
  exToDisp = () => {
    let tempArr = this.state.exercises.map(ex => ex.MajorMuscle)
     let tempArr2 = tempArr.filter(
      (ex, i) => (tempArr.indexOf(ex) === i))
     this.setState({ toList : tempArr2 })
  }
  
  handleChange = (input) => {
    this.setState({ filterBy: input.value });
  }
  submit = (input) => {
    this.props.history.push(`/exlist/${input.value}`)
  }

  render() {
    const {toList} = this.state
    const mappedOpts = toList.map(ex => {
      return { value: ex , label: ex  }
    })
    return (
      <div>
      <main>
        <Select
        className='selectBox'
          options={mappedOpts}
          onChange={this.submit}
        />
      </main>
      </div>
    )
  }
}

export default withRouter(Landing)
