import React, { Component } from "react"
import axios from 'axios'
import {withRouter} from "react-router-dom"
import Select from 'react-select'
import styled from 'styled-components'
// import ExList from "./ExList/ExList"
import ExListDisp from './ExList/ExListDisp'

class Landing extends Component {
  constructor() {
    super()
    this.state = {
      exercises: [],
      filterBy: "",
      toList: [],
      muscle: '',
      selected: false
    }
  }
  componentDidMount() {
    axios
    .get('/api/all').then(res => {
      console.log(res.data);
      
      this.setState({
        exercises: res.data
        })
      })
  }
  // exToDisp = () => {
  //   let tempArr = 
  //    let tempArr2 = tempArr.filter(
  //     (ex, i) => (tempArr.indexOf(ex) === i))
  //    this.setState({ toList : tempArr2 })
  // }
  
  handleChange = (input) => {
    this.setState({ filterBy: input.value });
  }
  submit = (selected) => {
    // this.props.history.push(`/exlist/${input.value}`)
    this.setState({ muscle: selected, showExercises: true });
  }

  render() {
    const { exercises, muscle, selected } = this.state
    const mappedOpts = exercises.filter((ex, i) => (exercises.indexOf(ex) === i)).map(ex => {
      return { value: ex.majormuscle , label: ex.majormuscle  }
    })
    return (
      <div>
        {selected ? 
        <ExListDisp
          toDetailedView={this.toDetailedView}
          filteredEx={exercises.filter(ex => ex.majormuscle === muscle)}
          /> :
      <LandingPage >
        <Select
        className='selectBox'
          options={mappedOpts}
          onChange={this.submit}
          />
      </LandingPage>  
        // <ExList exercises={exercises.filter(ex => ex.majormuscle === muscle)}/>
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
