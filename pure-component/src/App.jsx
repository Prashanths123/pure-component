import React, { Component } from 'react'
import PureCounter from './components/PureCounterComponent'
import SimpleCounter from './components/SimpleCounterComponent'
import './App.css'
class App extends Component {
  
  render() {
    return (
      <div>
        <SimpleCounter/>
        <hr />
        <PureCounter/>

      </div>
    )
  }
}
export default App