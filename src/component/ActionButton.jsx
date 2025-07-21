import React from "react";
import useMode from "../hooks/useMode";
import Icono from "./Icon";

const ActionButton = ({ link }) => {
  const { mode } = useMode();
  return (
    <div className="flex justify-center">
      <div
        className={`rounded-full py-2 px-4 font-medium border-line cursor-pointer transition-all ${
          mode ? " bg-slate-600" : "bg-slate-800 hover:bg-slate-700 "
        }`}
      >
        <a
          href={link?.url}
          target="_blank"
          className="flex justify-center items-center"
        >
            <Icono
              iconContent={link?.icon}
              color={`mr-2 icon ${mode ? "color-link" : "text-white"}`}
            />
          <span className="text-white">{link?.name}</span>
        </a>
      </div>
    </div>
  );
};

export default ActionButton;
