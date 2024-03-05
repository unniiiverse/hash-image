import React from "react";
import TestComponent from "./components/HashImage";

const Home: React.FC = () => {
  return (
    <div className="Home bg-red-400">
      {/* <TestComponent src="https://media.animee.club/d17d0813-b60f-4894-be3b-b7418f5ca9d2" alt="..." width={400} height={400} /> */}
      {/* <TestComponent src="https://media.animee.club/d17d0813-b60f-4894-be3b-b7418f5ca9d2" alt="..." fill parentClassName="!w-[600px] !h-[300px]" /> */}
      <TestComponent src="https://media.animee.club/d17d0813-b60f-4894-be3b-b7418f5ca9d2" alt="..." fill parentClassName="!w-[600px] !h-[600px]" />
    </div>
  );
};

export default Home;