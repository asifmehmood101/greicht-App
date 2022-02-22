import React from 'react';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const videoRef = React.useRef(null);

  return (
    <section className="intro">
      <div className="video-box">
        <video
          type="video/mp4"
          ref={videoRef}
          src={meal}
          muted
          loop
          className="intro-video"
        />
      </div>
    </section>
  );
};

export default Intro;
