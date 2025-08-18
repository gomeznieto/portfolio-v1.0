import useProfile from "../hooks/useProfile";
import Skeleton from "./Skeleton";
import SocialNetwork from "./SocialNetWork";
import Title from "./Title";

const SectionNetwork = ({ data }) => {
  const { loadingProfile } = useProfile();
  return (
    <section className="transition-all-5 mt-9" id="redes">
      <Title title="Social Networks" />
      {loadingProfile ? (
        <Skeleton />
      ) : (
        <div className="flex flex-col items-start">
          {data?.data?.socialNetwork?.map((network) => {
            return <SocialNetwork key={network.id} network={network} />;
          })}
        </div>
      )}
    </section>
  );
};

export default SectionNetwork;
