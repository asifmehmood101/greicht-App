import React from 'react';
import './SpecialMenu.css';
import { Container } from '../../components/Container';
import { SubHeading } from '../../components/SubHeading';
import { images, data } from '../../constants';
import { PrimaryButton } from '../../components/Button';
import { MenuItem } from '../../components/Menuitem/MenuItem';

export const SpecialMenu = () => (
  <section className="menu">
    <Container>
      <Container maxWlg>
        <SubHeading center>Menu that fits you palatte</SubHeading>
        <h2 className="secondary-heading text-center">today's special</h2>
        <div className="menu__content">
          <div className="menu__drinks">
            <h2>Wine & Beer</h2>
            {data.wines.map(({ title, price, tags }, index) => {
              return (
                <MenuItem
                  key={index}
                  title={title}
                  price={price}
                  details={tags}
                />
              );
            })}
          </div>
          <div className="menu__image-box">
            <img
              src={images.menu}
              alt="drinks and cocktails"
              className="menu__drink-image"
            />
          </div>
          <div className="menu__drinks">
            <h2>Cocktail</h2>
            {data.cocktails.map(({ title, price, tags }, index) => {
              return (
                <MenuItem
                  key={index}
                  title={title}
                  price={price}
                  details={tags}
                />
              );
            })}
          </div>
        </div>
        <div>
          <PrimaryButton center>view more</PrimaryButton>
        </div>
      </Container>
    </Container>
  </section>
);
