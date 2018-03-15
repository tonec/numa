import React, { Component } from 'react'
import { OneColumnThin } from 'components'
import ConversionFormContainer from './ConversionForm/ConversionFormContainer'

class Home extends Component {
  render () {
    return (
      <OneColumnThin title="Home">
        <ConversionFormContainer />
      </OneColumnThin>
    )
  }
}

export default Home
