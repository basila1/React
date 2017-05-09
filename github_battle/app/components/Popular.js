var React = require('react');

//create the Popular class
class Popular extends React.Component {
  //component needs a UI to it, so we are going to specify a render() method
  render() {
    return (
      <div>Popular!</div>
    )
  }
}

module.exports = Popular; //export this so that you can import it into a different file. 
