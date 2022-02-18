import React from 'react';
import { PrimaryButton } from '../../components/Button';
import { Container } from '../../components/Container/Container';
import { images } from '../../constants';

import './AboutUs.css';

export const AboutUs = () => (
  <section className="AboutUs app__bg">
    <Container maxWlg>
      <div className="overlayImgBox">
        <img src={images.G} alt="background G lettter" />
      </div>
      <div className="aboutUs__content">
        <div className="aboutUs__intro--right">
          <div className="heading-box ">
            <h2 className="secondary-heading ">about us</h2>
            <img src={images.spoon} alt="heading-spoon" />
          </div>
          <p className="aboutUs-paragraph ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <PrimaryButton>know more</PrimaryButton>
        </div>
        <div className="aboutUsImageBox">
          <img src={images.knife} alt="chife knife" />
        </div>
        <div className="aboutUs__intro--left">
          <div className="heading-box ">
            <h2 className="secondary-heading">over history</h2>
            <img src={images.spoon} alt="heading-spoon" />
          </div>
          <p className="aboutUs-paragraph ">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>

          <PrimaryButton>know more</PrimaryButton>
        </div>
      </div>
    </Container>
  </section>
);
