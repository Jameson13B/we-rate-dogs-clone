import React from 'react';

const Feedback = props => {
  return (
    <div>
      {props.feedback ? <p className='feedback'>{props.feedback}</p> : null}
    </div>
  );
};

export default Feedback;
