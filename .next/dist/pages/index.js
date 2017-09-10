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
  return _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, {
    as: {
      pathname: '/p/' + props.id
    },
    href: {
      pathname: '/post',
      query: { title: props.title }
    } }, _react2.default.createElement('a', null, ' ', props.title, ' ')));
};

var Index = function Index() {
  return _react2.default.createElement('div', null, _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('p', null, ' Hello next js main page '), _react2.default.createElement('ul', null, _react2.default.createElement(PostLink, { id: 'hello-nextJs', title: 'Hello Next js' }), _react2.default.createElement(PostLink, { id: 'fun-games', title: 'Funny Games' }), _react2.default.createElement(PostLink, { id: 'deployment', title: 'Deploy apps with Zeit' })), _react2.default.createElement(_link2.default, { href: {
      pathname: '/gmaps'
    } }, _react2.default.createElement('a', null, ' Google Maps '))));
};

exports.default = Index;