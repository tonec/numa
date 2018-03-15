import React, { Component } from 'react'
import { OneColumnThin } from 'components'
import Numerals from './Numerals/Numerals'

export class ClientConverter extends Component {
  render () {
    return (
      <OneColumnThin title="Client Converter">
        <Numerals />
      </OneColumnThin>
    )
  }
}

export default ClientConverter
