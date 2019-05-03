import React, { Component } from 'react';

//import the routing file
import Routes from "./components/routing";

//import the Provider
import { Provider } from "react-redux";
 
//import the store file
import Store from "./store/store";

//import the header file
import Nav from "./components/nav";

//import the container from Semantic Ui
//which I wont use for my styled nav to work
//import { Container } from 'semantic-ui-react';

//import the footer component
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="container-custom">
          <Nav />
          <Routes />
          <Footer/>
        </div>
      </Provider>
    );
  }
}

export default App;
