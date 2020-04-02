import React from 'react';
import './App.css';
import routes from '../components/routes'
import Header from '../components/Header'
import LoadingModal from '../components/LoadingModal'
import {connect} from 'react-redux'

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
      
    </div>
  )
}
function mapStateToProps(reduxState) {
  return {
    
  }
}
export default connect(mapStateToProps)(App)
