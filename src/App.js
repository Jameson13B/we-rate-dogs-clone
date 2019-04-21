import React from 'react';
import './styles/App.css';
import { Route } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import DogList from './routes/DogList';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Nav />
        <Route exact path='/' component={Dashboard} />
        <Route path='/my-list' component={DogList} />
      </header>
    </div>
  );
};

export default App;
