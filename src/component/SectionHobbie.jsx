import useMode from "../hooks/useMode";
import useProfile from "../hooks/useProfile";
import MarkdownRenderer from "./common/MarkdownRenderer";
import Skeleton from "./Skeleton";

const SectionHobbie = ({ data }) => {
  const { mode } = useMode();
  const { loadingProfile } = useProfile();
  return (
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
        >
          <MarkdownRenderer content={data?.data?.hobbies} />
        </p>
      )}
    </section>
  );
};

export default SectionHobbie;
