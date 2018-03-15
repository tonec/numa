import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import { isLatinChar } from 'helpers'

export class InputLatin extends Component {

  static propTypes = {
    value: PropTypes.string,
    updateValue: PropTypes.func.isRequired
  }

  static defaultProps = {
    value: null
  }

  handleInputChange = e => {
    const { value } = e.target

    if (isLatinChar(value) || value.length === 0) {
      this.props.updateValue(value.toUpperCase())
    }
  }

  render () {
    return (
      <Input
        size="large"
        placeholder="Latin"
        value={this.props.value}
        onChange={this.handleInputChange}
      />
    )
  }
}

export default InputLatin
