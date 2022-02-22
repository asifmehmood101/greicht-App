import React from 'react';
import './MenuItem.css';

export const MenuItem = ({ title, price, details }) => (
  <div className="menuItem">
    <div className="menuItem__header">
      <h3 className="menuItem__title">{title}</h3>
      <div className="menuItem__dash" />
      <p className="menuItem__price">{price}</p>
    </div>
    <p className="menuItem__details">{details}</p>
  </div>
);
