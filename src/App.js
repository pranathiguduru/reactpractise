// changing function- component into class based- component and initializing state

import logo from './logo.svg';
import React from "react"
import './App.css';

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          answer: "Yes"
      }
  }
  
  render() {
      return (
          <div>
              <h1>Is state important to know? {this.state.answer}</h1>
          </div>
      )
  }
}

export default App