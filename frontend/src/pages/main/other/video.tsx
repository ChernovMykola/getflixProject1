import React from 'react';
import videoBg from '../../../assets/video.gif';

const Main: React.FC = () => {
  return (
    <div className='main'>
      <div className="overlay"></div>
      <img src={videoBg}  />
    </div>
  );
};

export default Main;
