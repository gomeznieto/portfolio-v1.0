import axios from "axios";

export const getProfile = async () => {
  // const URL_LOCAL = import.meta.env.VITE_API_LOCAL_PROFILE;
  // const URL = import.meta.env.VITE_API_EXTERNAL_PROFILE;
  // const URL_JSONBIN = import.meta.env.VITE_API_EXTERNAL_PROFILE_JSONBIN;
  // const MASTER_KEY = import.meta.env.VITE_MASTER_KEY;
  // const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

   const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;
   const URL_BASE = import.meta.env.VITE_API_URL_BASE;

  try{
    const { data } = await axios(`${URL_BASE}/usuario`, {
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

  // try {
  //   const { data } = await axios(URL, {
  //     "Content-Type": "application/json",
  //   });

  //   if (data) {
  //     return data;
  //   }

  //   return [];
  // } catch (error) {
  //   /* Si falla la API externa, llamamos los datos de una segunda API externa */
  //   try {
  //     const { data } = await axios(URL_JSONBIN, {
  //       "Content-Type": "application/json",
  //       headers: {
  //         "X-Master-Key": MASTER_KEY,
  //         "X-Access-Key": ACCESS_KEY,
  //       },
  //     });

  //     if (data?.record) {
  //       return data.record;
  //     }
  //   } catch (error) {
  //     try {
  //       /* Si falla la API externa, llamamos los datos de la API interna */
  //       const { data } = await axios(URL_LOCAL, {
  //         "Content-Type": "application/json",
  //       });

  //       if (data) {
  //         return data;
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   return [];
  // }
};
