'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactSimpleShare = function ReactSimpleShare(_ref) {
  var url = _ref.url,
      sites = _ref.sites,
      width = _ref.width,
      height = _ref.height,
      color = _ref.color,
      theme = _ref.theme,
      target = _ref.target,
      title = _ref.title;
  return _react2.default.createElement(
    'span',
    { className: 'simple-share' },
    _react2.default.createElement(
      'ul',
      { className: 'simple-share-list' },
      sites.map(function (site) {
        return _react2.default.createElement(
          'li',
          { key: site },
          _react2.default.createElement(
            'a',
            { href: (0, _utils.getShareLink)(site, url, title), target: target },
            (0, _utils.getShareIcon)(site, width, height, color, theme)
          )
        );
      })
    )
  );
};

ReactSimpleShare.defaultProps = {
  sites: ['facebook', 'twitter', 'reddit', 'linkedin', 'email'],
  title: '',
  width: '16',
  height: '16',
  color: '',
  theme: 'minimal',
  target: '_self'
};

ReactSimpleShare.propTypes = {
  url: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string,
  sites: _propTypes2.default.arrayOf(_propTypes2.default.string),
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  color: _propTypes2.default.string,
  theme: _propTypes2.default.string,
  target: _propTypes2.default.oneOf(['_blank', '_self', '_parent', '_top', 'framename'])
};

exports.default = ReactSimpleShare;
module.exports = exports['default'];