import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Panel.css';

const BreedPanel = props => {
  const [breedList, changeBreedList] = useState([]);

  useEffect(() => {
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        changeBreedList(res.data.message);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='BreedPanel panel'>
      <div className='dropdown'>
        <select
          value={props.breed}
          onChange={props.handleInputChange}
          name='breed'
        >
          <option value=''>Random</option>
          {Object.keys(breedList).map((breed, i) => {
            return (
              <option value={breed} key={i}>
                {breed}
              </option>
            );
          })}
        </select>
      </div>
      <span onClick={props.requestPicture} className='btn'>
        Next
      </span>
    </div>
  );
};

export default BreedPanel;
