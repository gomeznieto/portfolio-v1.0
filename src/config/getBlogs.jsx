import axios from "axios";

/**
 * Fetches blogs from an external API or a local JSON file.
 * If the external API fails, it falls back to the local JSON file.
 * @returns {Promise<Array>} An array of blog data.
 */
export const getBlogs = async () => {
  // const URL_LOCAL = import.meta.env.VITE_API_LOCAL_BLOGS;
  // const URL = import.meta.env.VITE_API_EXTERNAL_BLOGS;
  // const URL_JSONBIN = import.meta.env.VITE_API_EXTERNAL_BLOGS_JSONBIN;
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

    console.log(data)

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
  //   /* Si falla la API externa, llamamos los datos de la API interna */
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
        
  //     }
  //   }

  //   return [];
  // }
};

/**
 * Retrieves a blog by its ID.
 * @param {number} id - The ID of the blog to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the blog object with the specified ID, or undefined if not found.
 */
export const getBlogsById = async (id) => {
  try {
    const data = await getBlogs();
    const blog = data.filter((blog) => parseInt(blog.id) == id);

    if (blog?.length > 0) {
      return blog[0];
    }
  } catch (error) {
    console.log(error);
  }
};
