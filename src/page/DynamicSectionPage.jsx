import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFormat from "../hooks/useFormats";
import useMode from "../hooks/useMode";
import Spinner from "../component/Spinner";
import { setPosition } from "../config/setPosition";
import ButtonPages from "../component/ButtonPages";
import Post from "../component/Post";
import SkeletonContent from "../component/SkeletonContent";
import useBlog from "../hooks/useBlog";

function DynamicSectionPage() {
  const { dynamicSection } = useParams();
  const { format } = useFormat();

  const [sectionContent, setSectionContent] = useState(dynamicSection);
  const isValidSection = format.some((f) => f.name === dynamicSection);

  const { blogs, loading, pages, ENTRIES, entries } = useBlog();
  const { mode } = useMode();

  //Colocamos la posicion en la parte superior
  useEffect(() => {
    setPosition();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!sectionContent) return <div>Sección no encontrada o no válida.</div>;

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
          ) : blogs?.length > 0 ? (
            blogs
              .map((project) => {
                return <Post obj={project} href="post" key={project.id} />;
              })
              .reverse()
              .splice(entries[0], entries[1])
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
      {pages > 1 && <ButtonPages content="post" />}
    </>
  );
}

export default DynamicSectionPage;
