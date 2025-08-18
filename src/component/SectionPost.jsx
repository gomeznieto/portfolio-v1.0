import useHome from "../hooks/useHome";
import useMode from "../hooks/useMode";
import NoContent from "./NoContent";
import Post from "./Post";
import Spinner from "./Spinner";
import Title from "./Title";

const SectionPost = ({data}) => {
  const { mode } = useMode();
   const {  loadingHomeSection } = useHome();
    console.log(data)
  return (
    <section className="transition-all-3 mt-9">
      <Title title={data?.name} />
      <div className="flex justify-center flex-col md:flex-row mt-6 mb-6 md:gap-6">
        {loadingHomeSection ? (
          <Spinner />
        ) : data?.data?.posts?.length > 0 ? (
          data?.data?.posts?.map((project) => {
            return (
              <Post obj={project} href={project?.format} key={project.id} />
            );
          })
        ) : (
          <NoContent
            msg={`No hay ${data?.type} para mostrar`}
          />
        )}
      </div>
      {/* <Link to="works">
          <ButtonPrimary>Anteriores {homeSectionName}</ButtonPrimary>
        </Link> */}
    </section>
  );
};

export default SectionPost;
