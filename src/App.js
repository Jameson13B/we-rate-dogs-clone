import React, { Component } from 'react';
import './styles/App.css';
import { Route } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import DogList from './routes/DogList';
import Nav from './components/Nav';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Nav />
          <Route exact path='/' component={Dashboard} />
          <Route path='/dog-list' component={DogList} />
        </header>
      </div>
    );
  }
}

export default App;
