import PropTypes from 'prop-types'
import React from 'react'
import { getShareIcon, getShareLink } from './utils'
import './style.css'

const ReactSimpleShare = ({ url, sites, width, height, color, theme, target, title }) => (
  <span className="simple-share">
    <ul className="simple-share-list">
      {sites.map(site => (
        <li key={site}>
          <a href={getShareLink(site, url, title)} target={target}>
            {getShareIcon(site, width, height, color, theme)}
          </a>
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
  target: '_self',
}

ReactSimpleShare.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  sites: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.string,
  target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top', 'framename']),
}

export default ReactSimpleShare
