import useMode from "../hooks/useMode";
import useProfile from "../hooks/useProfile";
import ButtonSocial from "./ButtonSocial";
import MarkdownRenderer from "./common/MarkdownRenderer";
import Skeleton from "./Skeleton";
import Title from "./Title";

const AboutMe = ({ data }) => {
  const URL = import.meta.env.VITE_URL;
  const mail = `mailto:${data?.data?.mail}`;
  
  const { mode } = useMode();
  const { loadingProfile } = useProfile();

  return (
    <section className=" transition-all-1">
      {loadingProfile ? (
        <Skeleton />
      ) : (
        <div>
          <div className="md:flex justify-between">
            <div>
              <h1 className={mode ? "title" : "title-light"}>
                {data?.data?.name}
              </h1>
              <h2
                className={`parraph -ml-4 -mt-1 ${
                  mode ? "text-white" : "text-zinc-800"
                }`}
              >
                {data?.data?.headline}
              </h2>
            </div>
            <div className="flex justify-center min-w-fit md:ml-10 mt-4 md:mt-0">
              <img
                className="rounded-full w-28 h-28 md:w-24 md:h-24 border-2"
                src={`${URL}/${data?.data?.profileImage}`}
                alt="foto de perfil"
              />
            </div>
          </div>
          <div>
            <Title title="Sobre mí" />
            <p
              className={`text-justify parraph mb-6 ${
                mode ? "text-white" : "text-zinc-800"
              }`}
            >
              <MarkdownRenderer content={data?.data?.about} />
            </p>
            {/* <Link to="works">
              <ButtonPrimary>Mis trabajos</ButtonPrimary>
            </Link> */}
            <div className="flex justify-center gap-4">
              <a href={mail} target="_blank">
                <ButtonSocial icon="fa fa-envelope-open">
                  Contáctame
                </ButtonSocial>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default AboutMe;
