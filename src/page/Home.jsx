import { setPosition } from "../config/setPosition";
import { useEffect } from "react";
import AboutMe from "../component/AboutMe";
import useHome from "../hooks/useHome"; // Único que deberiamos recibir en home
import SectionPost from "../component/SectionPost";
import SectionBio from "../component/SectionBio";
import SectionHobbie from "../component/SectionHobbie";
import { HomeLayoutConstants } from "../utils/constants/HomeLayoutConstants";
import SectionNetwork from "../component/SectionNetwork";
import HelloHome from "../component/HelloHome";

const Home = () => {
  const { homeSections } = useHome();
  useEffect(() => {
    setPosition();
  }, []);
  console.log(homeSections)
  return (
    <>
      {/* SALUDO INICIAL */}
      <HelloHome />

      {/* HOME LAYOUT */}
      {homeSections?.map((section) => {
        switch (section?.type) {
          case HomeLayoutConstants.About:
            return <AboutMe data={section} />;
            break;
          case HomeLayoutConstants.Bio:
            return <SectionBio data={section} />;
            break;
          case HomeLayoutConstants.Hobbies:
            return <SectionHobbie data={section} />;
            break;
          case HomeLayoutConstants.SocialNetwork:
            return <SectionNetwork data={section} />;
            break;
          case HomeLayoutConstants.HomeSection:
            return <SectionPost data={section} />;
            break;
        }
      })}
    </>
  );
};

export default Home;
