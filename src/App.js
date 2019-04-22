import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import DogList from './routes/DogList';
import Nav from './components/Nav';
import './styles/App.css';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='title'>WeRateDogsClone</h1>
        <Nav />
        <Route exact path='/' component={Dashboard} />
        <Route path='/my-list' component={DogList} />
      </header>
    </div>
  );
};

export default App;
