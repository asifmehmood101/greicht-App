import React from 'react';
import './PrimaryButton.css';

export const PrimaryButton = ({ children, center }) => {
  return (
    <div className={center && 'btn__center'}>
      <button className={`primary-button `}>{children}</button>
    </div>
  );
};
