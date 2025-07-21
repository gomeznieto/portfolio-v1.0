import React from "react";

const Image = ({ src, alt }) => {
  return (
    <img
      className="w-56 h-36 rounded-xl m-2 overflow-hidden cursor-pointer transition-all-1"
      src={src}
      alt={alt}
    />
  );
};

export default Image;
