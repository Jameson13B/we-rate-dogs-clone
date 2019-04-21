import React, { Component } from 'react';
import axios from 'axios';
import DogPic from '../components/DogPic';
import Feedback from '../components/Feedback';
import BreedPanel from '../components/BreedPanel';
import '../styles/Dashboard.css';
import RatePanel from '../components/RatePanel';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrl: '',
      breed: '',
      rate: '',
      feedback: null
    };
  }
  componentDidMount() {
    this.requestPicture();
  }
  requestPicture = () => {
    // Sets path and sends request for photo
    let path =
      this.state.breed === ''
        ? 'https://dog.ceo/api/breeds/image/random'
        : `https://dog.ceo/api/breed/${this.state.breed}/images/random`;
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
  handleInputChange = async e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className='Dashboard'>
        <Feedback feedback={this.state.feedback} />
        <DogPic src={this.state.photoUrl} feedback={this.state.feedback} />
        <BreedPanel
          breed={this.state.breed}
          handleInputChange={this.handleInputChange}
          requestPicture={this.requestPicture}
        />
        <RatePanel
          rate={this.state.rate}
          handleInputChange={this.handleInputChange}
          // ratePicture={this.ratePicture}
        />
      </div>
    );
  }
}

export default Dashboard;
