import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/DogList.css';

class DogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myList: []
    };
  }
  componentDidMount() {
    if (window.localStorage.getItem('myList')) {
      this.setState({
        myList: JSON.parse(window.localStorage.getItem('myList'))
      });
    }
  }
  render() {
    return (
      <div className='DogList'>
        <h1 className='title'>Rated</h1>
        {this.state.myList.length > 0 ? (
          <ul>
            {this.state.myList.map((rating, i) => {
              return (
                <li key={i}>
                  <h1 className='rating'>{rating.rating}/10</h1>
                  <img src={rating.photoUrl} alt='dog-pic' />
                </li>
              );
            })}
          </ul>
        ) : (
          <h1 className='empty'>
            No Dogs rated yet. Rate a dog <Link to='/'>here</Link>.
          </h1>
        )}
      </div>
    );
  }
}

export default DogList;
