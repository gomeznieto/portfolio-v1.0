import useProfile from "../hooks/useProfile";
import Bio from "./Bio";
import Skeleton from "./Skeleton";
import Title from "./Title";

const SectionBio = ({ data }) => {
  const { loadingProfile } = useProfile();
  return (
    <section className=" transition-all-4 mt-9">
      <Title title={data?.type} />
      {loadingProfile ? (
        <Skeleton />
      ) : (
        <>
          {data?.data?.bios?.map((bio) => {
            return <Bio key={bio.year} bio={bio} />;
          })}
        </>
      )}
    </section>
  );
};

export default SectionBio;
