import React, { Component } from 'react';

//components
import Main from "./main";
import Services from "./services";
import AboutUs from "./aboutUs";


//Router from react-router-dom
import {Route} from "react-router-dom";


class Routes extends Component {

  render() {
    return (

        <div>
          <Route exact path="/" component={Main} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/AboutUs" component={AboutUs} />          
        </div>

    );
  }
}

export default Routes;
