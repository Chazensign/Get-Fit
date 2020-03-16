import React, { Component } from "react"
import axios from 'axios'
import {withRouter} from "react-router-dom"
import Select from 'react-select'
import styled from 'styled-components'
import ExListDisp from './ExListDisp'

class Landing extends Component {
  constructor() {
    super()
    this.state = {
      exercises: [],
      muscle: '',
      selected: false
    }
  }
  componentDidMount() {
    axios
    .get('/api/all').then(res => {
      this.setState({
        exercises: res.data
        })
      })
  }
  
  submit = (selected) => {
    this.setState({ muscle: selected.value, selected: true })
  }

  render() {

    const { exercises, muscle, selected } = this.state
    const mappedOpts = exercises
      .map(ex => {
        return { value: ex.majormuscle, label: ex.majormuscle }
      })
      .filter((ex, index, self) => {
        return index === self.findIndex(t => t.label === ex.label)
      })

    return (
      <div>
        {selected ? 
        <ExListDisp
          toDetailedView={this.toDetailedView}
          filteredEx={exercises.filter(ex => ex.majormuscle === muscle)}
          /> :
      <LandingPage>
        <Select
        className='selectBox'
          options={mappedOpts}
          onChange={this.submit}
          />
      </LandingPage>
        }
      </div>
    )
  }
}

export default withRouter(Landing)

const LandingPage = styled.main`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-image: url(https://media.istockphoto.com/photos/vintage-dumbbells-on-the-wooden-floor-picture-id524029886?k=6&m=524029886&s=612x612&w=0&h=sJYqp7glFsZmrzgFsk_iRzBUXijXLoHoEjCNvpvYaFQ=);
  background-position-x: center;
  background-position-y: top;
  background-size: cover;
  padding-top: 200px;
  z-index: -1;

  .selectBox {
    width: 250px;
    height: 30px;
  }
  body {
    overflow-x: hidden;
  }
`
