import useMode from "../hooks/useMode";

const HelloHome = () => {
  const { mode } = useMode();
  return (
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
        Hola, soy un desarrollador viviendo en Buenos Aires!
      </p>
    </div>
  );
};

export default HelloHome;
