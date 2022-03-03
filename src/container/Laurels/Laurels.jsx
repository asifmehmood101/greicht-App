import React from 'react';
import { data, images } from '../../constants';
import { Container } from '../../components/Container';
import { SubHeading } from '../../components/SubHeading';
import './Laurels.css';

export const Laurels = () => (
  <section className="laurel app__bg">
    <div className="logo-box">
      <img src={images.logo} alt="bites" width={146} height={146} />
    </div>

    <Container maxWlg>
      <div className="container-wrapper">
        <div className="laurel__awards">
          <SubHeading>Awards & recognition</SubHeading>
          <h1 className="laurel__heading">Our Laurels</h1>

          <div className="awards-details">
            {data.awards.map(({ title, imgUrl, subtitle }, index) => {
              return (
                <div className="award-detail" key={index}>
                  <div className="award__number">
                    <img
                      src={imgUrl}
                      alt="award-numbers"
                      width={79}
                      height={79}
                    />
                  </div>

                  <div className="award__description">
                    <h3 className="award__title">{title}</h3>
                    <p className="award__subtitle">{subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="laurel__image-box">
          <img src={images.laurels} alt="laurels foods" />
        </div>
      </div>
    </Container>
  </section>
);
