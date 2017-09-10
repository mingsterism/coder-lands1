'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAsyncScriptLoader = require('react-async-script-loader');

var _reactAsyncScriptLoader2 = _interopRequireDefault(_reactAsyncScriptLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_KEY = '';
var MAPSTYLE = {
  height: "100vh",
  width: "100%",
  padding: '0px',
  margin: '0ps'
};

var GoogleMaps = function (_React$Component) {
  (0, _inherits3.default)(GoogleMaps, _React$Component);

  function GoogleMaps(props) {
    (0, _classCallCheck3.default)(this, GoogleMaps);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GoogleMaps.__proto__ || (0, _getPrototypeOf2.default)(GoogleMaps)).call(this, props));

    _this.componentDidMount = function () {
      document.body.style.margin = 0;
    };

    _this.componentWillUnmount = function () {
      document.body.style.margin = 8;
    };

    _this.map = null;
    return _this;
  }

  (0, _createClass3.default)(GoogleMaps, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var _this2 = this;

      var isScriptLoaded = _ref.isScriptLoaded,
          isScriptLoadSucceed = _ref.isScriptLoadSucceed;

      if (isScriptLoaded && !this.props.isScriptLoaded) {
        // load finished
        console.log("Script is loadaed...");
        if (isScriptLoadSucceed) {
          this.map = new window.google.maps.Map(this.refs.map, {
            center: { lat: 10.794234, lng: 106.706341 },
            zoom: 15
          });

          if (navigator.geolocation) {
            console.log("Navigator geolocation: ", navigator.geolocation);
            navigator.geolocation.getCurrentPosition(function (position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };

              _this2.map.setCenter(pos);

              var marker = new window.google.maps.Marker({
                position: pos,
                map: _this2.map,
                title: 'Hello World!'
              });
            }, function () {
              console.log('navigator disabled');
            });
          } else {
            // Browser doesn't support Geolocation
            console.log('navigator disabled');
          }
        } else this.props.onError();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement('div', { ref: 'map', style: MAPSTYLE }), !this.map && _react2.default.createElement('div', { className: 'center-md' }, 'Loading...'));
    }
  }]);

  return GoogleMaps;
}(_react2.default.Component);

exports.default = (0, _reactAsyncScriptLoader2.default)(['https://maps.googleapis.com/maps/api/js?key=' + API_KEY])(GoogleMaps);