var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

//Our popular component is rendering the select language component which is a function (stateless functional component)

//Add state
//need an active tab, keep track of whichever tab is active, so we can do two things 1. to highlight that specific tab 2. render the list of repositories based on the current selected tab.

function SelectLanguage(props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className = 'languages'>
      {languages.map(function (lang) {
        // console.log('Down here', this);
        return (
          <li
            style = {lang === props.selectedLanguage ? { color: '#d0021b' }: null}
            onClick = {props.onSelect.bind(null, lang)}
            key = {lang}>
            {lang}
          </li>
        )
      })}
    </ul>
  )
}


SelectLanguage.PropTypes = {
  selectedLanguage: PropTypes.string.isReqired,
  onSelect: PropTypes.func.isReqired,
}

//create the Popular class
class Popular extends React.Component {
  //adding a state
  //call super and pass in props
  //this is our INITIAL STATE.
  constructor (props) {
    super(props);
    this.state = {
      selectedLanguage: 'All', //All is going to be the default state
      repos: null
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage);
  }
  updateLanguage(lang) {
    //update state
    this.setState(function () {
      //whatever this function returns is going to be the new state
      return {
        selectedLanguage: lang,
        repos: null
      }
    });

    //AJAX request!!!
    api.fetchPopularRepos(lang)
      .then(function (repos) {
        // console.log(repos);
        this.setState(function () {
          return {
            repos: repos
          }
        })
      }.bind(this)); //the this keywork inside of this function will  be the same as what it is outside which is in the .bind 
  }
  //component needs a UI to it, so we are going to specify a render() method
  render() {
    // console.log('Up here', this);
    return (
      <div>
        <SelectLanguage
          selectedLanguage = {this.state.selectedLanguage}
          onSelect = {this.updateLanguage}
        />
      </div>
    )
  }
}

module.exports = Popular; //export this so that you can import it into a different file.
