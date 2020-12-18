import React from 'react'
import spinner from '../../img/spinner.gif'

const Spinner = () => {
  return <img src={spinner} style={imgStyle} alt="Loading spinner" />
}

const imgStyle = {
  width: '200',
  margin: 'auto',
  display: 'block',
}

export default Spinner
