import React from "react";

const Image = ({ className, image }) => {
  return (
    <img className={className} src={image.src} alt={image.alt || "Image"} />
  );
};

export default Image;
