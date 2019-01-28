import React, { Component } from 'react'

class ClassComponent extends Component {
  state={
    value: true
  }

  toggle = () => (
    !this.state.value
  )

  componentDidMount(){
    setInterval(() => {
      this.setState({
        value: this.toggle()
      })
    }, 6000)
  }

  render() {
    return (
      <h1>{`${this.state.value}`}</h1>
    )
  }
}

export default ClassComponent