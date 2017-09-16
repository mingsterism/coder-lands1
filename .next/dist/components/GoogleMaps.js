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

var fs = require('fs');

var keys = JSON.parse(fs.readFileSync('./keys.txt', 'utf8'));
var API_KEY = keys['GoogleAPIKEY'];
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
          lineNumber: 94
        }
      }, _react2.default.createElement('div', { ref: 'map', style: MAPSTYLE, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), !this.map && _react2.default.createElement('div', { className: 'center-md', __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, 'Loading...'));
    }
  }]);

  return NewComponent;
}(_react2.default.Component);

exports.default = (0, _reactAsyncScriptLoader2.default)(['https://maps.googleapis.com/maps/api/js?key=' + API_KEY])(NewComponent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvR29vZ2xlTWFwcy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInNjcmlwdExvYWRlciIsImZzIiwicmVxdWlyZSIsImtleXMiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJBUElfS0VZIiwiTUFQU1RZTEUiLCJoZWlnaHQiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW4iLCJOZXdDb21wb25lbnQiLCJwcm9wcyIsIm1hcCIsInZhcmlhYmxlWCIsImlzU2NyaXB0TG9hZGVkIiwidmFyaWFibGUiLCJsb2FkTWFwIiwiY29uc29sZSIsImxvZyIsImlzU2NyaXB0TG9hZFN1Y2NlZWQiLCJ3aW5kb3ciLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwicmVmcyIsImNlbnRlciIsImxhdCIsImxuZyIsInpvb20iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBvc2l0aW9uIiwicG9zIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJzZXRDZW50ZXIiLCJtYXJrZXIiLCJNYXJrZXIiLCJ0aXRsZSIsInNldE1hcCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7QUFDUCxJQUFNLEtBQU4sQUFBVzs7QUFFWCxJQUFNLE9BQU8sS0FBQSxBQUFLLE1BQU0sR0FBQSxBQUFHLGFBQUgsQUFBZ0IsY0FBeEMsQUFBYSxBQUFXLEFBQThCO0FBQ3RELElBQU0sVUFBVSxLQUFoQixBQUFnQixBQUFLO0FBQ3JCLElBQU07VUFBVyxBQUNQLEFBQ1I7U0FGZSxBQUVSLEFBQ1A7V0FIZSxBQUdOLEFBQ1Q7VUFKRixBQUFpQixBQUlQO0FBSk8sQUFDZjs7SSxBQU1JO3dDQUNKOzt3QkFBQSxBQUFZLE9BQU07d0NBQUE7O2tKQUFBLEFBQ1YsQUFDTjs7VUFBQSxBQUFLLE1BQUwsQUFBVyxBQUNYO1VBQUEsQUFBSyxZQUhXLEFBR2hCLEFBQWlCO1dBQ2xCOzs7Ozt3Q0FFbUIsQUFDbEI7VUFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLGtCQUFrQixDQUFDLEtBQWxDLEFBQXVDLFVBQVUsQUFDL0M7YUFBQSxBQUFLLEFBQ1A7QUFDQTtjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7Y0FBQSxBQUFRLElBQUksS0FBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQ3ZCO2NBQUEsQUFBUSxJQUFJLEtBQUEsQUFBSyxNQUFqQixBQUF1QixBQUN4Qjs7Ozt5Q0FFb0IsQUFDbkI7VUFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLGtCQUFrQixDQUFDLEtBQWxDLEFBQXVDLFVBQVUsQUFDaEQ7YUFBQSxBQUFLLEFBQ047QUFDQTtjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7Y0FBQSxBQUFRLElBQUksS0FBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQ3ZCO2NBQUEsQUFBUSxJQUFJLEtBQUEsQUFBSyxNQUFqQixBQUF1QixBQUN4Qjs7Ozs4QkFFUzttQkFDUjs7V0FBQSxBQUFLLFlBQUwsQUFBaUIsQUFDakI7V0FBQSxBQUFLLFVBQVUsT0FBQSxBQUFPLE9BQVAsQUFBYyxLQUFsQixBQUF1QixJQUFJLEtBQUEsQUFBSyxLQUFoQyxBQUFxQztnQkFDdEMsRUFBQyxLQUFELEFBQU0sUUFBUSxLQUQ2QixBQUMzQyxBQUFtQixBQUMzQjtjQUZGLEFBQVcsQUFBMEMsQUFFN0MsQUFHTjtBQUxtRCxBQUNuRCxPQURTOztVQUtMLFVBQUosQUFBYyxhQUFhLEFBQ3pCO2dCQUFBLEFBQVEsSUFBUixBQUFZLDJCQUEyQixVQUF2QyxBQUFpRCxBQUNqRDtrQkFBQSxBQUFVLFlBQVYsQUFBc0IsbUJBQW1CLFVBQUEsQUFBQyxVQUFhLEFBQ3JEO2NBQU07aUJBQ0MsU0FBQSxBQUFTLE9BREosQUFDVyxBQUNyQjtpQkFBSyxTQUFBLEFBQVMsT0FGaEIsQUFBWSxBQUVXLEFBR3ZCO0FBTFksQUFDVjs7aUJBSUYsQUFBSyxJQUFMLEFBQVMsVUFBVCxBQUFtQixBQUVuQjs7Y0FBTSxhQUFhLE9BQUEsQUFBTyxPQUFQLEFBQWMsS0FBbEIsQUFBdUI7c0JBQU8sQUFDakMsQUFDVjtpQkFBSyxPQUZzQyxBQUVqQyxBQUNWO21CQUhGLEFBQWUsQUFBOEIsQUFHcEMsQUFFVjtBQUw4QyxBQUMzQyxXQURhO0FBUmpCLFdBYUcsWUFBTSxBQUNQO2tCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2Q7Y0FBTTtpQkFBTSxBQUNMLEFBQ0w7aUJBRkYsQUFBWSxBQUVMLEFBRVA7QUFKWSxBQUNWO2NBR0ksYUFBYSxPQUFBLEFBQU8sT0FBUCxBQUFjLEtBQWxCLEFBQXVCO3NCQUFPLEFBQ2pDLEFBQ1Y7aUJBQUssT0FGc0MsQUFFakMsQUFDVjttQkFIRixBQUFlLEFBQThCLEFBR3BDLEFBRVQ7QUFMNkMsQUFDM0MsV0FEYTtrQkFLZixBQUFRLElBQVIsQUFBWSxjQUFaLEFBQTBCLEFBQzFCO2lCQUFBLEFBQU8sT0FBTyxPQUFkLEFBQW1CLEFBQ2xCO0FBMUJELEFBMkJEO0FBN0JELGFBNkJPLEFBQ0w7QUFDQTtnQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO1lBQU07ZUFBTSxBQUNMLEFBQ0w7ZUFGRixBQUFZLEFBRUwsQUFFUDtBQUpZLEFBQ1Y7WUFHSSxhQUFhLE9BQUEsQUFBTyxPQUFQLEFBQWMsS0FBbEIsQUFBdUI7b0JBQU8sQUFDakMsQUFDVjtlQUFLLEtBRnNDLEFBRWpDLEFBQ1Y7aUJBSEYsQUFBZSxBQUE4QixBQUdwQyxBQUVUO0FBTDZDLEFBQzNDLFNBRGE7Z0JBS2YsQUFBUSxJQUFSLEFBQVksY0FBWixBQUEwQixBQUMxQjtlQUFBLEFBQU8sT0FBUCxBQUFjLEFBQ2Y7QUFDRjs7Ozs2QkFDTSxBQUNQO0FBQ0E7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSx5Q0FDTyxLQUFMLEFBQVMsT0FBTSxPQUFmLEFBQXVCO29CQUF2QjtzQkFERixBQUNFLEFBQ0U7QUFERjtXQUNHLEtBQUQsQUFBTSx1QkFBTyxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBO0FBQUE7T0FBQSxFQUhuQixBQUNFLEFBRWlCLEFBR3BCOzs7OztFQXJGd0IsZ0JBQU0sQUF3RmpDLEE7O2tCQUFlLHNDQUNiLENBQUMsaURBRFksQUFDYixBQUFrRCxVQURwRCxBQUFlLEFBRVoiLCJmaWxlIjoiR29vZ2xlTWFwcy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS91YnVudHUvY29kZXItbGFuZHMxIn0=