'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _GoogleMaps = require('../components/GoogleMaps');

var _GoogleMaps2 = _interopRequireDefault(_GoogleMaps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement('div', null, _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('p', null, ' This is about us ')), _react2.default.createElement(_GoogleMaps2.default, null));
};