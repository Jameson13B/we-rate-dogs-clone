import React, { Component } from 'react';
import axios from 'axios';
import DogPic from '../components/DogPic';
import Feedback from '../components/Feedback';
import BreedPanel from '../components/BreedPanel';
import RatePanel from '../components/RatePanel';
import '../styles/Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrl: '',
      breed: '',
      rate: '10',
      feedback: null
    };
  }
  componentDidMount() {
    this.requestPicture();
  }
  requestPicture = () => {
    // Sets path for request
    let path =
      this.state.breed === ''
        ? 'https://dog.ceo/api/breeds/image/random'
        : `https://dog.ceo/api/breed/${this.state.breed}/images/random`;
    // sends request for photo URL
    axios
      .get(path)
      .then(res => {
        this.setState({
          photoUrl: res.data.message,
          feedback: null
        });
      })
      .catch(() => {
        this.setState({
          feedback: 'Error loading photo. Try again.',
          photoUrl: null
        });
      });
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  ratePicture = () => {
    // create a rating
    let rating = {
      photoUrl: this.state.photoUrl,
      rating: this.state.rate,
      date: Date.now()
    };
    // get list from local storage and push on new rating
    let myList = JSON.parse(window.localStorage.getItem('myList')) || [];
    myList.push(rating);
    window.localStorage.setItem('myList', JSON.stringify(myList));
    this.requestPicture();
  };
  render() {
    return (
      <div className='Dashboard'>
        <Feedback feedback={this.state.feedback} />
        <DogPic src={this.state.photoUrl} feedback={this.state.feedback} />
        <div className='toolbar'>
          <BreedPanel
            breed={this.state.breed}
            handleInputChange={this.handleInputChange}
            requestPicture={this.requestPicture}
          />
          <RatePanel
            rate={this.state.rate}
            handleInputChange={this.handleInputChange}
            ratePicture={this.ratePicture}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
