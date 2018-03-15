import React, { Component } from 'react'
import { Icon } from 'antd'
import InputArabic from './InputArabic'
import InputLatin from './InputLatin'
import { toLatin, fromLatin } from 'helpers/convertNumerals'

import styles from './styles.scss'

export class Numerals extends Component {

  constructor (props) {
    super(props)

    this.state = {
      arabicValue: null,
      latinValue: null
    }
  }

  handleUpdateArabicValue = val => {
    this.setState({ arabicValue: val })
    this.updateAndConvertLatinValue(val)
  }

  handleUpdateLatinValue = val => {
    this.setState({ latinValue: val.toUpperCase() })
    this.updateAndConvertArabicValue(val)
  }

  updateAndConvertArabicValue = val => {
    this.setState({ arabicValue: fromLatin(val) ? fromLatin(val).toString() : null })
  }

  updateAndConvertLatinValue = val => {
    this.setState({ latinValue: toLatin(val) })
  }

  render () {
    const { arabicValue, latinValue } = this.state

    return (
      <div>
        <InputArabic value={arabicValue} updateValue={this.handleUpdateArabicValue} />
        <div className={styles.iconContainer}><Icon type="arrows-alt" /></div>
        <InputLatin value={latinValue} updateValue={this.handleUpdateLatinValue} />
      </div>
    )
  }
}

export default Numerals
