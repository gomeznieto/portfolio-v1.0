import "../prism.css";
import { Link, useParams } from "react-router-dom";
import { setPosition } from "../config/setPosition";
import { setTitle } from "../config/setTitle";
import { useEffect, useState } from "react";
import Demo from "../component/Demo";
import Gallery from "../component/Gallery";
import ActionButton from "../component/ActionButton";
import Prism from "prismjs";
import Spinner from "../component/Spinner";
import useMode from "../hooks/useMode";
import useProjects from "../hooks/useProjects";

const Post = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const { mode } = useMode();
  const { project, setId } = useProjects();

  useEffect(() => {
    setId(id);

    if (project) {
      setTitle(project?.title);
      setLoading(false);
    }
  }, [id, project]);

  //Colocamos la posicion en la parte superior
  useEffect(() => {
    setPosition();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const $code =
    !loading && document.querySelector(".language-javascript")?.firstChild;
  if ($code) {
    Prism.highlightAll();
  }

  const field = project?.description;

  return (
    <div className="mt-6 transition-all-1">
      <h3
        className={`title-page  mb-5 ${mode ? "text-white" : "text-zinc-800"}`}
      >
        <Link to="/works">
          <span className="title-post">Works</span>
        </Link>
        <span className="text-sm mr-2 ml-2 font-light">{`>`}</span>
        {project?.title}
      </h3>
      <div
        className={mode ? "text-white" : "text-zinc-800"}
        dangerouslySetInnerHTML={{ __html: field }}
      ></div>
      <br />

      {/* Gallery */}
      <section>
        <h3 className={`font-bold ${mode ? "text-white" : "text-zinc-800"}`}>Capturas</h3>
        <Gallery images={project?.images} />
      </section>

      {/* Links */}
      <section 
        className={`flex justify-center mt-10 gap-x-4`}
      >
        <ActionButton href={project?.Link} />
        {project?.demo && <Demo href={project?.demo} />}
      </section>
    </div>
  );
};

export default Post;
