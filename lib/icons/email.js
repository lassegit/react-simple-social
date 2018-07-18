'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmailIcon = function EmailIcon(props) {
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
        _react2.default.createElement('path', { d: 'M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z' })
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
        _react2.default.createElement('path', { d: 'M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z' })
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
        _react2.default.createElement('path', { d: 'M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z' })
      );
    case 'text':
      return _react2.default.createElement(
        'span',
        null,
        'Email'
      );
    default:
      return _react2.default.createElement(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '' + width,
          height: '' + height,
          fill: '' + color,
          viewBox: '0 0 24 24'
        },
        _react2.default.createElement('path', { d: 'M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z' })
      );
  }
};

EmailIcon.propTypes = {
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  color: _propTypes2.default.string,
  theme: _propTypes2.default.string
};

exports.default = EmailIcon;
module.exports = exports['default'];