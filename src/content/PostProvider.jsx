import { createContext, useCallback, useState, useEffect } from "react";
import { getPost } from "../config/getPost";
import { calcularResultado } from "../helper/CalculateEntries";

const postContext = createContext();

const postProvider = ({ children }) => {
  const ENTRIES = 6;

  const [loading, setLoading] = useState(false);
  const [section, setSection] = useState(null);
  const [posts, setPosts] = useState(null);
  const [post, setPost] = useState(null);
  const [id, setId] = useState(0);

  //Paginación
  const [pages, setPages] = useState(0);
  const [actualPage, setActualPage] = useState(1);
  let to = ENTRIES * actualPage;
  let since = calcularResultado([6, 0, actualPage]);
  const [init, setInit] = useState([since, to]);

  // Callback a llamada de posts
  const memorizePost = useCallback(async () => {
    try {
      setLoading(true);

      // Data
      const { data } = await getPost();
      let sectionPost = data.items.filter((el) => el.format == `${section}`);
      setPosts(sectionPost);
      
      // Paginancion reiniciar
      setPages(Math.ceil(sectionPost.length / ENTRIES));
      setActualPage(1);
      to = ENTRIES * actualPage;
      since = calcularResultado([sectionPost.length < 6 ? sectionPost.length: 6, 0, actualPage]);
      setInit([since, to]);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [setSection, section]);

  useEffect(() => {
    memorizePost();
  }, [section]);

  useEffect(() => {
    //Función para obtener el proyecto por su ID
    const getPost = async () => {
      const postById = posts?.filter(
        (post) => parseInt(post.id) === parseInt(id)
      );

      setPost(postById[0]);
    };

    const getPostById = async () => {
      //Obtenemos los datos de la API
      const { data } = await getPost();
      setPosts(data.items.filter((el) => el.format == `${section}`));
      setPages(Math.ceil(data.length / ENTRIES));

      //Filtramos el proyecto por su ID
      getPost();
    };

    getPostById();
    setLoading(false);
  }, [id, posts]);

  return (
    <postContext.Provider
      value={{
        posts,
        post,
        pages,
        ENTRIES,
        actualPage,
        setActualPage,
        setInit,
        init,
        loading,
        setId,
        setSection,
      }}
    >
      {children}
    </postContext.Provider>
  );
};

export { postContext };

export default postProvider;
