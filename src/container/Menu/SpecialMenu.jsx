import React from 'react';
import './SpecialMenu.css';
import { Container } from '../../components/Container';
import { SubHeading } from '../../components/SubHeading';
import { images } from '../../constants';
import { PrimaryButton } from '../../components/Button';

export const SpecialMenu = () => (
  <section className="menu">
    <Container>
      <Container maxWlg>
        <SubHeading center>Menu that fits you palatte</SubHeading>
        <h2 className="secondary-heading text-center">today's special</h2>
        <div className="menu__content">
          <div className="menu__Drinks">Drinks</div>
          <div className="menu__image-box">
            <img
              src={images.menu}
              alt="drinks and cocktails"
              className="menu__drink-image"
            />
          </div>
          <div className="menu__cocktail">Cocktail</div>
        </div>
        <PrimaryButton>view more</PrimaryButton>
      </Container>
    </Container>
  </section>
);
