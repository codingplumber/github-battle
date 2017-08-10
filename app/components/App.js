var React = require('react');
var Popular = require('./Popular');

// component definition
// app is the name of this component
class App extends React.Component {
  // render sets what the UI will look
  render() {
    return (
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

module.exports = App;
// allows us to require it on the index.js
