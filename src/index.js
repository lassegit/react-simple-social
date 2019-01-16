import PropTypes from 'prop-types'
import React from 'react'
import { getShareIcon, getShareLink } from './utils'
import './style.css'

const ReactSimpleShare = ({ url, sites, width, height, color, theme, title }) => (
  <span className="simple-share">
    <ul className="simple-share-list">
      {sites.map(site => (
        <li key={site}>
          <a href={getShareLink(site, url, title)}>{getShareIcon(site, width, height, color, theme)}</a>
        </li>
      ))}
    </ul>
  </span>
)

ReactSimpleShare.defaultProps = {
  sites: ['facebook', 'twitter', 'reddit', 'linkedin', 'email'],
  title: '',
  width: '16',
  height: '16',
  color: '',
  theme: 'minimal',
}

ReactSimpleShare.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  sites: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.string,
}

export default ReactSimpleShare
