import React, { Fragment, useEffect } from "react";
import { Card, Filter } from "../Components";
import useStore from "../store";

const Hero = () => {
  const getMealData = useStore((state) => state.getMealData);
  const data = useStore((state) => state.data);

  useEffect(() => {
    getMealData();
  }, [getMealData]);

  return (
    <Fragment>
      <div className="md:flex flex-wrap gap-3 top-20 py-20 px-5">
        <Filter />
      </div>
    </Fragment>
  );
};

export default Hero;
