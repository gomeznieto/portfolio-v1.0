import { Link } from "react-router-dom";
import { setPosition } from "../config/setPosition";
import AboutMe from "../component/AboutMe";
import Bio from "../component/Bio";
import ButtonPrimary from "../component/Button";
import ButtonSocial from "../component/ButtonSocial";
import NoContent from "../component/NoContent";
import Post from "../component/Post";
import Skeleton from "../component/Skeleton";
import SocialNetwork from "../component/SocialNetWork";
import Spinner from "../component/Spinner";
import Title from "../component/Title";
import useBlog from "../hooks/useBlog";
import useMode from "../hooks/useMode";
import useProfile from "../hooks/useProfile";
import useProject from "../hooks/useProjects";
import { useEffect } from "react";

const Home = () => {
  const URL = import.meta.env.VITE_URL;
  const { blogs, loading } = useBlog();
  const { projects } = useProject();
  const { mode } = useMode();
  const { profile, loadingProfile } = useProfile();
  const POSTS = 2;

  //Fields
  const field_about = profile?.about;
  const field_like = profile?.hobbies;

  //Networks
  const networks= profile?.networks;
  // const mail = networks?.find((network) => network.name === "Mail").url;
  const mail = profile?.email;
  const linkedin = networks?.find((network) => network.name === "LinkedIn").url;

  //Colocamos la posicion en la parte superior
  useEffect(() => {
    setPosition();
  }, []);

  return (
    <>
      <div
        className={`bg-opacity-50 backdrop-blur-md py-3 rounded-lg text-center mb-6 transition-all-1 ${
          mode ? "bg-zinc-700" : "bg-white"
        }`}
      >
        <p
          className={`transition-all text-base ${
            mode ? "text-white" : "text-zinc-800"
          }`}
        >
          Hola 👋, gracias por visitar mi portfolio!
        </p>
      </div>

      {/*
        PRESENTACION
      */}
      {loadingProfile ? (
        <Skeleton />
      ) : (
        <section className="md:flex transition-all-1">
          <AboutMe
            name={profile?.name}
            // rol={profile?.rol}
             rol={"Desarrolador"}
            img={`${URL}${profile?.img}`}
          />
        </section>
      )}

      {/*
        SOBRE MI
      */}
      <section className=" transition-all-2">
        <Title title="Sobre mí" />
        {loadingProfile ? (
          <Skeleton />
        ) : (
          <>
            <p
              className={`text-justify parraph mb-6 ${
                mode ? "text-white" : "text-zinc-800"
              }`}
              dangerouslySetInnerHTML={{ __html: field_about }}
            ></p>
            {/* <Link to="works">
              <ButtonPrimary>Mis trabajos</ButtonPrimary>
            </Link> */}
            <div className="flex justify-center gap-4">
              <a href={mail} target="_blank">
                <ButtonSocial icon="fa fa-envelope-open">
                  Contáctame
                </ButtonSocial>
              </a>
              <a
                href={linkedin}
                target="_blank"
              >
                <ButtonSocial icon="fa-brands fa-linkedin">
                  Linkedin
                </ButtonSocial>
              </a>
            </div>
          </>
        )}
      </section>
      {/*
        ULTIMOS PROYECTOS
      */}
      <section className="transition-all-3 mt-9">
        <Title title="Proyectos" />
        <div className="flex justify-center flex-col md:flex-row mt-6 mb-6 md:gap-6">
          {loading ? (
            <Spinner />
          ) : projects.length > 0 ? (
            projects
              .map((project) => {
                return <Post obj={project} href="work" key={project.id} />;
              })
              .reverse()
              .slice(0, POSTS)
          ) : (
            <NoContent msg="No hay proyectos para mostrar" />
          )}
        </div>
        <Link to="works">
          <ButtonPrimary>Anteriores proyectos</ButtonPrimary>
        </Link>
      </section>

      {/*
        BIO
      */}
      <section className=" transition-all-4 mt-9">
        <Title title="Bio" />
        {loadingProfile ? (
          <Skeleton />
        ) : (
          <>
            {profile?.bios?.map((bio) => {
              return <Bio key={bio.year} bio={bio} />;
            })}
          </>
        )}
      </section>

      {/*
        REDES 
      */}
      <section className="transition-all-5 mt-9" id="redes">
        <Title title="Redes" />
        {loadingProfile ? (
          <Skeleton />
        ) : (
          <div className="flex flex-col items-start">
            {profile?.networks?.map((network) => {
              return <SocialNetwork key={network.id} network={network} />;
            })}
          </div>
        )}
      </section>

      {/* 
          ME GUSTA
      */}
      <section className="mb-6 transition-all-6 mt-9">
        <h4 className={mode ? "sub-title" : "sub-title-light"}>
          I <i className="fa-solid fa-heart text-base underline-gray"></i>
        </h4>
        {loadingProfile ? (
          <Skeleton />
        ) : (
          <p
            className={`text-justify parraph ${
              mode ? "text-white" : "text-zinc-800"
            }`}
            dangerouslySetInnerHTML={{ __html: field_like }}
          ></p>
        )}
      </section>

      {/*
        ULTIMOS POSTS
      */}
      <section className="transition-all-7 mt-9">
        <Title title="Posts" />
        <div className="flex justify-center flex-col md:flex-row mt-6 mb-6 md:gap-6">
          {loading ? (
            <Spinner />
          ) : blogs.length > 0 ? (
            blogs
              .map((blog) => {
                return <Post obj={blog} href="post" key={blog.id} />;
              })
              .reverse()
              .slice(0, POSTS)
          ) : (
            <NoContent msg="No hay posts para mostrar" />
          )}
        </div>
        <Link to="posts">
          <ButtonPrimary>Anteriores posts</ButtonPrimary>
        </Link>
      </section>
    </>
  );
};

export default Home;
