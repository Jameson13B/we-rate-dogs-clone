import React from 'react';

const RatePanel = props => {
  return (
    <div className='RatePanel panel'>
      <div className='dropdown small'>
        <select
          value={props.breed}
          onChange={props.handleInputChange}
          name='rate'
        >
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
          <option value='13'>13</option>
          <option value='14'>14</option>
          <option value='15'>15</option>
          <option value='16'>16</option>
        </select>
      </div>
      <span onClick={props.ratePicture} className='btn'>
        Rate Dog
      </span>
    </div>
  );
};

export default RatePanel;
