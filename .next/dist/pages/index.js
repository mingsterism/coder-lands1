'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\mingk\\coding1\\fullstack\\projects\\coder-lands1\\pages\\index.js?entry';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJMaW5rIiwiTGF5b3V0IiwiUG9zdExpbmsiLCJwcm9wcyIsInBhdGhuYW1lIiwiaWQiLCJxdWVyeSIsInRpdGxlIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU0sV0FBVyxTQUFYLEFBQVcsU0FBQSxBQUFDLE9BQVUsQUFDMUI7eUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFFRTtBQUZGO0FBQUEsR0FBQSxrQkFFRSxBQUFDOzt3QkFFa0IsTUFGbkIsQUFDTSxBQUNtQixBQUV2QjtBQUhJLEFBQ0Y7O2dCQUVJLEFBQ0ssQUFDVDthQUFPLEVBQUUsT0FBTSxNQU5uQixBQUlRLEFBRUcsQUFBYztBQUZqQixBQUNKO2dCQUxKO2tCQUFBLEFBUUU7QUFSRjtBQUNFLHFCQU9BLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUFLLFdBQUwsQUFBVyxPQVhqQixBQUNFLEFBRUUsQUFRRSxBQUlQO0FBaEJEOztBQWtCQSxJQUFNLFFBQVEsU0FBUixBQUFRLFFBQU0sQUFDbEI7eUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0EsOENBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsbUNBQ0UsQUFBQyxZQUFTLElBQVYsQUFBYSxnQkFBZSxPQUE1QixBQUFrQztnQkFBbEM7a0JBREYsQUFDRSxBQUNBO0FBREE7b0NBQ0EsQUFBQyxZQUFTLElBQVYsQUFBYSxhQUFZLE9BQXpCLEFBQStCO2dCQUEvQjtrQkFGRixBQUVFLEFBQ0E7QUFEQTtvQ0FDQSxBQUFDLFlBQVMsSUFBVixBQUFhLGNBQWEsT0FBMUIsQUFBZ0M7Z0JBQWhDO2tCQUxKLEFBRUUsQUFHRSxBQUVGO0FBRkU7dUJBRUYsQUFBQyxnQ0FBSztnQkFBTixBQUFZLEFBQ0E7QUFEQSxBQUNWO2dCQURGO2tCQUFBLEFBR0U7QUFIRjtxQkFHRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FaUixBQUNFLEFBQ0UsQUFPRSxBQUdFLEFBS1Q7QUFsQkQsQUFvQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbWluZ2svY29kaW5nMS9mdWxsc3RhY2svcHJvamVjdHMvY29kZXItbGFuZHMxIn0=