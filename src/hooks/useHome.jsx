import { useContext } from "react";
import { HomeContext } from "../content/HomeProvider";

const useHome = () => 
{
    return useContext(HomeContext);
}

export default useHome;