'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./style.css');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactSimpleShare = function (_Component) {
  _inherits(ReactSimpleShare, _Component);

  function ReactSimpleShare() {
    _classCallCheck(this, ReactSimpleShare);

    return _possibleConstructorReturn(this, (ReactSimpleShare.__proto__ || Object.getPrototypeOf(ReactSimpleShare)).apply(this, arguments));
  }

  _createClass(ReactSimpleShare, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          url = _props.url,
          sites = _props.sites,
          width = _props.width,
          height = _props.height,
          color = _props.color,
          theme = _props.theme,
          title = _props.title;

      var links = sites.map(function (site) {
        return _react2.default.createElement(
          'li',
          { key: site },
          _react2.default.createElement(
            'a',
            { href: (0, _utils.getShareLink)(site, url, title) },
            (0, _utils.getShareIcon)(site, width, height, color, theme)
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'simple-share' },
        _react2.default.createElement(
          'ul',
          { className: 'simple-share-list' },
          links
        )
      );
    }
  }]);

  return ReactSimpleShare;
}(_react.Component);

exports.default = ReactSimpleShare;


ReactSimpleShare.propTypes = {
  url: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string,
  sites: _propTypes2.default.array,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  color: _propTypes2.default.string,
  theme: _propTypes2.default.string
};

ReactSimpleShare.defaultProps = {
  sites: ['facebook', 'twitter', 'reddit', 'linkedin', 'email'],
  title: '',
  width: '16',
  height: '16',
  color: '#000',
  theme: 'minimal'
};
module.exports = exports['default'];