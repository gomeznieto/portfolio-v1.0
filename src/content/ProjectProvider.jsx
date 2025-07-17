import { createContext, useState, useEffect, useCallback } from "react";
import { getProyect } from "../config/getProject";
import { calcularResultado } from "../helper/CalculateEntries";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const ENTRIES = 6;

  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});
  const [id, setId] = useState(0);
  const [loading, setLoading] = useState(true);

  //Paginación
  const [pages, setPages] = useState(0);
  const [actualPage, setActualPage] = useState(1);
  let since = calcularResultado([6, 0, actualPage]);
  let to = ENTRIES * actualPage;
  const [entries, setEntries] = useState([since, to]);

  const memorizeProyects = useCallback(async()=>{
      const {data} = await getProyect();
      setProjects(data.items.filter(el => el.format == 'Works'));
      setPages(Math.ceil(data.length / ENTRIES));
      setLoading(false);
  },[])

  useEffect(() => {
    memorizeProyects();
  }, []);

  // useEffect(() => {
  //   //Función para obtener el proyecto por su ID
  //   const getProject = async () => {
  //     const projectById = projects.filter(
  //       (project) => parseInt(project.id) === parseInt(id)
  //     );

  //     setProject(projectById[0]);
  //   };

  //    const getProjectById = async () => {
  //     //Verificamos si ya hay datos
  //     if (projects.length > 0) {
  //       await getProject();
  //       return;
  //     }

  //     //Obtenemos los datos de la API
  //     const data = await getProyect();
  //     setProjects(data);

  //     //Filtramos el proyecto por su ID
  //     getProject();
  //   };

  //   getProjectById();
  // }, [id, projects]);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        loading,
        pages,
        project,
        ENTRIES,
        actualPage,
        entries,
        setId,
        setActualPage,
        setEntries,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext };

export default ProjectProvider;
