import useMode from "../hooks/useMode";

const AboutMe = ({ name, rol, img }) => {
  const { mode } = useMode();

  return (
    <>
      <div>
        <h1 className={mode ? "title" : "title-light"}>{name}</h1>
        <h2
          className={`parraph -ml-4 -mt-1 ${
            mode ? "text-white" : "text-zinc-800"
          }`}
        >
          {rol}
        </h2>
      </div>
      <div className="flex justify-center min-w-fit md:ml-10 mt-4 md:mt-0">
        <img
          className="rounded-full w-28 h-28 md:w-24 md:h-24 border-2"
          src={img}
          alt="foto de perfil"
        />
      </div>
    </>
  );
};
export default AboutMe;
