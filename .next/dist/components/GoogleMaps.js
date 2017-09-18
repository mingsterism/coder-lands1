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

var _jsxFileName = '/home/ubuntu/coder-lands1/components/GoogleMaps.js';


var APIKEY = "AIzaSyA0lNuI8pwpbEgsDZbmuIlSLfY7GB1GyMM";
var MAPSTYLE = {
  height: "100vh",
  width: "100%",
  padding: '0px',
  margin: '0ps'
};

var NewComponent = function (_React$Component) {
  (0, _inherits3.default)(NewComponent, _React$Component);

  function NewComponent(props) {
    (0, _classCallCheck3.default)(this, NewComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NewComponent.__proto__ || (0, _getPrototypeOf2.default)(NewComponent)).call(this, props));

    _this.map = null;
    _this.variableX = false;
    return _this;
  }

  (0, _createClass3.default)(NewComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isScriptLoaded && !this.variable) {
        this.loadMap();
      }
      console.log("FRONTEND Did mount -----------");
      console.log(this.props.isScriptLoaded);
      console.log(this.props.isScriptLoadSucceed);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.isScriptLoaded && !this.variable) {
        this.loadMap();
      }
      console.log("FRONTEND Did update -----------");
      console.log(this.props.isScriptLoaded);
      console.log(this.props.isScriptLoadSucceed);
    }
  }, {
    key: 'loadMap',
    value: function loadMap() {
      var _this2 = this;

      this.variableX = true;
      this.map = new window.google.maps.Map(this.refs.map, {
        center: { lat: 3.1328, lng: 101.629 },
        zoom: 4
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
          console.log('navigator disabled -----');
          var pos = {
            lat: 3.14,
            lng: 101.3
          };
          var marker = new window.google.maps.Marker({
            position: pos,
            map: _this2.map,
            title: "Hello map"
          });
          console.log("$$$$$$$$: ", marker);
          marker.setMap(_this2.map);
        });
      } else {
        // Browser doesn't support Geolocation
        console.log('navigator disabled');
        var pos = {
          lat: 3.14,
          lng: 101.3
        };
        var marker = new window.google.maps.Marker({
          position: pos,
          map: this.map,
          title: "Hello map"
        });
        console.log("$$$$$$$$: ", marker);
        marker.setMap(map);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log('Rendering herer from client ========================')
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement('div', { ref: 'map', style: MAPSTYLE, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), !this.map && _react2.default.createElement('div', { className: 'center-md', __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'Loading...'));
    }
  }]);

  return NewComponent;
}(_react2.default.Component);

exports.default = (0, _reactAsyncScriptLoader2.default)(['https://maps.googleapis.com/maps/api/js?key=' + APIKEY])(NewComponent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvR29vZ2xlTWFwcy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInNjcmlwdExvYWRlciIsIkFQSUtFWSIsIk1BUFNUWUxFIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luIiwiTmV3Q29tcG9uZW50IiwicHJvcHMiLCJtYXAiLCJ2YXJpYWJsZVgiLCJpc1NjcmlwdExvYWRlZCIsInZhcmlhYmxlIiwibG9hZE1hcCIsImNvbnNvbGUiLCJsb2ciLCJpc1NjcmlwdExvYWRTdWNjZWVkIiwid2luZG93IiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsInJlZnMiLCJjZW50ZXIiLCJsYXQiLCJsbmciLCJ6b29tIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsInBvcyIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwic2V0Q2VudGVyIiwibWFya2VyIiwiTWFya2VyIiwidGl0bGUiLCJzZXRNYXAiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sU0FBTixBQUFlO0FBQ2YsSUFBTTtVQUFXLEFBQ1AsQUFDUjtTQUZlLEFBRVIsQUFDUDtXQUhlLEFBR04sQUFDVDtVQUpGLEFBQWlCLEFBSVA7QUFKTyxBQUNmOztJQU1JLEE7d0NBQ0o7O3dCQUFBLEFBQVksT0FBTTt3Q0FBQTs7a0pBQUEsQUFDVixBQUNOOztVQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1g7VUFBQSxBQUFLLFlBSFcsQUFHaEIsQUFBaUI7V0FDbEI7Ozs7O3dDQUVtQixBQUNsQjtVQUFJLEtBQUEsQUFBSyxNQUFMLEFBQVcsa0JBQWtCLENBQUMsS0FBbEMsQUFBdUMsVUFBVSxBQUMvQzthQUFBLEFBQUssQUFDUDtBQUNBO2NBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtjQUFBLEFBQVEsSUFBSSxL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