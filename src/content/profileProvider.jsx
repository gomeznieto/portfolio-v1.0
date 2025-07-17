import { createContext, useState, useEffect, useCallback } from "react";
import { getProfile } from "../config/getProfile";

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({});
  const [loadingProfile, setLoading] = useState(true);

  const memorizeProfile = useCallback(async () => {
    const {data} = await getProfile();
    setProfile(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    memorizeProfile();
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        loadingProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext };

export default ProfileProvider;
