import axios from "axios";

/**
 * Retrieves project data from an external API or a local JSON file.
 * If the external API fails, it falls back to the local JSON file.
 * @returns {Promise<Array>} An array of project data.
 */
export const getPost = async () => {
  const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;
  const URL_BASE = import.meta.env.VITE_API_URL_BASE;

    try{
    const { data } = await axios(`${URL_BASE}/entrada`, {
      "Content-Type": "application/json",
      headers:{
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

};


/**
 * Retrieves a project by its ID.
 * @param {number} id - The ID of the project.
 * @returns {Promise<Object>} - The project object.
 */
export const getPostById = async (id) => {
  try {
    const data = await getPost();
    const project = data.filter((project) => parseInt(project.id) == id);

    if (project?.length > 0) {
      return project[0];
    }

  } catch (error) {
    console.log(error);
  }
};
