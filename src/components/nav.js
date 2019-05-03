import React ,{Component} from 'react';
import { NavLink } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.

class Nav extends Component {
 
  render() {
    return (   
    <div className="header-component">
      <div id="nav-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      <nav>
        <ul>
          <li><NavLink exact={true} to='/' activeClassName="active" >Home</NavLink></li>
          <li><NavLink exact={true}to='/Services' activeClassName="active">Our Services</NavLink></li>
          <li><NavLink exact={true}to='/AboutUs' activeClassName="active">About Us</NavLink></li>
        </ul>
      </nav>
     
      <header>
          <h1>React-<br/>Semantic-Ui.</h1>
      </header>
    </div>   
      
    );
  }
}

export default Nav;
