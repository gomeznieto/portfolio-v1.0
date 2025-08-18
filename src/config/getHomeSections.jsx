import axios from "axios";

export const getHomeSection = async () => {
  const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;
  const URL_BASE = import.meta.env.VITE_API_URL_BASE;

  try {
    const { data } = await axios(`${URL_BASE}/LayoutHome`, {
      "Content-Type": "application/json",
      headers: {
        "X-Api-Key": ACCESS_KEY,
      },
    });

    if (data) {
      return data;
    }

    return {};
  } catch (error) {
    console.log(error);
  }
};
