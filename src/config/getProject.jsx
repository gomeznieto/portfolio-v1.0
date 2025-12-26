import axios from "axios";

/**
 * Retrieves project data from an external API or a local JSON file.
 * If the external API fails, it falls back to the local JSON file.
 * @returns {Promise<Array>} An array of project data.
 */
export const getProyect = async () => {
  // const URL_LOCAL = import.meta.env.VITE_API_LOCAL_PROYECTOS;
  // const URL = import.meta.env.VITE_API_EXTERNAL_PROYECTOS;
  // const URL_JSONBIN = import.meta.env.VITE_API_EXTERNAL_PROYECTOS_JSONBIN;
  // const MASTER_KEY = import.meta.env.VITE_MASTER_KEY;
  const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;
  const URL_BASE = import.meta.env.VITE_API_URL_BASE;

    try{
    const { data } = await axios.get(`${URL_BASE}/entrada`, {
      headers:{
      "Content-Type": "application/json",
      "X-Api-Key" : ACCESS_KEY
      }
    });

    if(data){
      return data;
    }

    return {}
  } catch (error){
    console.log(error)
  }


  // try {
  //   const { data } = await axios(URL, {
  //     "Content-Type": "application/json",
  //   });
  //   if (data?.length > 0) {
  //     return data;
  //   }
    
  //   return [];
  // } catch (error) {

  //   {/* Si falla la API externa, llamamos los datos de la API interna */}
  //   try {
  //     const { data } = await axios(URL_JSONBIN, {
  //       "Content-Type": "application/json",
  //       headers: {
  //         "X-Master-Key": MASTER_KEY,
  //         "X-Access-Key": ACCESS_KEY,
  //       },
  //     });
  //     if (data?.record.length > 0) {
  //       return data.record;
  //     }
  //   } catch (error) {
  //     try {
  //       const { data } = await axios(URL_LOCAL, {
  //         "Content-Type": "application/json",
  //       });
  //       if (data?.length > 0) {
  //         return data;
  //       }
  //       return [];
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
    
  //   return [];
  // }
};


/**
 * Retrieves a project by its ID.
 * @param {number} id - The ID of the project.
 * @returns {Promise<Object>} - The project object.
 */
export const getProyectById = async (id) => {
  try {
    const data = await getProyect();
    const project = data.filter((project) => parseInt(project.id) == id);

    if (project?.length > 0) {
      return project[0];
    }

  } catch (error) {
    console.log(error);
  }
};
