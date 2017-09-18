'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ubuntu/coder-lands1/pages/index.js?entry';


// const GithubLogin = styled.button`
//   background-color: #4CAF50; /* Green */
//   border: none;
//   color: white;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
// `

var PostLink = function PostLink(props) {
  return _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_link2.default, {
    as: {
      pathname: '/p/' + props.id
    },
    href: {
      pathname: '/post',
      query: { title: props.title }
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, ' ', props.title, ' ')));
};

var Index = function Index() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, ' Hello next js main page '), _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement(PostLink, { id: 'hello-nextJs', title: 'Hello Next js', __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), _react2.default.createElement(PostLink, { id: 'fun-games', title: 'Funny Games', __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), _react2.default.createElement(PostLink, { id: 'deployment', title: 'Deploy apps with Zeit', __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  })), _react2.default.createElement(_link2.default, { href: {
      pathname: '/gmaps'
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, ' Google Maps '))));
};

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0eWxlZCIsIkxpbmsiLCJMYXlvdXQiLCJQb3N0TGluayIsInByb3BzIiwicGF0aG5hbWUiLCJpZCIsInF1ZXJ5IiwidGl0bGUiLCJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTSxXQUFXLFNBQVgsQUFBVyxTQUFBLEFBQUMsT0FBVSxBQUMxQjt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUVFO0FBRkY7QUFBQSxHQUFBLGtCQUVFLEFBQUM7O3dCQUVrQixNQUZuQixBQUNNLEFBQ21CLEFBRXZCO0FBSEksQUFDRjs7Z0JBRUksQUFDSyxBQUNUO2FBQU8sRUFBRSxPQUFNLE1BTm5CLEFBSVEsQUFFRyxBQUFjO0FBRmpCLEFBQ0o7Z0JBTEo7a0JBQUEsQUFRRTtBQVJGO0FBQ0UscUJBT0EsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQUssV0FBTCxBQUFXLE9BWGpCLEFBQ0UsQUFFRSxBQVFFLEFBSVA7QUFoQkQ7O0FBa0JBLElBQU0sUUFBUSxTQUFSLEFBQVEsUUFBTSxBQUNsQjt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSw4Q0FBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxtQ0FDRSxBQUFDLFlBQVMsSUFBVixBQUFhLGdCQUFlLE9BQTVCLEFBQWtDO2dCQUFsQztrQkFERixBQUNFLEFBQ0E7QUFEQTtvQ0FDQSxBQUFDLFlBQVMsSUFBVixBQUFhLGFBQVksT0FBekIsQUFBK0I7Z0JBQS9CO2tCQUZGLEFBRUUsQUFDQTtBQURBO29DQUNBLEFBQUMsWUFBUyxJQUFWLEFBQWEsY0FBYSxPQUExQixBQUFnQztnQkFBaEM7a0JBTEosQUFFRSxBQUdFLEFBRUY7QUFGRTt1QkFFRixBQUFDLGdDQUFLO2dCQUFOLEFBQVksQUFDQTtBQURBLEFBQ1Y7Z0JBREY7a0JBQUEsQUFHRTtBQUhGO3FCQUdFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQVpSLEFBQ0UsQUFDRSxBQU9FLEFBR0UsQUFLVDtBQWxCRCxBQW9CQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS91YnVudHUvY29kZXItbGFuZHMxIn0=