var React = require('react');
var NavLink = require('react-router-dom').NavLink;

//no state or life cycle components to it so make it a stateless function!!!
function Nav () {
  return (
    <ul className = 'nav'>
      <li>
        <NavLink exact activeClassName = 'active' to = '/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName = 'active' to = '/battle'>
          Battle
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName = 'active' to = '/popular'>
          Popular
        </NavLink>
      </li>
    </ul>

  )
}

module.exports = Nav;
