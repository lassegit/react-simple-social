'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FacebookIcon = function FacebookIcon(_ref) {
  var width = _ref.width,
      height = _ref.height,
      color = _ref.color,
      theme = _ref.theme;

  var svgColor = color || 'currentColor';

  switch (theme) {
    case 'minimal':
      return _react2.default.createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '' + width, height: '' + height, fill: svgColor, viewBox: '0 0 24 24' },
        _react2.default.createElement('path', { d: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' })
      );
    case 'round':
      return _react2.default.createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '' + width, height: '' + height, fill: svgColor, viewBox: '0 0 24 24' },
        _react2.default.createElement('path', { d: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z' })
      );
    case 'roundedunfilled':
      return _react2.default.createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '' + width, height: '' + height, fill: svgColor, viewBox: '0 0 24 24' },
        _react2.default.createElement('path', { d: 'M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z' })
      );
    case 'roundedsquare':
      return _react2.default.createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '' + width, height: '' + height, fill: svgColor, viewBox: '0 0 24 24' },
        _react2.default.createElement('path', { d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z' })
      );
    case 'square':
      return _react2.default.createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '' + width, height: '' + height, fill: svgColor, viewBox: '0 0 24 24' },
        _react2.default.createElement('path', { d: 'M0 0v24h24v-24h-24zm16 7h-1.923c-.616 0-1.077.252-1.077.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z' })
      );
    default:
      return _react2.default.createElement(
        'span',
        null,
        'Facebook'
      );
  }
};

FacebookIcon.propTypes = {
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  color: _propTypes2.default.string,
  theme: _propTypes2.default.string
};

exports.default = FacebookIcon;
module.exports = exports['default'];