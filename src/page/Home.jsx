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
  console.log("Desde el home", homeSections)
  return (
    <>
      {/* SALUDO INICIAL */}
      <HelloHome />

      {/* HOME LAYOUT */}
      {homeSections?.length > 0 ? homeSections?.map((section) => {
        switch (section?.type) {
          case HomeLayoutConstants.About:
            return <AboutMe key={section?.order} data={section} />;
          case HomeLayoutConstants.Bio:
            return <SectionBio key={section?.order} data={section} />;
          case HomeLayoutConstants.Hobbies:
            return <SectionHobbie key={section?.order} data={section} />;
          case HomeLayoutConstants.SocialNetwork:
            return <SectionNetwork key={section?.order} data={section} />;
          case HomeLayoutConstants.HomeSection:
            return <SectionPost key={section?.order} data={section} />;
        }
      })
      : <p>Página en construcción</p>
      }
    </>
  );
};

export default Home;
