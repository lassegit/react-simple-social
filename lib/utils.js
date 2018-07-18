'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShareLink = exports.getShareIcon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _facebook = require('./icons/facebook');

var _facebook2 = _interopRequireDefault(_facebook);

var _twitter = require('./icons/twitter');

var _twitter2 = _interopRequireDefault(_twitter);

var _reddit = require('./icons/reddit');

var _reddit2 = _interopRequireDefault(_reddit);

var _linkedin = require('./icons/linkedin');

var _linkedin2 = _interopRequireDefault(_linkedin);

var _email = require('./icons/email');

var _email2 = _interopRequireDefault(_email);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getShareIcon = exports.getShareIcon = function getShareIcon(site, width, height, color, theme) {
  switch (site) {
    case 'facebook':
      return _react2.default.createElement(_facebook2.default, {
        width: width,
        height: height,
        color: color,
        theme: theme
      });
    case 'twitter':
      return _react2.default.createElement(_twitter2.default, {
        width: width,
        height: height,
        color: color,
        theme: theme
      });
    case 'reddit':
      return _react2.default.createElement(_reddit2.default, { width: width, height: height, color: color, theme: theme });
    case 'linkedin':
      return _react2.default.createElement(_linkedin2.default, {
        width: width,
        height: height,
        color: color,
        theme: theme
      });
    case 'email':
      return _react2.default.createElement(_email2.default, { width: width, height: height, color: color, theme: theme });
  }
};

var getShareLink = exports.getShareLink = function getShareLink(site, url, title) {
  switch (site) {
    case 'facebook':
      return 'https://www.facebook.com/sharer.php?u=' + encodeURIComponent(url);
    case 'reddit':
      return 'https://reddit.com/submit?url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title);
    case 'twitter':
      return 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title);
    case 'linkedin':
      return 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title);
    case 'email':
      return 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(url);
    default:
      return '/';
  }
};