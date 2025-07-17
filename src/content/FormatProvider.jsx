import { createContext, useCallback, useEffect, useState } from "react";
import { getFormats } from "../config/getFormat";

const FormatContext = createContext();

const FormatProvider = ({ children }) => {
  const [format, setFormat] = useState([]);
  const [loading, setLoading] = useState(false);

  const memorizeFormat = useCallback(async () => {
    const { data } = await getFormats();
    console.log(data)
    setFormat(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    memorizeFormat();
  }, []);
  return (
    <FormatContext.Provider value={{ format, loading }}>
      {children}
    </FormatContext.Provider>
  );
};

export {
  FormatContext,
}

export default FormatProvider;
