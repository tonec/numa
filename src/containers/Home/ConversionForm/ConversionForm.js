import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { Form, Button, Alert } from 'antd'
import { SelectField, TextField } from 'components/Forms/Inputs'

import styles from './styles.scss'

export default class ConversionForm extends Component {

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool,
    error: PropTypes.any
  }

  render () {
    const { handleSubmit, onSubmit, submitting, error } = this.props

    return (
      <Form layout="vertical" onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="conversionType"
          size="large"
          component={SelectField}
          options={[
            { label: 'Select a conversion type', value: '' },
            { label: 'Arabic to Latin', value: 'toLatin' },
            { label: 'Latin to Arabic', value: 'fromLatin' }
          ]}
        />
        <Field
          name="conversionValue"
          type="text"
          size="large"
          normalize={value => value.toUpperCase()}
          component={TextField}
        />
        <Form.Item>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            loading={submitting}
            className={styles.button}
          >
            Convert
          </Button>
        </Form.Item>
        {error && <Alert showIcon type="error" message={error} />}
      </Form>
    )
  }
}
