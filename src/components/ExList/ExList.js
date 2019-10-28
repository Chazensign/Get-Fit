import React, { Component } from "react"
import axios from "axios"
import ExListDisp from "./ExListDisp"
import './ExList.css'
import Header from '../Header/Header'

class ExList extends Component {
  constructor() {
    super()
    this.state = {
      filteredEx: []
    }
  }

  componentDidMount() {
    axios
      .get(`/api/exercise/category?muscle=${this.props.match.params.muscle}`)
      .then(res => {
        this.setState({ filteredEx: res.data })
      })
      .catch(error => this.props.history.push(`/`))
  }

  toDetailedView = (id) => {
    this.props.history.push(`/detview/${id}`)
  }
  render() {
    let {filteredEx} = this.state
    return (
      <div className='ex-cont'>
        <Header/>
        <div className='header-back' ></div>
      <ExListDisp
        toDetailedView={this.toDetailedView}
        filteredEx={filteredEx}
        />
      </div>
    )
  }
}

export default ExList
