import React, { Component } from 'react';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Exercises from './Exercises'
class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <Exercises/>
        <Footer/>
      </>
    );
  }
}

export default App;