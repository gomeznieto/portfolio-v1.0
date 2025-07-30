import { Link, useParams } from "react-router-dom";
import { setPosition } from "../config/setPosition";
import { setTitle } from "../config/setTitle";
import { useEffect, useState } from "react";
import Gallery from "../component/Gallery";
import Spinner from "../component/Spinner";
import useMode from "../hooks/useMode";
import usePost from "../hooks/usePost";
import useFormat from "../hooks/useFormat";
import ActionButton from "../component/ActionButton";
import MarkdownRenderer from "../component/common/MarkdownRenderer";

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
    setSection(dynamicSection);
  }, []);

  if (loading) return <Spinner />;
  if (!isValidSection) return <Navigate to="/" />;

  return (
    <div className="mt-6 transition-all-1">
      <h3
        className={`title-page flex flex-row mb-5 ${
          mode ? "text-white" : "text-zinc-800"
        }`}
      >
        <Link to={`/${dynamicSection}`}>
          <span className="title-post">{dynamicSection}</span>
        </Link>
        <span className="text-sm leading-6 mr-2 ml-2 font-light">
          {<i class="fa-solid fa-chevron-right"></i>}
        </span>
        <div className="flex justify-between w-full">
          {post?.title}
          <span className={mode ? "pill-date" : "pill-date-light"}>
            {post?.created_at.slice(0, 10)}
          </span>
        </div>
      </h3>
      <div className={mode ? "text-white" : "text-zinc-800"}>
        <MarkdownRenderer content={post?.description} />
      </div>
      <br />

      {/* Gallery */}
      {post?.media.length > 0 && (
        <section className="transition-all-2">
          <h3 className={`font-bold ${mode ? "text-white" : "text-zinc-800"}`}>
            Capturas
          </h3>
          <Gallery images={post?.media} />
        </section>
      )}

      {/* Links */}
      {post?.links.length > 0 && (
        <section className="flex justify-center mt-10 gap-x-4 transition-all-3">
          {post?.links.map((el) => {
            return <ActionButton link={el} key={el?.url} />;
          })}
        </section>
      )}
    </div>
  );
};

export default DynamicPostPage;
