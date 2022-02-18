import React from 'react';
import './Hero.css';
import { PrimaryButton } from '../../components/Button';
import { images } from '../../constants';
import { Container } from '../../components/Container';
import { SubHeading } from '../../components/SubHeading';

export const Hero = () => (
  <section className="hero">
    <Container>
      <Container maxWlg>
        <div className="gird">
          <div className="detail">
            <SubHeading>chase the New flavour</SubHeading>
            <h1 className="primary-heading">the king to fine dining</h1>
            <p className="paragraph">
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum
              volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
              aliquam amet tellus
            </p>
            <PrimaryButton>explore menu</PrimaryButton>
          </div>
          <div className="hero__image-box">
            <img
              className="hero__image"
              src={images.welcome}
              alt="khloe-arledge-chicken"
            />
          </div>
        </div>
        <p className="hero__date">01 &mdash; 02 03 04 </p>
        <p className="hero__hashTag">#Gerícht</p>
      </Container>
    </Container>
  </section>
);
