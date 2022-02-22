import React from 'react';
import './Container.css';

export const Container = ({ children, maxWlg }) => {
  return (
    <div className={maxWlg ? 'container-lg' : 'container-xl'}> {children} </div>
  );
};
