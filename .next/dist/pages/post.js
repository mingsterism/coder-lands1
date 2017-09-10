'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const Post =  (props) => (
//     <Layout>
//        <h1>{props.show.name}</h1>
//        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
//        <img src={props.show.image.medium}/>
//     </Layout>
// )

// Post.getInitialProps = async function (context) {
//   console.log("Context: -------", context);
//   const { id } = context.query
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
//   const show = await res.json()

//   console.log(`Fetched show: ${show.name}`)

//   return { show }
// }

// export default Post

var Content = function Content(props) {
  return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, props.url.query.title), _react2.default.createElement('p', null, 'This is the blog post content.'));
};

exports.default = function (props) {
  console.log(props);
  return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement(Content, { url: props.url }));
};