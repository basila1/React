var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');

class App extends React.Component {
  render() {
    //whatever the render method returns is going to be the UI for this Component
    return (
      <Router>
        <div className = 'container'>
          <Nav />
          <Route path = '/popular' component = {Popular} />
        </div>
      </Router>
      //JSX, not vaid js syntax, we need webpack and babel to transform this code.
//inside Popular render method we are rendering the word Popular
    )
  }
}

module.exports = App; //exporting the App component so that we can requiere it in the index.js
