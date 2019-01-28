import React from 'react'

const SimpleComponent = ({props}) => {
  return (
    <h1>{truncate(props)}</h1>
  )
}

const truncate = (props) => (
  props.substring(0,10)
)

export default SimpleComponent

