import React from 'react';
import { meal } from '../../constants';
import { BsPlayFill, BsPauseFill } from 'react-icons/bs';
import './Intro.css';

export const Intro = () => {
  const [videoPaly, setVideoPlay] = React.useState(false);
  const videoRef = React.useRef(null);

  const videoHandler = () => {
    setVideoPlay((prevState) => !prevState);

    if (videoPaly) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <section className="intro">
      <div className="video-box">
        <video
          type="video/mp4"
          ref={videoRef}
          src={meal}
          muted
          loop
          className="intro__video"
        />
      </div>
      <div className="intro__video-overlays">
        <div className="icon-box" onClick={videoHandler}>
          {videoPaly ? (
            <BsPauseFill color="#fff" fontSize={35} />
          ) : (
            <BsPlayFill color="#fff" fontSize={35} />
          )}
        </div>
      </div>
    </section>
  );
};
