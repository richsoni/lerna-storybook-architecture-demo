import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css';

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.component}>
        External Component: {text}
      </div>
    )
  }
}
