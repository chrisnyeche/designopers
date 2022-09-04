import { FC } from "react";

const Error: FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <img className="w-[200px] h-[200px]" src="/error.png" alt="" />
      <h1 className="text-2xl">Something went wrong</h1>
    </div>
  );
};

export default Error;
