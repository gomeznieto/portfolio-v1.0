import React from "react";

const Image = ({ src, alt, size="w-56 h-36" }) => {
  return (
    <img
      className={`${size} rounded-xl m-2 overflow-hidden cursor-pointer transition-all-1`}
      src={src}
      alt={alt}
    />
  );
};

export default Image;
