import React, { Component } from "react"
import axios from 'axios'
import {withRouter} from "react-router-dom"
import Select from 'react-select'
import styled from 'styled-components'

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
      <LandingPage className='landing'>
        <Select
        className='selectBox'
          options={mappedOpts}
          onChange={this.submit}
        />
      </LandingPage>
      </div>
    )
  }
}

export default withRouter(Landing)

const LandingPage = styled.main`
&.landing {
  display: flex;
  justify-content: center;
  height: 100vh;
  background-image: url(https://media.istockphoto.com/photos/vintage-dumbbells-on-the-wooden-floor-picture-id524029886?k=6&m=524029886&s=612x612&w=0&h=sJYqp7glFsZmrzgFsk_iRzBUXijXLoHoEjCNvpvYaFQ=);
  background-position-x: center;
  background-position-y: top;
  background-size: cover;
  padding-top: 200px;
  z-index: -1;
}
  .selectBox {
    width: 250px;
    height: 30px;
  }
  body {
    overflow-x: hidden;
  }
`
