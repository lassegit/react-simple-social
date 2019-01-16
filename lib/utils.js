Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.getShareLink = exports.getShareIcon = undefined

const _react = require('react')

const _react2 = _interopRequireDefault(_react)

const _facebook = require('./icons/facebook')

const _facebook2 = _interopRequireDefault(_facebook)

const _twitter = require('./icons/twitter')

const _twitter2 = _interopRequireDefault(_twitter)

const _reddit = require('./icons/reddit')

const _reddit2 = _interopRequireDefault(_reddit)

const _linkedin = require('./icons/linkedin')

const _linkedin2 = _interopRequireDefault(_linkedin)

const _email = require('./icons/email')

const _email2 = _interopRequireDefault(_email)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const getShareIcon = (exports.getShareIcon = function getShareIcon(site, width, height, color, theme) {
  switch (site) {
    case 'facebook':
      return _react2.default.createElement(_facebook2.default, {
        width,
        height,
        color,
        theme,
      })
    case 'twitter':
      return _react2.default.createElement(_twitter2.default, {
        width,
        height,
        color,
        theme,
      })
    case 'reddit':
      return _react2.default.createElement(_reddit2.default, { width, height, color, theme })
    case 'linkedin':
      return _react2.default.createElement(_linkedin2.default, {
        width,
        height,
        color,
        theme,
      })
    case 'email':
      return _react2.default.createElement(_email2.default, { width, height, color, theme })
    default:
      return _react2.default.createElement('span', null)
  }
})

const getShareLink = (exports.getShareLink = function getShareLink(site, url, title) {
  switch (site) {
    case 'facebook':
      return `https://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}`
    case 'reddit':
      return `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
    case 'twitter':
      return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
    case 'linkedin':
      return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&text=${encodeURIComponent(
        title,
      )}`
    case 'email':
      return `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
    default:
      return '/'
  }
})
