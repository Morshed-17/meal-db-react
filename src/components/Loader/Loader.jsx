import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center h-[520px] items-center">
      <InfinitySpin width="300" color="#4fa94d" />
    </div>
  );
};

export default Loader;
