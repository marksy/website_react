import React, { Component } from 'react';
import Menu from './components/Menu';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Menu />
        <section>
          <Main />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
