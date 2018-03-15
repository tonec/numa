import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { Anchor } from 'components'

@connect(({ routing }) => ({
  currentPath: routing.locationBeforeTransitions.pathname
}))
class Navigation extends Component {

  static propTypes = {
    currentPath: PropTypes.string.isRequired
  }

  renderMenuItem (path, name, handler) {
    if (handler) {
      return (
        <Menu.Item key={path}>
          <Anchor onClick={handler}>{name}</Anchor>
        </Menu.Item>
      )
    }

    return (
      <Menu.Item key={path}>
        <Link to={path}>{name}</Link>
      </Menu.Item>
    )
  }

  render () {
    const { currentPath } = this.props

    return (
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[currentPath]}
      >
        {this.renderMenuItem('/', 'Home')}
        {this.renderMenuItem('/clientconverter', 'Client Converter')}
      </Menu>
    )
  }
}

export default Navigation
