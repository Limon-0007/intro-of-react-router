import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {navigation.state === "loading" && (
          <button type="button" className="bg-indigo-400 ..." disabled>
            <svg
              className="animate-spin h-5 w-5 mr-3 ..."
              viewBox="0 0 24 24"
            ></svg>
            Processing...
          </button>
        )}
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
