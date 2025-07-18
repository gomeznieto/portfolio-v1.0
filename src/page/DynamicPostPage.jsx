import "../prism.css";
import { Link, useParams } from "react-router-dom";
import { setPosition } from "../config/setPosition";
import { setTitle } from "../config/setTitle";
import { useEffect, useState } from "react";
import Demo from "../component/Demo";
import Gallery from "../component/Gallery";
import Github from "../component/Github";
import Prism from "prismjs";
import Spinner from "../component/Spinner";
import useMode from "../hooks/useMode";
import usePost from "../hooks/usePost";
import useFormat from "../hooks/useFormat";

const DynamicPostPage = () => {
  const [loading, setLoading] = useState(true);
  const { mode } = useMode();
  const { post, setId, setSection } = usePost();

  //Obtenemos el id
  const { id } = useParams();
  // Obtenemos la seccion
  const { dynamicSection } = useParams();

  const { format } = useFormat();
  const isValidSection = format.some((f) => f.name === dynamicSection);
  setSection(dynamicSection);

  useEffect(() => {
    setId(id);

    if (post) {
      setTitle(post?.title);
      setLoading(false);
    }
  }, [id, post]);

  //Colocamos la posicion en la parte superior
  useEffect(() => {
    setPosition();
  }, []);

  if (loading) return <Spinner />;
  if (!isValidSection) return <Navigate to="/" />;

  const $code =
    !loading && document.querySelector(".language-javascript")?.firstChild;
  if ($code) {
    Prism.highlightAll();
  }

  const field = post?.description;

  return (
    <div className="mt-6 transition-all-1">
      <h3
        className={`title-page  mb-5 ${mode ? "text-white" : "text-zinc-800"}`}
      >
        <Link to={`/${dynamicSection}`}>
          <span className="title-post">{dynamicSection}</span>
        </Link>
        <span className="text-sm mr-2 ml-2 font-light">{`>`}</span>
        {post?.title}
      </h3>
      <div
        className={mode ? "text-white" : "text-zinc-800"}
        dangerouslySetInnerHTML={{ __html: field }}
      ></div>
      <br />

      {/* Gallery */}
      <section>
        <h3 className={`font-bold ${mode ? "text-white" : "text-zinc-800"}`}>
          Capturas
        </h3>
        <Gallery images={post?.images} />
      </section>

      {/* Links */}
      <section className={`flex justify-center mt-10 gap-x-4`}>
        <Github href={post?.github} />
        {post?.demo && <Demo href={post?.demo} />}
      </section>
    </div>
  );
};

export default DynamicPostPage;
