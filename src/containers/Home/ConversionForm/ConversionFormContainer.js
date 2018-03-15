import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { convert } from 'redux/modules/numerals/actions'
import { selectOriginalValue, selectConversionValue } from 'redux/modules/numerals/selectors'
import validation from './validation'
import ConversionForm from './ConversionForm'

export class ConversionFormContainer extends Component {

  static propTypes = {
    convert: PropTypes.func.isRequired,
    originalValue: PropTypes.string,
    conversionValue: PropTypes.string
  }

  static defaultProps = {
    originalValue: null,
    conversionValue: null
  }

  renderResult () {
    const { originalValue, conversionValue } = this.props

    return (
      <div>
        <p>Conversion result:</p>
        <p>Original value: {originalValue}</p>
        <p>Conversion value: {conversionValue}</p>
      </div>
    )
  }

  render () {
    const { conversionValue } = this.props

    return (
      <div>
        <ConversionForm {...this.props} onSubmit={this.props.convert} />
        {conversionValue && this.renderResult()}
      </div>
    )
  }
}

const mapState = (state) => ({
  originalValue: selectOriginalValue(state),
  conversionValue: selectConversionValue(state)
})

export default compose(
  connect(mapState, { convert }),
  reduxForm({
    form: 'convert',
    validate: validation
  })
)(ConversionFormContainer)
