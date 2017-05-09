var React = require('react');
var Popular = require('./Popular');

class App extends React.Component {
  render() {
    //whatever the render method returns is going to be the UI for this Component
    return (
      //JSX, not vaid js syntax, we need webpack and babel to transform this code.
      <div className = 'container'>
      <Popular />
      </div>//inside Popular render method we are rendering the word Popular
    )
  }
}

module.exports = App; //exporting the App component so that we can requiere it in the index.js
