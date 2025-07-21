import { useParams, Navigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFormat from "../hooks/useFormat";
import useMode from "../hooks/useMode";
import Spinner from "../component/Spinner";
import { setPosition } from "../config/setPosition";
import ButtonPages from "../component/ButtonPages";
import Post from "../component/Post";
import SkeletonContent from "../component/SkeletonContent";
import usePost from "../hooks/usePost";

function DynamicSectionPage() {
  const { dynamicSection } = useParams();
  const { format } = useFormat();
  const isValidSection = format.some((f) => f.name === dynamicSection);

  const { posts, loading, pages, ENTRIES, init, setSection } = usePost();
  const { mode } = useMode();
  const [begin, end] = init;
  //Colocamos la posicion en la parte superior
  useEffect(() => {
    setPosition();
    setSection(dynamicSection);
  }, [dynamicSection]);

  if (loading) return <Spinner />;
  if (!isValidSection) return <Navigate to="/" />;

  return (
    <>
      <div className="mb-6">
        <h3
          className={`title-pages ml-2 ${
            mode ? "text-white" : "text-zinc-800"
          }`}
        >
          {dynamicSection}
        </h3>
        <div className="grid grid-cols-1 px-10 md:px-0 md:grid-cols-2 md:gap-6">
          {loading ? (
            <SkeletonContent />
          ) : posts?.length > 0 ? (
            posts
              .map((project) => {
                return <Post obj={project} href={dynamicSection} key={project.id} />;
              })
              .reverse()
              .slice(begin, end)
          ) : (
            <p
              className={`title-page mt-3 ${
                mode ? "text-zinc-400" : "text-zinc-800"
              }`}
            >
              Ups! Al parecer hubo un error! (F5, F5, F5!!!) 🫠
            </p>
          )}
        </div>
      </div>
      {pages > 1 && <ButtonPages content={dynamicSection} />}
    </>
  );
}

export default DynamicSectionPage;
