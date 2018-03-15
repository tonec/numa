import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import { isNumber } from 'helpers'

export class InputArabic extends Component {

  static propTypes = {
    value: PropTypes.string,
    updateValue: PropTypes.func.isRequired
  }

  static defaultProps = {
    value: null
  }

  handleOnInputChange = e => {
    const { value } = e.target

    if (value > 3999) return

    if (isNumber(value) || value.length === 0) {
      this.props.updateValue(value)
    }
  }

  render () {
    return (
      <Input
        size="large"
        placeholder="Arabic"
        value={this.props.value}
        onChange={this.handleOnInputChange}
      />
    )
  }
}

export default InputArabic
