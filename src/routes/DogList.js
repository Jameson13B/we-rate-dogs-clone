import React, { Component } from 'react';
import '../styles/DogList.css';

class DogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myList: []
    };
  }
  componentDidMount() {
    this.setState({
      myList: JSON.parse(window.localStorage.getItem('myList'))
    });
  }
  render() {
    return (
      <div className='DogList'>
        <h1 className='title'>myList</h1>
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
      </div>
    );
  }
}

export default DogList;
