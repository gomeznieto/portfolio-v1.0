import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useMode from "../hooks/useMode";
import useProfile from "../hooks/useProfile";
import useProject from "../hooks/useProjects";
import useBlog from "../hooks/useBlog";
import useFormat from "../hooks/useFormat";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const { mode, setMode } = useMode();
  const { profile } = useProfile();
  const { format } = useFormat();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Cambiar el modo de la pagina
  const handleMode = async () => {
    setMode(!mode);
  };

  // Cambiar la pagina a Works al incio
  const setActualPageProjects = useProject().setActualPage;
  const ENTRIES_PROJECTS = useProject().ENTRIES;
  const setEntriesProjects = useProject().setEntries;

  const handleProject = () => {
    setActualPageProjects(1);
    setEntriesProjects([0, ENTRIES_PROJECTS]);
  };

  // Cambiar la pagina a posts al incio
  const setActualPagePosts = useBlog().setActualPage;
  const ENTRIES_POSTS = useBlog().ENTRIES;
  const setEntriesPosts = useBlog().setEntries;
  const handlePost = () => {
    setActualPagePosts(1);
    setEntriesPosts([0, ENTRIES_POSTS]);
  };

  return (
    <div
      className={`z-40 flex flex-col fixed w-full ${
        mode ? "text-white" : "text-zinc-800"
      }`}
    >
      <nav className={`py-2 px-3 ${mode ? "mainNavDark" : "mainNavlight"}`}>
        <div className="flex whitespace-nowrap md:w-3/5 lg:w-2/5 left-0 right-0 m-auto ">
          <div className="flex justify-between">
            <ul className="flex lg:justify-center items-center">
              <li>
                <Link to="/">
                  <div className="flex icon-header-animation">
                    <img
                      src={mode ? "/icon-title.svg" : "/icon-title-ligth.svg"}
                      className="mr-1"
                      alt="icono de codigo de porgramacion"
                    />
                    <p className="title-page mr-5">{profile?.name}</p>
                  </div>
                </Link>
              </li>
              {format?.map((link) => {
                return (
                  <li key={link?.id}>
                    <Link
                      to={link?.name}
                      className={`hidden md:flex mr-5 link-page hover:underline underline-offset-4 ${
                        pathname === `/${link?.name}` &&
                        "background-nav transition-all duration-500"
                      }`}
                      onClick={handlePost}
                    >
                      {link?.name}
                    </Link>
                  </li>
                );
              })}
              <li>
                <a
                  href="https://github.com/alefigure8/portfolio-v1.0"
                  target="_blank"
                  className="hidden link-page md:flex mr-5"
                >
                  <i
                    className="fa-brands fa-github mr-2 flex items-center"
                    alt="Icono de Github"
                  ></i>
                  <span className="hover:underline underline-offset-4">
                    Source
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={profile?.cv}
                  target="_blank"
                  className="hidden link-page md:flex mr-5"
                >
                  <i
                    className="fa-solid fa-file-pdf mr-2 flex items-center"
                    alt="Icono de Descarga"
                  ></i>
                  <span className="hover:underline underline-offset-4">
                    Bajar CV
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-auto flex">
            <div
              onClick={handleMode}
              className={`bg-toogle-color bg-opacity-90 px-3 py-2 text-black rounded-md cursor-pointer transition-all ${
                mode ? "transition-mode" : "hidden"
              }`}
            >
              <i className="fa-solid fa-sun" alt="Icono de modo claro"></i>
            </div>
            <div
              onClick={handleMode}
              className={`bg-toogle-color-dark bg-opacity-90 px-3 py-2 text-white rounded-md cursor-pointer opacity-100 ${
                mode ? "hidden" : " transition-mode"
              }`}
            >
              <i className="fa-solid fa-moon" alt="Icono de modo oscuro"></i>
            </div>
            <div
              onClick={handleToggle}
              className="md:hidden ml-2 px-3 py-2 bg-neutral-900 border border-neutral-400 rounded-md text-neutral-400 cursor-pointer hover:bg-neutral-700 transition-all"
            >
              <i className="fa-solid fa-bars" alt="icono hamburguesa"></i>
            </div>
          </div>
        </div>
      </nav>
      <div className={`flex justify-end ${!isOpen && "hidden"}`}>
        <div
          className={`${isOpen ? "menu-h" : "menu-h-hidden"} ${
            mode ? "menu-h-dark" : "menu-h-light"
          }`}
        >
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                to="/"
                className={`hover:underline underline-offset-4 ${
                  pathname === "/" &&
                  "background-nav transition-all duration-500"
                }`}
                onClick={handleToggle}
              >
                Sobre mí
              </Link>
            </li>
            <li>
              <Link
                to="works"
                className={`hover:underline underline-offset-4 ${
                  pathname === "/works" &&
                  "background-nav transition-all duration-500"
                }`}
                onClick={handleToggle}
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                to="posts"
                className={`hover:underline underline-offset-4 ${
                  pathname === "/posts" &&
                  "background-nav transition-all duration-500"
                }`}
                onClick={handleToggle}
              >
                Posts
              </Link>
            </li>
            <li>
              <a
                href={profile?.cv}
                target="_blank"
                className={`hover:underline underline-offset-4`}
                onClick={handleToggle}
              >
                <i
                  className="fa-solid fa-file-pdf mr-2"
                  alt="Icono de Descarga"
                ></i>
                <span className="hover:underline underline-offset-4">
                  Bajar CV
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
