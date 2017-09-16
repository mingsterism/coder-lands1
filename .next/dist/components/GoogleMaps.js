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

var _jsxFileName = 'C:\\Users\\mingk\\coding1\\fullstack\\projects\\coder-lands1\\components\\GoogleMaps.js';


var API_KEY = 'AIzaSyA0lNuI8pwpbEgsDZbmuIlSLfY7GB1GyMM';
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
      console.log("Did mount -----------");
      console.log(this.props.isScriptLoaded);
      console.log(this.props.isScriptLoadSucceed);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.isScriptLoaded && !this.variable) {
        this.loadMap();
      }
      console.log("Did update -----------");
      console.log(this.props.isScriptLoaded);
      console.log(this.props.isScriptLoadSucceed);
    }
  }, {
    key: 'loadMap',
    value: function loadMap() {
      var _this2 = this;

      this.variableX = true;
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
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log('Rendering herer from client ========================')
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('div', { ref: 'map', style: MAPSTYLE, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), !this.map && _react2.default.createElement('div', { className: 'center-md', __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Loading...'));
    }
  }]);

  return NewComponent;
}(_react2.default.Component);

// class GoogleMaps extends React.Component {
//   constructor(props){
//     super(props);
//     this.map = null; 

//     this.__isScriptLoad = false;
//   }

//   componentWillReceiveProp () {
//     const { isScriptLoaded, isScriptLoadSucceed } = this.props;
//     console.log(isScriptLoaded, isScriptLoadSucceed)
//     document.body.style.margin = 0
//     if (isScriptLoaded && !this.__isScriptLoad) { // load finished
//       console.log("Script is loadaed...")
//       this.__isScriptLoad = true;
//       if (isScriptLoadSucceed) {
//         this.map = new window.google.maps.Map(this.refs.map, {
//           center: {lat: 10.794234, lng: 106.706341},
//           zoom: 15
//         });

//         if (navigator.geolocation) {
//           console.log("Navigator geolocation: ", navigator.geolocation)
//           navigator.geolocation.getCurrentPosition((position) => {
//             const pos = {
//               lat: position.coords.latitude,
//               lng: position.coords.longitude
//             };

//             this.map.setCenter(pos);

//             const marker = new window.google.maps.Marker({
//               position: pos,
//               map: this.map,
//               title: 'Hello World!'
//             });                
//           }, () => {
//             console.log('navigator disabled');
//           });
//         } else {
//           // Browser doesn't support Geolocation
//           console.log('navigator disabled');
//         }
//       }
//       else this.props.onError()
//     }
//   }
//   componentWillUnmount () {
//       document.body.style.margin = 8;
//   }

// componentDidUpadate ({ isScriptLoaded, isScriptLoadSucceed }) {
//   console.log("COmponent did update !!!!")
//   return 
//   console.log("+++++++++++++++++++++++++++")
//   if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
//     console.log("Script is loadaed...")
//     if (isScriptLoadSucceed) {
//       this.map = new window.google.maps.Map(this.refs.map, {
//         center: {lat: 10.794234, lng: 106.706341},
//         zoom: 15
//       });

//       if (navigator.geolocation) {
//         console.log("Navigator geolocation: ", navigator.geolocation)
//         navigator.geolocation.getCurrentPosition((position) => {
//           const pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//           };

//           this.map.setCenter(pos);

//           const marker = new window.google.maps.Marker({
//             position: pos,
//             map: this.map,
//             title: 'Hello World!'
//           });                
//         }, () => {
//           console.log('navigator disabled');
//         });
//       } else {
//         // Browser doesn't support Geolocation
//         console.log('navigator disabled');
//       }
//     }
//     else this.props.onError()
//   }
// }

//   render(){
//     // console.log('Rendering herer from client ========================')
//     return (    
//       <div>
//         <div ref="map" style={ MAPSTYLE }></div>
//         { !this.map && <div className="center-md">Loading...</div> } 
//       </div>
//     )
//   }
// }


exports.default = (0, _reactAsyncScriptLoader2.default)(['https://maps.googleapis.com/maps/api/js?key=' + API_KEY])(NewComponent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEdvb2dsZU1hcHMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJzY3JpcHRMb2FkZXIiLCJBUElfS0VZIiwiTUFQU1RZTEUiLCJoZWlnaHQiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW4iLCJOZXdDb21wb25lbnQiLCJwcm9wcyIsIm1hcCIsInZhcmlhYmxlWCIsImlzU2NyaXB0TG9hZGVkIiwidmFyaWFibGUiLCJsb2FkTWFwIiwiY29uc29sZSIsImxvZyIsImlzU2NyaXB0TG9hZFN1Y2NlZWQiLCJ3aW5kb3ciLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwicmVmcyIsImNlbnRlciIsImxhdCIsImxuZyIsInpvb20iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBvc2l0aW9uIiwicG9zIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJzZXRDZW50ZXIiLCJtYXJrZXIiLCJNYXJrZXIiLCJ0aXRsZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxVQUFOLEFBQWdCO0FBQ2hCLElBQU07VUFBVyxBQUNQLEFBQ1I7U0FGZSxBQUVSLEFBQ1A7V0FIZSxBQUdOLEFBQ1Q7VUFKRixBQUFpQixBQUlQO0FBSk8sQUFDZjs7SUFNSSxBO3dDQUNKOzt3QkFBQSxBQUFZLE9BQU07d0NBQUE7O2tKQUFBLEFBQ1YsQUFDTjs7VUFBQSxBQUFLLE1BQUwsQUFBVyxBQUNYO1VBQUEsQUFBSyxZQUhXLEFBR2hCLEFBQWlCO1dBQ2xCOzs7Ozt3Q0FFbUIsQUFDbEI7VUFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLGtCQUFrQixDQUFDLEtBQWxDLEFBQXVDLFVBQVUsQUFDL0M7YUFBQSxBQUFLLEFBQ047QUFDRDtjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7Y0FBQSxBQUFRLElBQUksS0FBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQ3ZCO2NBQUEsQUFBUSxJQUFJLEtBQUEsQUFBSyxNQUFqQixBQUF1QixBQUN4Qjs7Ozt5Q0FFb0IsQUFDbkI7VUFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLGtCQUFrQixDQUFDLEtBQWxDLEFBQXVDLFVBQVUsQUFDL0M7YUFBQSxBQUFLLEFBQ047QUFDRDtjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7Y0FBQSxBQUFRLElBQUksS0FBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQ3ZCO2NBQUEsQUFBUSxJQUFJLEtBQUEsQUFBSyxNQUFqQixBQUF1QixBQUN4Qjs7Ozs4QkFFUzttQkFDUjs7V0FBQSxBQUFLLFlBQUwsQUFBaUIsQUFDZjtXQUFBLEFBQUssVUFBVSxPQUFBLEFBQU8sT0FBUCxBQUFjLEtBQWxCLEFBQXVCLElBQUksS0FBQSxBQUFLLEtBQWhDLEFBQXFDO2dCQUN0QyxFQUFDLEtBQUQsQUFBTSxXQUFXLEtBRDBCLEFBQzNDLEFBQXNCLEFBQzlCO2NBRkYsQUFBVyxBQUEwQyxBQUU3QyxBQUdSO0FBTHFELEFBQ25ELE9BRFM7O1VBS1AsVUFBSixBQUFjLGFBQWEsQUFDekI7Z0JBQUEsQUFBUSxJQUFSLEFBQVksMkJBQTJCLFVBQXZDLEFBQWlELEFBQ2pEO2tCQUFBLEFBQVUsWUFBVixBQUFzQixtQkFBbUIsVUFBQSxBQUFDLFVBQWEsQUFDckQ7Y0FBTTtpQkFDQyxTQUFBLEFBQVMsT0FESixBQUNXLEFBQ3JCO2lCQUFLLFNBQUEsQUFBUyxPQUZoQixBQUFZLEFBRVcsQUFHdkI7QUFMWSxBQUNWOztpQkFJRixBQUFLLElBQUwsQUFBUyxVQUFULEFBQW1CLEFBRW5COztjQUFNLGFBQWEsT0FBQSxBQUFPLE9BQVAsQUFBYyxLQUFsQixBQUF1QjtzQkFBTyxBQUNqQyxBQUNWO2lCQUFLLE9BRnNDLEFBRWpDLEFBQ1Y7bUJBSEYsQUFBZSxBQUE4QixBQUdwQyxBQUVWO0FBTDhDLEFBQzNDLFdBRGE7QUFSakIsV0FhRyxZQUFNLEFBQ1A7a0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDYjtBQWZELEFBZ0JEO0FBbEJELGFBa0JPLEFBQ0w7QUFDQTtnQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNiO0FBQ0Y7Ozs7NkJBQ00sQUFDUDtBQUNBOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEseUNBQ08sS0FBTCxBQUFTLE9BQU0sT0FBZixBQUF1QjtvQkFBdkI7c0JBREYsQUFDRSxBQUNFO0FBREY7V0FDRyxLQUFELEFBQU0sdUJBQU8sY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQTtBQUFBO09BQUEsRUFIbkIsQUFDRSxBQUVpQixBQUdwQjs7Ozs7RUEvRHdCLGdCQUFNLEE7O0FBa0VqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEFBR0E7OztrQkFBZSxzQ0FDYixDQUFDLGlEQURZLEFBQ2IsQUFBa0QsVUFEcEQsQUFBZSxBQUVaIiwiZmlsZSI6Ikdvb2dsZU1hcHMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbWluZ2svY29kaW5nMS9mdWxsc3RhY2svcHJvamVjdHMvY29kZXItbGFuZHMxIn0=