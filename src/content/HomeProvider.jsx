import { createContext, memo, useCallback, useEffect, useState } from "react";
import { getHomeSection } from "../config/getHomeSections";

const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const [homeSections, setHomeSections] = useState([]);
  const [loadingHomeSection, setLoadingHomeSection] = useState(false);

  const memorizeSections = useCallback(async () => {
    try {
      setLoadingHomeSection(true);
      const data = await getHomeSection();
      setHomeSections(data?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingHomeSection(false);
    }
  }, []);

  useEffect(() => {
    memorizeSections();
  }, []);

  return (
    <HomeContext.Provider value={{ homeSections, loadingHomeSection }}>
      {children}
    </HomeContext.Provider>
  );
};

export { HomeContext };
export default HomeProvider;
