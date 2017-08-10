var React = require('react');
var ReactDOM = require('react-dom');
// ^renders a React component to the DOM
require('./index.css');
var App = require('./components/App');

// component concerned about:
// state
// lifecycle event
// UI




ReactDOM.render(
  // specific component to render
  <App />,
  // where to render it to
  document.getElementById('app')
);

// npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader html-webpack-plugin webpack webpack-dev-server
