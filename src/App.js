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
        <Route path='/dog-list' component={DogList} />
      </header>
    </div>
  );
};

export default App;

// - Create ratePicture function on Dashboard.
//    - When the user assigns a numeric rating, store
//      the rating and dog picture url in local storage.
// - Format/style Dashboard.
// - Build a dashboard page that allows the user to see
//   all of the dogs that they have rated on local storage.
