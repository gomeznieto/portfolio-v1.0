import useBlog from "../hooks/useBlog";
import useMode from "../hooks/useMode";
import usePost from "../hooks/usePost";
import useProjects from "../hooks/useProjects";

const ButtonPages = ({ content }) => {
  const { mode } = useMode();
  const pages = usePost().pages;
  const ENTRIES = usePost.ENTRIES;
  const actualPage = usePost.actualPage;
  const setActualPage = usePost.setActualPage;
  const setEntries = usePost.setEntries;
  const entries = usePost.entries;

  const handleNext = () => {
    setActualPage(actualPage + 1);
    setEntries([entries[0] + ENTRIES, entries[1] + ENTRIES]);
  };

  const handlePrev = () => {
    setActualPage(actualPage - 1);
    setEntries([entries[0] - ENTRIES, entries[1] - ENTRIES]);
  };

  return (
    <div className="flex justify-center">
      <div className="flex justify-center w-2/5 gap-4">
        {actualPage != 1 && (
          <button
            className={`rounded-lg py-2 px-4 font-medium hover:bg-teal-500 cursor-pointer transition-all flex justify-center items-center ${
              mode ? "text-zinc-800 bg-teal-300 " : "text-white bg-teal-700 "
            }`}
            onClick={handlePrev}
          >
            <i className="fa-solid fa-chevron-left mr-5 btn-size-icons"></i>
            Anterior
          </button>
        )}
        {actualPage != pages && (
          <button
            className={`rounded-lg py-2 px-4 font-medium hover:bg-teal-500 cursor-pointer transition-all flex justify-center items-center ${
              mode ? "text-zinc-800 bg-teal-300 " : "text-white bg-teal-700 "
            }`}
            onClick={handleNext}
          >
            Siguientes
            <i className="fa-solid fa-chevron-right ml-5 btn-size-icons"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default ButtonPages;
