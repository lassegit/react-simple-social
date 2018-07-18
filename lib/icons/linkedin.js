'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkedinIcon = function LinkedinIcon(props) {
  var width = props.width,
      height = props.height,
      color = props.color,
      theme = props.theme;


  switch (theme) {
    case 'minimal':
      return _react2.default.createElement(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '' + width,
          height: '' + height,
          fill: '' + color,
          viewBox: '0 0 24 24'
        },
        _react2.default.createElement('path', { d: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' })
      );
    case 'round':
      return _react2.default.createElement(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '' + width,
          height: '' + height,
          fill: '' + color,
          viewBox: '0 0 24 24'
        },
        _react2.default.createElement('path', { d: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z' })
      );
    case 'roundedunfilled':
      return _react2.default.createElement(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '' + width,
          height: '' + height,
          fill: '' + color,
          viewBox: '0 0 24 24'
        },
        _react2.default.createElement('path', { d: 'M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z' })
      );
    case 'roundedsquare':
      return _react2.default.createElement(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '' + width,
          height: '' + height,
          fill: '' + color,
          viewBox: '0 0 24 24'
        },
        _react2.default.createElement('path', { d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' })
      );
    case 'square':
      return _react2.default.createElement(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '' + width,
          height: '' + height,
          fill: '' + color,
          viewBox: '0 0 24 24'
        },
        _react2.default.createElement('path', { d: 'M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z' })
      );
    default:
      return _react2.default.createElement(
        'span',
        null,
        'LinkedIn'
      );
  }
};

LinkedinIcon.propTypes = {
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  color: _propTypes2.default.string,
  theme: _propTypes2.default.string
};

exports.default = LinkedinIcon;
module.exports = exports['default'];