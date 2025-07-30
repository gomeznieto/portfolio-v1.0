import React from "react";
import useMode from "../hooks/useMode";

const ImageZoom = ({ href, alt }) => {

    const { mode } = useMode();

  return (
    <div className={`flex justify-center fixed top-0 left-0 w-full h-full z-50  bg-opacity-75 ${mode ? "bg-gray-900" : "bg-amber-50"}`}>
      <div className="flex flex-col justify-center items-center">
        <img
          src={href}
          alt={alt}
          className="rounded-lg imageZoomed h-auto"
        />
        <span className={mode ? "img-text" : "img-text-ligth"}>Haga click en la pantalla para cerrar</span>
      </div>
    </div>
  );
};

export default ImageZoom;
