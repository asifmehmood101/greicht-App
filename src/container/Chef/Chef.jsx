import React from 'react';
import { Container } from '../../components/Container';
import { SubHeading } from '../../components/SubHeading';
import { images } from '../../constants';

import './Chef.css';

export const Chef = () => (
  <section className="chef  app__bg">
    <Container>
      <Container maxWlg>
        <div className="chef__container">
          <div className="chef__image-box">
            <img src={images.chef} alt="our chef" />
          </div>
          <div className="chef__content">
            <div className="chef__heading">
              <SubHeading>chef's word</SubHeading>
              <h2>what we believe in</h2>
            </div>
            <div className="chef__words">
              <p className="chef__paragraph">
                <img
                  className="chef__quotation"
                  src={images.quote}
                  alt="quotation"
                  width={40}
                  height={35}
                />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
                sit .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris
                eget sit. Nulla scelerisque scelerisque congue ac consequat,
                aliquam molestie lectus eu. Congue iaculis integer curabitur
                semper sit nunc.
              </p>
            </div>

            <div className="chef__intro">
              <p className="chef__intro-name">kevin luo</p>
              <p className="chef__intro-designation">Chef & Founder</p>
            </div>

            <div className="chef__signature">
              <img src={images.sign} alt="chef signature" />
            </div>
          </div>
        </div>
      </Container>
    </Container>
  </section>
);
