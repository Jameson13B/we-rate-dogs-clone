import React from 'react';
import '../styles/Panel.css';

const BreedPanel = props => {
  return (
    <div className='BreedPanel panel'>
      <div className='dropdown'>
        <select
          value={props.breed}
          onChange={props.handleInputChange}
          name='breed'
        >
          <option value=''>Random</option>
          <option value='airedale'>Airedale</option>
          <option value='akita'>Akita</option>
          <option value='appenzeller'>Appenzeller</option>
          <option value='beagle'>Beagle</option>
          <option value='boxer'>Boxer</option>
          <option value='bulldog'>Bulldog</option>
          <option value='cattledog'>Cattle Dog</option>
          <option value='chihuahua'>Chihuahua</option>
          <option value='collie'>Collie</option>
          <option value='corgi'>Corgi</option>
          <option value='dachshund'>Dachshund</option>
          <option value='dalmatian'>Dalmatian</option>
          <option value='dane'>Great Dane</option>
          <option value='doberman'>Doberman</option>
          <option value='germanshepherd'>German Shep</option>
          <option value='labrador'>Labrador</option>
          <option value='pomeranian'>Pomeranian</option>
          <option value='poodle'>Poodle</option>
          <option value='retriever'>Retriever</option>
          <option value='rottweiler'>Rottweiler</option>
          <option value='sheepdog'>Sheepdog</option>
          <option value='shihtzu'>Shih Tzu</option>
        </select>
      </div>
      <span onClick={props.requestPicture} className='btn'>
        Next
      </span>
    </div>
  );
};

export default BreedPanel;
