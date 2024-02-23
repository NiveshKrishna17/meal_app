import React, { Fragment } from "react";
import { Header } from "../Components";
import { Hero } from "../Pages";

const Home = () => {
  return (
    <Fragment>
      <div className="bg-indigo-800 sm:w-full md:w-screen sm:h-screen md:h-full">
        <Header />
        <Hero />
      </div>
    </Fragment>
  );
};

export default Home;
