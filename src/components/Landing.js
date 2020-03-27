import React, { Component } from "react"
import axios from 'axios'
import Select from 'react-select'
import {Route, withRouter, Switch} from "react-router-dom"
import styled from 'styled-components'
import ExListDisp from './ExListDisp'

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exercises: [],
      muscle: ''
    }
  }
  componentDidMount = () => {
      axios
        .get('/api/all')
        .then(res => {
          if (this.props.location.state) {
            return this.setState({
              exercises: res.data,
              muscle: this.props.location.state.group,
            })
          } else {
            this.setState({
              exercises: res.data
            })
          }
        })
        .catch(err => console.log(err))
  }
  
  submit = (selected, show) => {
    this.setState({ muscle: selected.value }, this.props.history.push('/exercises'))
  }

  render() {

    const { exercises, muscle } = this.state
    const mappedOpts = exercises
      .map(ex => {
        return { value: ex.majormuscle, label: ex.majormuscle }
      })
      .filter((ex, index, self) => {
        return index === self.findIndex(t => t.label === ex.label)
      })
      
    return (
      <div>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <LandingPage>
                <Select
                  className='selectBox'
                  options={mappedOpts}
                  onChange={e => this.submit(e, true)}
                />
              </LandingPage>
            )}
          />
          <Route
            path='/exercises'
            render={() => (
              <ExListDisp
                submit={this.submit}
                filteredEx={exercises.filter(ex => ex.majormuscle === muscle)}
                group={muscle}
              />
            )}
          />
        </Switch>
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
