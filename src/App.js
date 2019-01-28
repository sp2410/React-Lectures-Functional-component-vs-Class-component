import React, { Component } from 'react'
import SimpleComponent from './components/SimpleComponent'
import ClassComponent from './components/ClassComponent'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleComponent props="Hello World!"/>
        <ClassComponent />
      </div>
    );
  }
}

export default App
