import React, { useState } from "react";
import Image from "./Image";
import ImageZoom from "./ImageZoom";

const Gallery = ({ images }) => {
  console.log(images)
  const [zoomedSrc, setZoomedSrc] = useState(null);
  const [zoomed, setZoomed] = useState(false);

  const handleImage = (src) => {
    setZoomedSrc(src);
  };

  const handleOpen = () => {
    setZoomed(!zoomed);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {images?.map((img, index) => (
        <div
          key={index}
          onClick={() => {
            handleImage(img.url);
            handleOpen();
          }}
        >
          <Image src={img.url} alt={img.name} size={img?.size} />
        </div>
      ))}
      {zoomed && (
        <div
          onClick={() => {
            handleOpen();
          }}
          className="cursor-pointer"
        >
          <ImageZoom href={zoomedSrc} alt={zoomedSrc} />
        </div>
      )}
    </div>
  );
};

export default Gallery;
