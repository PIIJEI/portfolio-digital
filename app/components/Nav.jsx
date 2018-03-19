var React = require('react');
var {Link, IndexLink} = require('react-router');
var FontAwesome = require('react-fontawesome');

var Nav = () => {
    return (
      <div>
        <div className="navbar">
          <ul className="menu">

            <li id="menu-expand">
              <a href="/">
                <FontAwesome name="fw" className="fa-bars"/>
                Menu
              </a>
            </li>

            <li className="page-name">
              Homepage
            </li>

            <li className="brand">
              <a href="/">
                <img src="https://homepages.cae.wisc.edu/~ece533/images/boat.png" alt="sample" title="sample" />
              </a>
            </li>

          </ul>
          <div className="navbar-dropdown"></div>
        </div>
      </div>
    );
};

module.exports = Nav;
