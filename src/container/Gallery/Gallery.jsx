import React from 'react';
import { PrimaryButton } from '../../components/Button';
import { SubHeading } from '../../components/SubHeading';
import { images } from '../../constants';
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';
import './Gallery.css';

const { gallery01, gallery02, gallery03, gallery04 } = images;
const galleryImages = [gallery01, gallery02, gallery03, gallery04];

export const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery__container">
        <div className="gallery__content">
          <SubHeading>instagram</SubHeading>
          <h2 className="gallery__heading">photo gallery</h2>
          <p className="gallery__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>
          <PrimaryButton>view more</PrimaryButton>
        </div>
        <div className="gallery__images">
          {galleryImages.map((image, index) => {
            return (
              <div className="gallery__image-card" key={index}>
                <img src={image} alt={`gallery_image-${index + 1}`} />
                <div className="image__icon-box">
                  <BsInstagram fontSize={25} className="image-icon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
