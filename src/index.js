import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

import { getShareIcon, getShareLink } from './utils'

export default class ReactSimpleShare extends Component {
  render() {
    const { url, sites, width, height, color, theme, title } = this.props
    const links = sites.map(site => {
      return (
        <li key={site}>
          <a href={getShareLink(site, url, title)}>
            {getShareIcon(site, width, height, color, theme)}
          </a>
        </li>
      )
    })

    return (
      <div className="simple-share">
        <ul className="simple-share-list">{links}</ul>
      </div>
    )
  }
}

ReactSimpleShare.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  sites: PropTypes.array,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.string
}

ReactSimpleShare.defaultProps = {
  sites: ['facebook', 'twitter', 'reddit', 'linkedin', 'email'],
  title: '',
  width: '16',
  height: '16',
  color: '#000',
  theme: 'minimal'
}
