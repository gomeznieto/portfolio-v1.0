import React from "react";
import useMode from "../hooks/useMode";
import Icono from "./Icon";

const SocialNetwork = ({network}) => {
  const URL = import.meta.env.VITE_URL;
  const { mode } = useMode();
  return (
    <a href={network.url} target="_blank" key={network.id}>
      <button
        className={`social-link py-3 px-4 rounded-lg parraph-social ${
          mode
            ? "text-teal-200  underline-link "
            : "text-teal-700 underline-link-light underline-link-light"
        }`}
      >
        <Icono iconContent={network?.icon} color={`mr-2 icon ${mode && "color-link"}`} />
        {network.username}
      </button>
    </a>
  );
};

export default SocialNetwork;
