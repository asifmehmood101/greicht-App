import React from "react";
import "./Subheading.css";
import { images } from "../../constants";

export const SubHeading = ({ children, center }) => (
  <div className={center && "border-center subheading-container"}>
    <p className="subheading">{children}</p>
    <img src={images.spoon} alt="subheading border" width={40} height={9} />
  </div>
);
