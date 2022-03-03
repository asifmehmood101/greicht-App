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
import react from 'react';

const { gallery01, gallery02, gallery03, gallery04 } = images;
const galleryImages = [gallery01, gallery02, gallery03, gallery04];

export const Gallery = () => {
  const scrollRef = React.useRef(null);

  const handleScroll = (direction) => {
    console.log(scrollRef.current.scrollLeft);

    if (direction === 'left') {
      scrollRef.current.scrollLeft -= 300;
    } else {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <section className="gallery">
      <div className="gallery__container">
        <div className="gallery__content">
          <SubHeading>instagram</SubHeading>
          <h2 className="gallery__heading">photo gallery</h2>
          <p className="gallery__paragraph">
            Lorem ipsum dolor sit amet, consecrator adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>
          <PrimaryButton>view more</PrimaryButton>
        </div>
        <div className="gallery__images">
          <div ref={scrollRef} className="image-container">
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
          <div className="gallery__btns">
            <div
              className="gallery__btn gallery__btn-left"
              onClick={() => handleScroll('left')}
            >
              <BsArrowLeftShort color="#fff" fontSize={30} />
            </div>
            <div
              className=" gallery__btn gallery__btn-right"
              onClick={() => handleScroll('right')}
            >
              <BsArrowRightShort color="#fff" fontSize={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
