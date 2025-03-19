import React from "react";
import { Link } from "react-router-dom";

const Image = ({ to, className, src, alt }) => {
  return (
    <Link>
      <picture>
        <img className={className} to={to} src={src} alt={alt} />
      </picture>
    </Link>
  );
};

export default Image;
