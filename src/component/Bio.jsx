import React from "react";
import useMode from "../hooks/useMode";
import MarkdownRenderer from "./common/MarkdownRenderer";

const Bio = ({ bio }) => {
  const { mode } = useMode();
   return (
    <div className="flex py-1" key={bio.year}>
      <p className={`font-bold ${mode ? "text-white" : "text-zinc-800"}`}>
        {bio.year}
      </p>
      <p
        className={`text-justify parraph-bio ${
          mode ? "text-white" : "text-zinc-800"
        }`}
        // dangerouslySetInnerHTML={{ __html: field_bio }}
      >
        <MarkdownRenderer content={bio.work}/>
      </p>
    </div>
  );
};

export default Bio;
