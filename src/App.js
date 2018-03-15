import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { Notify } from 'containers'

import 'assets/stylesheets/theme.global.scss'

export default class App extends Component {

  static propTypes = {
    location: PropTypes.objectOf(PropTypes.any).isRequired,
    route: PropTypes.objectOf(PropTypes.any).isRequired
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    return (
      <div>
        {renderRoutes(this.props.route.routes)}
        <Notify />
      </div>
    )
  }
}
