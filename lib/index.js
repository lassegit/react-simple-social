Object.defineProperty(exports, '__esModule', {
  value: true,
})

const _createClass = (function() {
  function defineProperties(target, props) {
    for (let i = 0; i < props.length; i++) {
      const descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()

const _react = require('react')

const _react2 = _interopRequireDefault(_react)

const _propTypes = require('prop-types')

const _propTypes2 = _interopRequireDefault(_propTypes)

require('./style.css')

const _utils = require('./utils')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(`Super expression must either be null or a function, not ${typeof superClass}`)
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
  })
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass)
}

const ReactSimpleShare = (function(_Component) {
  _inherits(ReactSimpleShare, _Component)

  function ReactSimpleShare() {
    _classCallCheck(this, ReactSimpleShare)

    return _possibleConstructorReturn(
      this,
      (ReactSimpleShare.__proto__ || Object.getPrototypeOf(ReactSimpleShare)).apply(this, arguments),
    )
  }

  _createClass(ReactSimpleShare, [
    {
      key: 'render',
      value: function render() {
        const _props = this.props

        const url = _props.url

        const sites = _props.sites

        const width = _props.width

        const height = _props.height

        const color = _props.color

        const theme = _props.theme

        const title = _props.title

        const links = sites.map(site =>
          _react2.default.createElement(
            'li',
            { key: site },
            _react2.default.createElement(
              'a',
              { href: (0, _utils.getShareLink)(site, url, title) },
              (0, _utils.getShareIcon)(site, width, height, color, theme),
            ),
          ),
        )

        return _react2.default.createElement(
          'span',
          { className: 'simple-share' },
          _react2.default.createElement('ul', { className: 'simple-share-list' }, links),
        )
      },
    },
  ])

  return ReactSimpleShare
})(_react.Component)

exports.default = ReactSimpleShare

ReactSimpleShare.propTypes = {
  url: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string,
  sites: _propTypes2.default.array,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  color: _propTypes2.default.string,
  theme: _propTypes2.default.string,
}

ReactSimpleShare.defaultProps = {
  sites: ['facebook', 'twitter', 'reddit', 'linkedin', 'email'],
  title: '',
  width: '16',
  height: '16',
  color: '#000',
  theme: 'minimal',
}
module.exports = exports.default
